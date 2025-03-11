import React, { useMemo, useRef } from "react";
import * as THREE from "three";

const PlantStand = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      {/* Stand */}
      <mesh position={[0, 0.6, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.2, 0.3, 1.2, 16]} />
        <meshStandardMaterial color="#222222" roughness={0.5} metalness={0.7} />
      </mesh>

      {/* Plant pot */}
      <mesh position={[0, 1.3, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.4, 0.3, 0.5, 16]} />
        <meshStandardMaterial color="#D3D3D3" roughness={0.7} />
      </mesh>

      {/* Plant */}
      <group position={[0, 1.7, 0]}>
        {[...Array(12)].map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const radius = 0.2 + (i % 3) * 0.1;
          return (
            <mesh
              key={i}
              position={[
                Math.cos(angle) * radius,
                0.2 + (i % 4) * 0.1,
                Math.sin(angle) * radius,
              ]}
              castShadow
            >
              <sphereGeometry args={[0.2, 8, 8]} />
              <meshStandardMaterial color="#228B22" roughness={0.8} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
};

export default PlantStand;
