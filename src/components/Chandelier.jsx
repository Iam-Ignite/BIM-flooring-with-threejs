import React, { useMemo, useRef } from "react";
import * as THREE from "three";

const Chandelier = ({ position = [0, 2.8, 0] }) => {
  return (
    <group position={position}>
      {/* Main body - chrome */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[0.2, 0.2, 0.1, 8]} />
        <meshStandardMaterial color="#E0E0E0" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Chain to ceiling */}
      <mesh position={[0, 0.15, 0]}>
        <cylinderGeometry args={[0.02, 0.02, 0.2, 8]} />
        <meshStandardMaterial color="#E0E0E0" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Light bulbs/fixtures */}
      {[0, 1, 2, 3].map((i) => {
        const angle = (i * Math.PI) / 2;
        const x = Math.cos(angle) * 0.4;
        const z = Math.sin(angle) * 0.4;
        return (
          <group key={i}>
            {/* Light arm */}
            <mesh position={[x / 2, -0.1, z / 2]} rotation={[0, -angle, 0]}>
              <boxGeometry args={[0.4, 0.03, 0.03]} />
              <meshStandardMaterial
                color="#E0E0E0"
                metalness={0.8}
                roughness={0.1}
              />
            </mesh>

            {/* Light bulb - bright white glow */}
            <mesh position={[x, -0.2, z]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial
                color="#FFFFFF"
                emissive="#FFFFFF"
                emissiveIntensity={5}
              />
            </mesh>
          </group>
        );
      })}
      <pointLight
        position={[0, -0.1, 0]}
        intensity={2}
        distance={6}
        decay={1}
        color="#FFFBEA"
        castShadow
      />
    </group>
  );
};

export default Chandelier;
