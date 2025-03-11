import React, { useMemo } from "react";
import * as THREE from "three";


const Floor = ({ size = [14, 12], userTexture = null }) => {
  // Load default or user-uploaded texture
  const floorTexture = useMemo(() => {
    // Use default texture if no user texture is provided
    const textureUrl = userTexture || "/textures/default-wood.jpg";
    
    const texture = new THREE.TextureLoader().load(
      textureUrl,
      // Success callback
      (loadedTexture) => {
        loadedTexture.wrapS = loadedTexture.wrapT = THREE.RepeatWrapping;
        loadedTexture.repeat.set(size[0] / 4, size[1] / 4);
      },
      // Progress callback (optional)
      undefined,
      // Error callback
      (error) => {
        console.error("Error loading texture:", error);
        // Fallback to default texture if loading fails
      }
    );

    return texture;
  }, [size, userTexture]);

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={size} />
      <meshStandardMaterial 
        map={floorTexture} 
        roughness={0.5} 
        metalness={0.1} 
      />
    </mesh>
  );
};


export default Floor;
