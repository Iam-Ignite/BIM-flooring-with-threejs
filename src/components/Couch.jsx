import React, { useMemo } from 'react';
import * as THREE from 'three';

// Couch Component with animal skin textures
const Couch = ({ position = [0, 0.4, -2.5], rotation = [0, 0, 0] }) => {
  // Create animal skin textures and materials
  const materials = useMemo(() => {
    // Create a zebra pattern
    const createZebraTexture = () => {
      const size = 512;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      
      // Base white color
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, size, size);
      
      // Draw black stripes
      ctx.fillStyle = "#000000";
      for (let i = 0; i < 15; i++) {
        const width = 5 + Math.random() * 20;
        const x = Math.random() * size;
        const spacing = 25 + Math.random() * 20;
        
        for (let j = -1; j < size/spacing + 1; j++) {
          const y = j * spacing;
          const height = spacing * 0.8;
          
          // Add waviness to the stripes
          const waveAmplitude = 10 + Math.random() * 15;
          const waveFrequency = 0.01 + Math.random() * 0.02;
          
          ctx.beginPath();
          ctx.moveTo(x - width/2, y);
          
          for (let k = 0; k < size; k += 5) {
            const waveOffset = Math.sin(k * waveFrequency) * waveAmplitude;
            ctx.lineTo(x + k, y + waveOffset);
          }
          
          ctx.lineTo(x + size, y);
          ctx.lineTo(x + size, y + height);
          
          for (let k = size; k > 0; k -= 5) {
            const waveOffset = Math.sin(k * waveFrequency) * waveAmplitude;
            ctx.lineTo(x + k, y + height + waveOffset);
          }
          
          ctx.lineTo(x - width/2, y + height);
          ctx.closePath();
          ctx.fill();
        }
      }
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(2, 2);
      return texture;
    };
    
    // Create a leopard pattern
    const createLeopardTexture = () => {
      const size = 512;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      
      // Base tan color
      ctx.fillStyle = "#D2B48C";
      ctx.fillRect(0, 0, size, size);
      
      // Draw spots
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const spotSize = 5 + Math.random() * 20;
        
        // Outer spot
        ctx.fillStyle = "#000000";
        ctx.beginPath();
        ctx.ellipse(x, y, spotSize, spotSize * (0.7 + Math.random() * 0.4), Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner spot
        ctx.fillStyle = "#A0522D";
        ctx.beginPath();
        ctx.ellipse(x, y, spotSize * 0.6, spotSize * 0.6 * (0.7 + Math.random() * 0.4), Math.random() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(2, 2);
      return texture;
    };
    
    // Create cowhide pattern
    const createCowhideTexture = () => {
      const size = 512;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      
      // Base white color
      ctx.fillStyle = "#F5F5DC";
      ctx.fillRect(0, 0, size, size);
      
      // Draw cow spots
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const spotSize = 30 + Math.random() * 70;
        
        ctx.fillStyle = "#3E2723";
        ctx.beginPath();
        
        // Create irregular shaped spots
        const points = [];
        const numPoints = 8 + Math.floor(Math.random() * 5);
        
        for (let j = 0; j < numPoints; j++) {
          const angle = (j / numPoints) * Math.PI * 2;
          const radius = spotSize * (0.7 + Math.random() * 0.6);
          const px = x + Math.cos(angle) * radius;
          const py = y + Math.sin(angle) * radius;
          points.push({x: px, y: py});
        }
        
        ctx.moveTo(points[0].x, points[0].y);
        for (let j = 1; j < points.length; j++) {
          ctx.lineTo(points[j].x, points[j].y);
        }
        ctx.closePath();
        ctx.fill();
      }
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(1, 1);
      return texture;
    };
    
    // Create materials with animal skin textures
    return {
      frame: new THREE.MeshStandardMaterial({ 
        color: "#272727",
        roughness: 0.2,
        metalness: 0.3
      }),
      legs: new THREE.MeshStandardMaterial({ 
        color: "#B7935A",
        roughness: 0.1,
        metalness: 0.6
      }),
      mainSeat: new THREE.MeshStandardMaterial({ 
        map: createCowhideTexture(),
        roughness: 0.9,
        metalness: 0.1
      }),
      backCushions: new THREE.MeshStandardMaterial({ 
        map: createZebraTexture(),
        roughness: 0.9,
        metalness: 0.1
      }),
      accentPillows: new THREE.MeshStandardMaterial({
        map: createLeopardTexture(),
        roughness: 0.8,
        metalness: 0.1
      })
    };
  }, []);

  return (
    <group position={position} rotation={rotation}>
      {/* Low-profile platform base */}
      <mesh position={[0, -0.1, 0]} castShadow receiveShadow>
        <boxGeometry args={[2.8, 0.15, 1.3]} />
        <meshStandardMaterial color="#272727" roughness={0.2} metalness={0.3} />
      </mesh>
      
      {/* Slim legs */}
      <mesh position={[1.2, -0.25, 0.5]} castShadow receiveShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.3, 8]} />
        <meshStandardMaterial color="#B7935A" roughness={0.1} metalness={0.6} />
      </mesh>
      
      <mesh position={[-1.2, -0.25, 0.5]} castShadow receiveShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.3, 8]} />
        <meshStandardMaterial color="#B7935A" roughness={0.1} metalness={0.6} />
      </mesh>
      
      <mesh position={[1.2, -0.25, -0.5]} castShadow receiveShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.3, 8]} />
        <meshStandardMaterial color="#B7935A" roughness={0.1} metalness={0.6} />
      </mesh>
      
      <mesh position={[-1.2, -0.25, -0.5]} castShadow receiveShadow>
        <cylinderGeometry args={[0.03, 0.03, 0.3, 8]} />
        <meshStandardMaterial color="#B7935A" roughness={0.1} metalness={0.6} />
      </mesh>
      
      {/* Main seat area - cowhide pattern */}
      <mesh position={[0, 0.15, 0.1]} castShadow receiveShadow material={materials.mainSeat}>
        <boxGeometry args={[2.7, 0.4, 1.1]} />
      </mesh>
      
      {/* Back cushions - zebra pattern */}
      <mesh position={[0, 0.5, -0.35]} castShadow receiveShadow material={materials.backCushions}>
        <boxGeometry args={[2.7, 0.6, 0.35]} />
      </mesh>
      
      {/* Individual back pillows */}
      <mesh position={[-0.9, 0.65, -0.2]} rotation={[0.1, 0, 0]} castShadow receiveShadow material={materials.backCushions}>
        <boxGeometry args={[0.8, 0.5, 0.25]} />
      </mesh>
      
      <mesh position={[0, 0.65, -0.2]} rotation={[0.1, 0, 0]} castShadow receiveShadow material={materials.backCushions}>
        <boxGeometry args={[0.8, 0.5, 0.25]} />
      </mesh>
      
      <mesh position={[0.9, 0.65, -0.2]} rotation={[0.1, 0, 0]} castShadow receiveShadow material={materials.backCushions}>
        <boxGeometry args={[0.8, 0.5, 0.25]} />
      </mesh>
      
      {/* Accent pillows - leopard pattern */}
      <mesh position={[-0.85, 0.4, 0.4]} rotation={[0.2, 0.3, 0.1]} castShadow material={materials.accentPillows}>
        <boxGeometry args={[0.4, 0.4, 0.1]} />
      </mesh>
      
      <mesh position={[0.85, 0.4, 0.4]} rotation={[0.2, -0.3, -0.1]} castShadow material={materials.accentPillows}>
        <boxGeometry args={[0.4, 0.4, 0.1]} />
      </mesh>
    </group>
  );
};

export default Couch;