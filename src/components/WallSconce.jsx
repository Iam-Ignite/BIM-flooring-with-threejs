import React, { useMemo, useRef } from "react";
import * as THREE from "three";

const WallSconce = ({ position = [0, 0, 0], rotation = [0, 0, 0] }) => {
  return (
    <group position={position} rotation={rotation}>
      {/* Wall Backing Plate - Polished Silver */}
      <mesh position={[0, 0, 0.02]} castShadow receiveShadow>
        <boxGeometry args={[0.25, 0.4, 0.03]} />
        <meshStandardMaterial 
          color="#E0E0E0" 
          metalness={0.9} 
          roughness={0.3}
        />
      </mesh>

      {/* Decorative Accent Line - Bright Gold */}
      <mesh position={[0, 0, 0.04]} castShadow receiveShadow>
        <boxGeometry args={[0.05, 0.35, 0.01]} />
        <meshStandardMaterial
          color="#FFD700"
          metalness={0.9}
          roughness={0.2}
          emissive="#FFD700"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Main Light Housing - Translucent Bright White */}
      <mesh position={[0, 0, 0.1]} castShadow receiveShadow>
        <boxGeometry args={[0.2, 0.3, 0.08]} />
        <meshPhysicalMaterial 
          color="#FFFFFF" 
          transmission={0.7}
          roughness={0.1}
          thickness={0.05}
          transparent={true}
          opacity={0.9}
        />
      </mesh>

      {/* Bright LED Strip Effects */}
      {['top', 'bottom', 'left', 'right'].map((side, index) => {
        const positionMap = {
          top: [0, 0.16, 0.14],
          bottom: [0, -0.16, 0.14],
          left: [-0.1, 0, 0.14],
          right: [0.1, 0, 0.14]
        };

        const sizeMap = {
          top: [0.18, 0.02, 0.02],
          bottom: [0.18, 0.02, 0.02],
          left: [0.02, 0.3, 0.02],
          right: [0.02, 0.3, 0.02]
        };

        return (
          <React.Fragment key={side}>
            <mesh 
              position={positionMap[side]} 
              castShadow 
              receiveShadow
            >
              <boxGeometry args={sizeMap[side]} />
              <meshStandardMaterial
                color="#FFFFFF"
                emissive="#FFFFFF"
                emissiveIntensity={3}
              />
            </mesh>
          </React.Fragment>
        );
      })}

      {/* Primary Light Source - Intense Bright Illumination */}
      <pointLight
        position={[0, 0, 0.2]}
        intensity={2.5}
        distance={10}
        decay={1}
        color="#FFFFFF"
      />

      {/* Secondary Bright Wall Washing Effect */}
      <spotLight
        position={[0, 0, 0.2]}
        intensity={2}
        angle={Math.PI / 2.5}
        penumbra={0.2}
        distance={8}
        decay={1}
        color="#F0F0F0"
      />
    </group>
  );
};

export default WallSconce;