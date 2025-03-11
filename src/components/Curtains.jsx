import React, { useMemo, useRef } from "react";
import * as THREE from "three";

const Curtains = ({ position = [0, 1.5, -3.95], width = 2.5 }) => {
  return (
    <group position={position}>
      {/* Curtain rod - chrome */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <cylinderGeometry
          args={[0.03, 0.03, width, 8]}
          rotation={[0, 0, Math.PI / 2]}
        />
        <meshStandardMaterial color="#E0E0E0" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Curtain ends */}
      <mesh position={[width / 2, 0.5, 0]} castShadow>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#E0E0E0" metalness={0.8} roughness={0.2} />
      </mesh>

      <mesh position={[-width / 2, 0.5, 0]} castShadow>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#E0E0E0" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Left curtain - bright pink */}
      <mesh position={[-width / 4, 0, 0]} castShadow>
        <boxGeometry args={[width / 2 - 0.1, 2, 0.05]} />
        <meshStandardMaterial color="#FF70A6" roughness={0.7} />
      </mesh>

      {/* Right curtain */}
      <mesh position={[width / 4, 0, 0]} castShadow>
        <boxGeometry args={[width / 2 - 0.1, 2, 0.05]} />
        <meshStandardMaterial color="#FF70A6" roughness={0.7} />
      </mesh>
    </group>
  );
};

export default Curtains;
