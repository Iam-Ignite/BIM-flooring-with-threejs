import React, { useMemo, useRef } from "react";
import * as THREE from "three";
const Console = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      {/* Console table */}
      <mesh position={[0, 0.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[3, 0.08, 0.8]} />
        <meshStandardMaterial color="#F5F5DC" roughness={0.3} />
      </mesh>

      {/* Legs */}
      {[
        [-1.4, 0, 0.3],
        [1.4, 0, 0.3],
        [-1.4, 0, -0.3],
        [1.4, 0, -0.3],
      ].map((pos, i) => (
        <mesh
          key={i}
          position={[pos[0], pos[1], pos[2]]}
          castShadow
          receiveShadow
        >
          <boxGeometry args={[0.08, 1, 0.08]} />
          <meshStandardMaterial color="#F5F5DC" roughness={0.3} />
        </mesh>
      ))}

      {/* Decorative items */}
      <mesh position={[-1, 0.6, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.6, 0.3, 0.3]} />
        <meshStandardMaterial color="#D3D3D3" roughness={0.5} />
      </mesh>

      <mesh position={[0, 0.7, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.15, 0.4, 16]} />
        <meshStandardMaterial color="#4682B4" roughness={0.3} />
      </mesh>

      <mesh position={[1, 0.6, 0]} castShadow receiveShadow>
        <sphereGeometry args={[0.25, 16, 16]} />
        <meshStandardMaterial color="#FFD700" roughness={0.3} metalness={0.5} />
      </mesh>
    </group>
  );
};

export default Console;
