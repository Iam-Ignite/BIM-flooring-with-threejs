import React, { useState, useEffect } from 'react';
import { useTexture } from '@react-three/drei';
import * as THREE from 'three';

// Simplified floor options with more reliable paths
const FLOOR_OPTIONS = [
  { 
    id: 'wood-parquet', 
    name: 'Wood Parquet', 
    texture: '/wood-parquet.jpeg',
  },
  { 
    id: 'marble', 
    name: 'White Marble', 
    texture: '/marble.jpeg',
  },
  { 
    id: 'concrete', 
    name: 'Polished Concrete', 
    texture: '/concrete.jpeg',
  },
  { 
    id: 'carpet', 
    name: 'Carpet', 
    texture: '/carpet.jpeg',
  },
  { 
    id: 'tile', 
    name: 'Ceramic Tile', 
    texture: '/tile.jpeg',
  }
];

// Floor component with simpler texture loading for reliability
const Floor = ({ floorType = 'wood-parquet', customTexture = null, size = 20, glossiness = 0.2, reflection = 0.5 }) => {
  const selectedFloor = FLOOR_OPTIONS.find(option => option.id === floorType) || FLOOR_OPTIONS[0];
  const texturePath = customTexture || selectedFloor.texture;
  
  // Use a try-catch block to handle texture loading more gracefully
  let texture;
  try {
    texture = useTexture(texturePath);
  } catch (error) {
    console.warn("Failed to load texture:", texturePath, error);
    // Fallback to a basic material if texture fails to load
  }
  
  // Configure texture repeat if available
  useEffect(() => {
    if (texture) {
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(size / 4, size / 4);
    }
  }, [texture, size]);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow position={[0, 0, 0]}>
      <planeGeometry args={[size, size]} />
      {texture ? (
        <meshStandardMaterial 
          map={texture}
          roughness={1 - glossiness}
          metalness={reflection}
        />
      ) : (
        // Fallback material if texture loading fails
        <meshStandardMaterial 
          color={floorType === 'wood-parquet' ? "#8B4513" : 
                 floorType === 'marble' ? "#F5F5F5" :
                 floorType === 'concrete' ? "#808080" :
                 floorType === 'carpet' ? "#404040" : "#D2B48C"}
          roughness={1 - glossiness}
          metalness={reflection}
        />
      )}
    </mesh>
  );
};

// UI Component for floor selection
const FloorControls = ({ onFloorChange, onCustomTextureUpload, currentFloor = 'wood-parquet' }) => {
  const handleFloorSelect = (floorId) => {
    onFloorChange(floorId);
  };

  const handleCustomTextureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onCustomTextureUpload(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg z-10">
      <h3 className="text-lg font-bold mb-2">Floor Options</h3>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {FLOOR_OPTIONS.map((floor) => (
          <div 
            key={floor.id} 
            className={`cursor-pointer p-2 border rounded-md ${currentFloor === floor.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
            onClick={() => handleFloorSelect(floor.id)}
          >
            <div className="w-16 h-16 mb-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-full h-full flex items-center justify-center text-xs text-center">{floor.name}</div>
            </div>
            <p className="text-xs text-center">{floor.name}</p>
          </div>
        ))}
      </div>
      
      <div className="border-t pt-2">
        <p className="text-sm mb-2">Upload custom texture:</p>
        <input 
          type="file" 
          accept="image/*" 
          onChange={handleCustomTextureUpload} 
          className="text-xs w-full"
        />
      </div>
    </div>
  );
};

// Main component that combines Floor and FloorControls
const CustomizableFloor = ({ size = 20, showControls = true }) => {
  const [floorType, setFloorType] = useState('wood-parquet');
  const [customTexture, setCustomTexture] = useState(null);
  const [glossiness, setGlossiness] = useState(0.2);
  const [reflection, setReflection] = useState(0.5);

  return (
    <>
      {/* 3D Floor */}
      <Floor 
        floorType={floorType} 
        customTexture={customTexture} 
        size={size} 
        glossiness={glossiness} 
        reflection={reflection} 
      />
      
      {/* UI Controls (if enabled) */}
      {showControls && (
        <FloorControls 
          onFloorChange={setFloorType} 
          onCustomTextureUpload={setCustomTexture}
          currentFloor={floorType}
        />
      )}
    </>
  );
};

export default CustomizableFloor;