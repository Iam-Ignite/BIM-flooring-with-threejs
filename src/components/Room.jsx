import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import PictureFrame from "./PictureFrame";
import PlantStand from "./PlantStand";
import Curtains from "./Curtains";
import Console from "./Console";
import Bookshelf from "./Bookshelf";
import WallSconce from "./WallSconce";
import Television from "./Television";
import Chandelier from "./Chandelier";
import DiningSet from "./DiningSet";
import CoffeeTable from "./CoffeeTable";
import Armchair from "./Armchair";
import Couch from "./Couch";
import Rug from "./Rug";
import Floor from "./Floor";

// Set up the scene
const Scene = ({ userTexture, wallColor }) => {
  // Much larger room size - expanded in all dimensions
  const roomSize = [14, 4.5, 12];

  return (
    <>
      {/* Enhanced lighting setup for the larger space */}

      <ambientLight intensity={0.5} />

      {/* Central ceiling light */}
      <pointLight
        position={[0, 4.2, 0]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />

      {/* Strategic accent lighting */}
      <spotLight
        position={[-5, 3.8, 0]}
        intensity={0.6}
        angle={Math.PI / 5}
        penumbra={0.3}
        castShadow
        target-position={[-3, 0, 0]}
      />
      <spotLight
        position={[5, 3.8, 0]}
        intensity={0.6}
        angle={Math.PI / 5}
        penumbra={0.3}
        castShadow
        target-position={[3, 0, 0]}
      />
      <spotLight
        position={[0, 3.8, 5]}
        intensity={0.6}
        angle={Math.PI / 5}
        penumbra={0.3}
        castShadow
        target-position={[0, 0, 3]}
      />
      <spotLight
        position={[0, 3.8, -5]}
        intensity={0.6}
        angle={Math.PI / 5}
        penumbra={0.3}
        castShadow
        target-position={[0, 0, -3]}
      />

      {/* Room Walls - now using customizable wall color */}
      <mesh position={[0, 2.2, 0]}>
        <boxGeometry args={roomSize} />
        <meshStandardMaterial color={wallColor} side={THREE.BackSide} />
      </mesh>

      {/* Large Floor */}

      <Floor size={[14, 12]} userTexture={userTexture} />

      {/* Oversized Area Rug */}
      <Rug position={[-2, 0.01, 0]} size={[7, 0.05, 5]} />

      {/* Living Area Furniture Group - positioned in the main area */}
      <group position={[-2, 0, 0]}>
        <Couch position={[0, 0, -2]} />
        <Armchair position={[2.5, 0, -0.5]} rotation={[0, -Math.PI / 4, 0]} />
        <Armchair position={[-2.5, 0, -0.5]} rotation={[0, Math.PI / 4, 0]} />
        <CoffeeTable position={[0, 0, 0]} />
      </group>

      {/* Entertainment Wall */}
      <Television position={[-6.9, 1.2, 0]} />

      {/* Fancy Wall Sconces */}
      <WallSconce position={[-6.9, 2.4, -4]} rotation={[0, Math.PI / 2, 0]} />
      <WallSconce position={[-6.9, 2.4, 4]} rotation={[0, Math.PI / 2, 0]} />
      <WallSconce position={[6.9, 2.4, -4]} rotation={[0, -Math.PI / 2, 0]} />
      <WallSconce position={[6.9, 2.4, 4]} rotation={[0, -Math.PI / 2, 0]} />
      <WallSconce position={[-4, 2.4, -5.9]} rotation={[0, 0, 0]} />
      <WallSconce position={[4, 2.4, -5.9]} rotation={[0, 0, 0]} />
      <WallSconce position={[-4, 2.4, 5.9]} rotation={[0, Math.PI, 0]} />
      <WallSconce position={[4, 2.4, 5.9]} rotation={[0, Math.PI, 0]} />
      {/* Dining Area - positioned on the other side of the room */}
      {/* <DiningSet position={[4, 0.5, 1.5]} /> */}

      {/* Grand Chandelier - centered in the expanded room */}
      <Chandelier position={[0, 4.2, 0]} scale={1.5} />

      {/* Multiple window treatments for the larger space */}
      <Curtains
        position={[-6.95, 2, -3]}
        rotation={[0, Math.PI / 2, 0]}
        size={[3, 3.5, 0.1]}
      />
      <Curtains
        position={[-6.95, 2, 3]}
        rotation={[0, Math.PI / 2, 0]}
        size={[3, 3.5, 0.1]}
      />
      <Curtains position={[0, 2, -5.95]} size={[4, 3.5, 0.1]} />

      {/* Multiple Picture Frames */}
      <PictureFrame
        position={[6.95, 2.2, -2]}
        rotation={[0, -Math.PI / 2, 0]}
        size={[1.8, 1.2, 0.05]}
      />
      <PictureFrame
        position={[6.95, 2.2, 2]}
        rotation={[0, -Math.PI / 2, 0]}
        size={[1.8, 1.2, 0.05]}
      />
      <PictureFrame
        position={[0, 2.8, -5.9]}
        rotation={[0, 0, 0]}
        size={[2.2, 1.5, 0.05]}
      />
      <PictureFrame
        position={[-4, 2.2, -5.9]}
        rotation={[0, 0, 0]}
        size={[1.5, 1.0, 0.05]}
      />
      <PictureFrame
        position={[4, 2.2, -5.9]}
        rotation={[0, 0, 0]}
        size={[1.5, 1.0, 0.05]}
      />

      {/* Additional Decor Elements */}
      <Bookshelf position={[6.9, 0, -4]} rotation={[0, -Math.PI / 2, 0]} />
      <PlantStand position={[-6, 0, -4]} />
      <Console position={[0, 0, -5.7]} />

      {/* Camera Controls - adjusted for the larger room */}
      <OrbitControls
        enableDamping={true}
        dampingFactor={0.05}
        minDistance={2}
        maxDistance={18} // Increased max distance
        target={[0, 1.5, 0]}
      />
    </>
  );
};

const Room = ({ home }) => {
  const [userTexture, setUserTexture] = useState(
    "../../public/wood-parquet.jpeg"
  );
  const [wallColor, setWallColor] = useState("#EAE7DC"); // Default wall color
  const [showFloorOptions, setShowFloorOptions] = useState(false);

  // Floor options data
 const floorOptions = [
    {
        "id": 1,
        "name": "2145 Floor",
        "description": "Light oak wooden flooring with a sleek finish",
        "durability": "High (25+ years)",
        "price": "$30/sq.ft",
        "texture": "../../public/2145.jpg"
    },
    {
        "id": 2,
        "name": "Bernard Hermant Floor",
        "description": "Classic checkered tile flooring",
        "durability": "Medium (20+ years)",
        "price": "$28/sq.ft",
        "texture": "../../public/bernard-hermant-cB18uhhf43s-unsplash.jpg"
    },
    {
        "id": 3,
        "name": "Black White Floor",
        "description": "Modern black and white checkered floor tiles",
        "durability": "High (30+ years)",
        "price": "$40/sq.ft",
        "texture": "../../public/black-white-floor.avif"
    },
    {
        "id": 4,
        "name": "Brick Floor",
        "description": "Rustic brick flooring for a vintage aesthetic",
        "durability": "Very High (50+ years)",
        "price": "$45/sq.ft",
        "texture": "../../public/brick-floor.jpg"
    },
    {
        "id": 5,
        "name": "Clean White Wall",
        "description": "Smooth white flooring for a minimalistic look",
        "durability": "Medium (15+ years)",
        "price": "$25/sq.ft",
        "texture": "../../public/clean-white-wall_1194-5925.avif"
    },
    {
        "id": 6,
        "name": "Geometric Pattern Floor",
        "description": "Hexagonal geometric patterned tiles",
        "durability": "High (30+ years)",
        "price": "$50/sq.ft",
        "texture": "../../public/geometric-pattern-floor.avif"
    },
    {
        "id": 7,
        "name": "Gray Parquet",
        "description": "Elegant grey parquet flooring",
        "durability": "High (30+ years)",
        "price": "$38/sq.ft",
        "texture": "../../public/gray-parquet.jpg"
    },
    {
        "id": 8,
        "name": "Joshua Bartell Floor",
        "description": "Sophisticated wooden flooring for premium interiors",
        "durability": "Very High (40+ years)",
        "price": "$55/sq.ft",
        "texture": "../../public/joshua-bartell-6vvIBTvL90A-unsplash.jpg"
    },
    {
        "id": 9,
        "name": "Lamp Floor",
        "description": "Subtle lighting-reflective floor tiles",
        "durability": "Medium (20+ years)",
        "price": "$35/sq.ft",
        "texture": "../../public/lamp-floor.avif"
    },
    {
        "id": 10,
        "name": "Marble Floor",
        "description": "Premium white marble flooring",
        "durability": "Very High (50+ years)",
        "price": "$75/sq.ft",
        "texture": "../../public/marble-floor.jpg"
    },
    {
        "id": 11,
        "name": "Parquet Floor Texture",
        "description": "Natural wooden parquet for an elegant touch",
        "durability": "High (30+ years)",
        "price": "$45/sq.ft",
        "texture": "../../public/parquet-floor-texture_1194-6957.avif"
    },
    {
        "id": 12,
        "name": "Red Parquet Floor",
        "description": "Bold red wooden parquet flooring",
        "durability": "High (35+ years)",
        "price": "$50/sq.ft",
        "texture": "../../public/red-parquet-floor_1194-6946.avif"
    },
    {
        "id": 13,
        "name": "Tile Floor",
        "description": "Classic patterned tile flooring",
        "durability": "High (30+ years)",
        "price": "$40/sq.ft",
        "texture": "../../public/tile-floor.jpg"
    },
    {
        "id": 14,
        "name": "Tile Motif",
        "description": "Decorative tile flooring with intricate patterns",
        "durability": "High (30+ years)",
        "price": "$55/sq.ft",
        "texture": "../../public/tile-motif.avif"
    },
    {
        "id": 15,
        "name": "Tiles Floor",
        "description": "Sleek modern tiles for contemporary homes",
        "durability": "High (30+ years)",
        "price": "$42/sq.ft",
        "texture": "../../public/tiles-floor-1.jpg"
    },
    {
        "id": 16,
        "name": "Wesley Tingey Floor",
        "description": "High-end wooden flooring with rich textures",
        "durability": "Very High (40+ years)",
        "price": "$60/sq.ft",
        "texture": "../../public/wesley-tingey-RZgumehZWs4-unsplash.jpg"
    },
    {
        "id": 17,
        "name": "White Wooden Floor",
        "description": "Bright and clean white wooden flooring",
        "durability": "High (30+ years)",
        "price": "$38/sq.ft",
        "texture": "../../public/white-wooden-floor.jpg"
    },
    {
        "id": 18,
        "name": "Wood Floor",
        "description": "Rustic dark wood flooring",
        "durability": "High (35+ years)",
        "price": "$48/sq.ft",
        "texture": "../../public/wood-floor-1.jpg"
    },
    {
        "id": 19,
        "name": "Wooden Floor",
        "description": "Timeless wooden flooring with natural textures",
        "durability": "Very High (40+ years)",
        "price": "$52/sq.ft",
        "texture": "../../public/wooden-floor-2.jpg"
    },
    {
        "id": 20,
        "name": "Wooden Parquet Floor",
        "description": "Classic parquet flooring with intricate designs",
        "durability": "Very High (45+ years)",
        "price": "$58/sq.ft",
        "texture": "../../public/wooden-parquet-floor.jpg"
    }
]

  // Handle texture upload
  const handleTextureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUserTexture(url);
    }
  };

  // Handle wall color change
  const handleWallColorChange = (event) => {
    setWallColor(event.target.value);
  };

  // Handle selecting a floor option
  const selectFloor = (texture) => {
    setUserTexture(texture);
    setShowFloorOptions(false);
  };

  // Toggle floor options panel
  const toggleFloorOptions = () => {
    setShowFloorOptions(!showFloorOptions);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {!home && (
        <div
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            zIndex: 10,
            background: "#fff",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
            maxWidth: "300px",
          }}
        >
          <div style={{ marginBottom: "10px" }}>
            <label
              htmlFor="texture-upload"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Upload Custom Floors
            </label>
            <input
              id="texture-upload"
              type="file"
              accept="image/*"
              onChange={handleTextureUpload}
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <button
              onClick={toggleFloorOptions}
              style={{
                padding: "8px 12px",
                background: "#4285F4",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                width: "100%",
              }}
            >
              {showFloorOptions
                ? "Hide Floor Options"
                : "Choose From Floor Options"}
            </button>
          </div>

          {showFloorOptions && (
            <div
              style={{
                marginTop: "10px",
                maxHeight: "300px",
                overflowY: "auto",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}
            >
              {floorOptions.map((floor) => (
                <div
                  key={floor.id}
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #eee",
                    cursor: "pointer",
                    transition: "background-color 0.2s",
                    backgroundColor:
                      userTexture === floor.texture ? "#f0f8ff" : "white",
                  }}
                  onClick={() => selectFloor(floor.texture)}
                >
                  <div style={{ fontWeight: "bold" }}>{floor.name}</div>
                  <div style={{ fontSize: "0.9em", color: "#555" }}>
                    {floor.description}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "5px",
                    }}
                  >
                    <span style={{ color: "#178217" }}>
                      Durability: {floor.durability}
                    </span>
                    <span style={{ fontWeight: "bold" }}>{floor.price}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div style={{ marginTop: "10px" }}>
            <label
              htmlFor="wall-color"
              style={{ display: "block", marginBottom: "5px" }}
            >
              Wall Color:
            </label>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input
                id="wall-color"
                type="color"
                value={wallColor}
                onChange={handleWallColorChange}
                style={{ marginRight: "10px" }}
              />
              <span>{wallColor}</span>
            </div>
          </div>
        </div>
      )}

      <Canvas
        shadows
        camera={{ position: [0, 3, 8], fov: 60 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: true, alpha: false }}
        linear
      >
        <Scene userTexture={userTexture} wallColor={wallColor} />
      </Canvas>
    </div>
  );
};

export default Room;
