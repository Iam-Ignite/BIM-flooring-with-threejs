import React, { useMemo, useRef } from "react";
import * as THREE from "three";

const CoffeeTable = ({ position = [0, 0.25, -0.8] }) => {
  return (
    <group position={position}>
      {/* Table top - glass */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.8, 0.05, 1]} />
        <meshPhysicalMaterial
          color="#FFFFFF"
          roughness={0.1}
          transmission={0.9}
          thickness={0.05}
        />
      </mesh>

      {/* Table legs - white */}
      <mesh position={[0.7, -0.2, 0.3]} castShadow receiveShadow>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} />
      </mesh>

      <mesh position={[-0.7, -0.2, 0.3]} castShadow receiveShadow>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} />
      </mesh>

      <mesh position={[0.7, -0.2, -0.3]} castShadow receiveShadow>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} />
      </mesh>

      <mesh position={[-0.7, -0.2, -0.3]} castShadow receiveShadow>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial color="#FFFFFF" roughness={0.2} />
      </mesh>

      {/* Decorative items on table */}
      {/* Book - bright blue */}
      <mesh position={[0.4, 0.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.3, 0.05, 0.2]} />
        <meshStandardMaterial color="#4EA8DE" roughness={0.5} />
      </mesh>

      {/* Flower vase - pink */}
      <mesh position={[-0.4, 0.2, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.05, 0.08, 0.2, 16]} />
        <meshStandardMaterial color="#FF70A6" roughness={0.3} />
      </mesh>

      {/* Flowers - bright purple */}
      <mesh position={[-0.4, 0.3, 0]} castShadow>
        <sphereGeometry args={[0.1, 16, 16]} />
        <meshStandardMaterial color="#9B5DE5" roughness={0.8} />
      </mesh>
    </group>
  );
};
export default CoffeeTable;
