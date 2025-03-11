import React, { useMemo, useRef } from 'react';
import * as THREE from 'three';



const PictureFrame = ({ position = [0, 1.5, -3.9], rotation = [0, 0, 0], size = [1.2, 0.9, 0.05] }) => {
    // Create a vibrant painting texture
    const paintingTexture = useMemo(() => {
      const size = 512;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      
      // Draw a colorful landscape painting
      // Background sky - vibrant blue
      ctx.fillStyle = '#78C3FB';
      ctx.fillRect(0, 0, size, size);
      
      // Mountains in background - lavender
      ctx.fillStyle = '#9F91CC';
      ctx.beginPath();
      ctx.moveTo(0, size * 0.4);
      
      // Create mountain range
      for (let x = 0; x < size; x += size / 8) {
        const height = size * 0.2 + Math.random() * size * 0.1;
        ctx.lineTo(x, size * 0.4 - height);
      }
      ctx.lineTo(size, size * 0.4);
      ctx.fill();
      
      // Green fields - bright emerald
      ctx.fillStyle = '#5CDB95';
      ctx.fillRect(0, size * 0.4, size, size * 0.4);
      
      // Lake - turquoise
      ctx.fillStyle = '#57C5E8';
      ctx.beginPath();
      ctx.ellipse(size * 0.5, size * 0.6, size * 0.3, size * 0.1, 0, 0, Math.PI * 2);
      ctx.fill();
      
      // Tree trunk
      ctx.fillStyle = '#BF8969';
      ctx.fillRect(size * 0.3, size * 0.4, size * 0.05, size * 0.15);
      
      // Tree foliage - bright green
      ctx.fillStyle = '#8FE388';
      ctx.beginPath();
      ctx.arc(size * 0.325, size * 0.35, size * 0.08, 0, Math.PI * 2);
      ctx.fill();
      
      // Add bright sun
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(size * 0.75, size * 0.2, size * 0.07, 0, Math.PI * 2);
      ctx.fill();
      
      // Add some colorful flowers
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * size * 0.8 + size * 0.1;
        const y = size * 0.75 + Math.random() * size * 0.1;
        const radius = 5 + Math.random() * 4;
        
        // Random bright flower colors
        const colors = ['#FF6B6B', '#FF9A76', '#FFEB99', '#C3F0CA', '#A5DEF9'];
        ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    }, []);
  
    return (
      <group position={position} rotation={rotation}>
        {/* Frame - light gold color */}
        <mesh castShadow receiveShadow>
          <boxGeometry args={size} />
          <meshStandardMaterial color="#E6C67D" roughness={0.5} metalness={0.2} />
        </mesh>
        
        {/* Picture/Canvas */}
        <mesh position={[0, 0, size[2] / 2 + 0.001]}>
          <planeGeometry args={[size[0] - 0.1, size[1] - 0.1]} />
          <meshBasicMaterial map={paintingTexture} />
        </mesh>
      </group>
    );
  };
export default PictureFrame;