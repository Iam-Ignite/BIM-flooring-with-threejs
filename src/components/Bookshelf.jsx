import React, { useMemo, useRef } from "react";
import * as THREE from "three";

const Bookshelf = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  // Create the bookshelf material
  const shelfMaterial = useMemo(() => new THREE.MeshStandardMaterial({ 
    color: "#5c3c10", 
    roughness: 0.8 
  }), []);
  
  // Create the bookshelf
  return (
    <group position={position} rotation={rotation}>
      {/* Main shelf back */}
      <mesh position={[0, 1.5, -0.3]} material={shelfMaterial}>
        <boxGeometry args={[2, 3, 0.1]} />
      </mesh>
      
      {/* Shelf bottom */}
      <mesh position={[0, 0, 0]} material={shelfMaterial}>
        <boxGeometry args={[2, 0.1, 0.6]} />
      </mesh>
      
      {/* Shelf top */}
      <mesh position={[0, 3, 0]} material={shelfMaterial}>
        <boxGeometry args={[2, 0.1, 0.6]} />
      </mesh>
      
      {/* Left side */}
      <mesh position={[-1, 1.5, 0]} material={shelfMaterial}>
        <boxGeometry args={[0.1, 3, 0.6]} />
      </mesh>
      
      {/* Right side */}
      <mesh position={[1, 1.5, 0]} material={shelfMaterial}>
        <boxGeometry args={[0.1, 3, 0.6]} />
      </mesh>

      {/* Shelf dividers */}
      {[0.5, 1.0, 1.5, 2.0, 2.5].map((y, i) => (
        <mesh key={`divider-${i}`} position={[0, y, 0]} material={shelfMaterial}>
          <boxGeometry args={[2, 0.1, 0.6]} />
        </mesh>
      ))}
      
      {/* Books - varied heights and colors */}
      {[...Array(15)].map((_, i) => {
        const shelf = Math.floor(i / 3);
        const posInShelf = i % 3;
        const colors = ["#8B4513", "#A52A2A", "#D2691E", "#CD853F", "#8B0000"];
        
        // Randomize book properties
        const width = 0.3 + Math.random() * 0.2;
        const height = 0.4 + Math.random() * 0.1;
        const depth = 0.2 + Math.random() * 0.1;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Position each book on shelf
        const xPos = -0.7 + posInShelf * 0.6;
        const yPos = shelf * 0.5 + 0.25;
        
        return (
          <group key={`book-${i}`} position={[xPos, yPos, 0]}>
            {/* Book body */}
            <mesh>
              <boxGeometry args={[width, height, depth]} />
              <meshStandardMaterial color={color} roughness={0.7} />
            </mesh>
            
            {/* Book spine details - simple line */}
            <mesh position={[0, 0, depth/2 + 0.001]}>
              <planeGeometry args={[width * 0.8, height * 0.02]} />
              <meshStandardMaterial color="#FFFFFF" transparent opacity={0.7} />
            </mesh>
          </group>
        );
      })}
      
      {/* Decorations */}
      {/* Plant */}
      <group position={[-0.7, 3.1, 0]}>
        <mesh>
          <cylinderGeometry args={[0.1, 0.15, 0.15, 16]} />
          <meshStandardMaterial color="#964B00" />
        </mesh>
        <mesh position={[0, 0.15, 0]}>
          <sphereGeometry args={[0.15, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
          <meshStandardMaterial color="#228B22" />
        </mesh>
      </group>
      
      {/* Small picture frame */}
      <group position={[0.5, 3.1, 0]} rotation={[0, 0, 0]}>
        <mesh>
          <boxGeometry args={[0.3, 0.25, 0.02]} />
          <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[0, 0, 0.011]}>
          <boxGeometry args={[0.25, 0.2, 0.01]} />
          <meshStandardMaterial color="#87CEEB" />
        </mesh>
      </group>
      
      {/* Clock */}
      <group position={[0, 1.0, 0.3]}>
        <mesh>
          <cylinderGeometry args={[0.15, 0.15, 0.05, 32]} rotation={[Math.PI/2, 0, 0]} />
          <meshStandardMaterial color="#D2B48C" />
        </mesh>
        <mesh position={[0, 0, 0.026]}>
          <circleGeometry args={[0.14, 32]} />
          <meshStandardMaterial color="#FFFFFF" />
        </mesh>
        {/* Clock hands */}
        <mesh position={[0, 0.05, 0.03]} rotation={[0, 0, Math.PI/4]}>
          <boxGeometry args={[0.01, 0.1, 0.01]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
        <mesh position={[0, 0, 0.03]} rotation={[0, 0, Math.PI/6]}>
          <boxGeometry args={[0.01, 0.07, 0.01]} />
          <meshStandardMaterial color="#000000" />
        </mesh>
      </group>
    </group>
  );
};

export default Bookshelf;