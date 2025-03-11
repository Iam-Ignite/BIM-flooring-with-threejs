import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';



const Armchair = ({ position = [2, 0.35, -1.5], rotation = [0, -Math.PI / 4, 0] }) => {
    return (
      <group position={position} rotation={rotation}>
        {/* Simple base */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.2, 0.4, 1]} />
          <meshStandardMaterial color="#F5F5F5" roughness={0.7} />
        </mesh>
        
        {/* Clean wooden legs */}
        <mesh position={[0.5, -0.3, 0.4]} castShadow receiveShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.6, 8]} />
          <meshStandardMaterial color="#A67D5D" roughness={0.5} />
        </mesh>
        
        <mesh position={[-0.5, -0.3, 0.4]} castShadow receiveShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.6, 8]} />
          <meshStandardMaterial color="#A67D5D" roughness={0.5} />
        </mesh>
        
        <mesh position={[0.5, -0.3, -0.4]} castShadow receiveShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.6, 8]} />
          <meshStandardMaterial color="#A67D5D" roughness={0.5} />
        </mesh>
        
        <mesh position={[-0.5, -0.3, -0.4]} castShadow receiveShadow>
          <cylinderGeometry args={[0.03, 0.03, 0.6, 8]} />
          <meshStandardMaterial color="#A67D5D" roughness={0.5} />
        </mesh>
        
        {/* Simple backrest */}
        <mesh position={[0, 0.5, -0.4]} castShadow receiveShadow>
          <boxGeometry args={[1.2, 0.6, 0.15]} />
          <meshStandardMaterial color="#F5F5F5" roughness={0.7} />
        </mesh>
        
        {/* Minimal armrests */}
        <mesh position={[0.55, 0.25, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.1, 0.25, 0.8]} />
          <meshStandardMaterial color="#F5F5F5" roughness={0.7} />
        </mesh>
        
        <mesh position={[-0.55, 0.25, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.1, 0.25, 0.8]} />
          <meshStandardMaterial color="#F5F5F5" roughness={0.7} />
        </mesh>
        
        {/* Simple seat cushion */}
        <mesh position={[0, 0.25, 0.1]} castShadow receiveShadow>
          <boxGeometry args={[1, 0.1, 0.8]} />
          <meshStandardMaterial color="#4A6C82" roughness={0.9} />
        </mesh>
      </group>
    );
  };
  
export default Armchair;