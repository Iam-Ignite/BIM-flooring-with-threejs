import React, { useMemo } from "react";
import * as THREE from "three";

const Rug = ({ position = [0, 0.01, -1.2] }) => {
  // Create a tiger skin rug texture
  const rugTexture = useMemo(() => {
    const size = 1024;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    // Base color - orange tiger color
    ctx.fillStyle = "#D68C45";
    ctx.fillRect(0, 0, size, size);

    // Create tiger stripes
    const createTigerStripes = () => {
      ctx.fillStyle = "#000000";
      
      // Create irregular shaped tiger stripes
      const stripeCount = 20;
      const stripeWidth = size / (stripeCount * 1.5);
      
      for (let i = 0; i < stripeCount; i++) {
        // Main vertical stripe position
        const x = (i * 1.5 + 0.5) * stripeWidth + (Math.random() - 0.5) * stripeWidth;
        
        // Create the stripe path
        ctx.beginPath();
        
        // Start at the top
        ctx.moveTo(x - stripeWidth / 2, 0);
        
        // Create a wavy stripe down the canvas
        const segments = 20;
        const segmentHeight = size / segments;
        
        for (let j = 1; j <= segments; j++) {
          const y = j * segmentHeight;
          // Add randomness to the x position as we move down
          const waviness = stripeWidth * 2;
          const newX = x + (Math.random() - 0.5) * waviness;
          
          // Vary the width of the stripe
          const widthVariation = Math.random() * 0.5 + 0.75;
          const currentWidth = stripeWidth * widthVariation;
          
          // Draw the segment
          ctx.lineTo(newX, y);
          
          // Occasionally split the stripe or add a small separate stripe
          if (Math.random() < 0.3) {
            const splitX = newX + (Math.random() * 2 - 1) * stripeWidth * 2;
            const splitLength = Math.random() * segmentHeight * 3;
            const splitStartY = y - splitLength / 2;
            const splitEndY = y + splitLength / 2;
            
            ctx.moveTo(splitX - currentWidth / 4, splitStartY);
            ctx.lineTo(splitX + currentWidth / 4, splitStartY);
            ctx.lineTo(splitX + currentWidth / 4, splitEndY);
            ctx.lineTo(splitX - currentWidth / 4, splitEndY);
            ctx.closePath();
            ctx.fill();
            
            ctx.beginPath();
            ctx.moveTo(newX, y);
          }
        }
        
        // Complete the stripe shape
        ctx.lineTo(x - stripeWidth / 2, size);
        ctx.closePath();
        ctx.fill();
      }
    };
    
    // Create bear fur texture - add texture and shading
    const createFurTexture = () => {
      // Add texture to mimic fur direction and variation
      for (let i = 0; i < 5000; i++) {
        const x = Math.random() * size;
        const y = Math.random() * size;
        const length = 2 + Math.random() * 8;
        const angle = Math.random() * Math.PI;
        
        // Random darkness variation for the fur strands
        const brightness = Math.random() * 40;
        ctx.strokeStyle = `rgba(0, 0, 0, ${0.1 + Math.random() * 0.2})`;
        ctx.lineWidth = 1 + Math.random();
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(
          x + Math.cos(angle) * length,
          y + Math.sin(angle) * length
        );
        ctx.stroke();
      }
    };
    
    // Create the head and limbs of the animal skin rug
    const createAnimalShape = () => {
      // Draw the head (circle + 2 smaller circles for ears)
      ctx.fillStyle = "#D68C45";
      
      // Head
      const headX = size / 2;
      const headY = size * 0.2;
      const headRadius = size * 0.15;
      
      ctx.beginPath();
      ctx.arc(headX, headY, headRadius, 0, Math.PI * 2);
      ctx.fill();
      
      // Left ear
      ctx.beginPath();
      ctx.arc(headX - headRadius * 0.8, headY - headRadius * 0.8, headRadius * 0.5, 0, Math.PI * 2);
      ctx.fill();
      
      // Right ear
      ctx.beginPath();
      ctx.arc(headX + headRadius * 0.8, headY - headRadius * 0.8, headRadius * 0.5, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw limbs
      const limbWidth = size * 0.1;
      const limbLength = size * 0.25;
      
      // Upper left limb
      ctx.fillRect(size * 0.15, size * 0.3, limbWidth, limbLength);
      
      // Upper right limb
      ctx.fillRect(size * 0.85 - limbWidth, size * 0.3, limbWidth, limbLength);
      
      // Lower left limb
      ctx.fillRect(size * 0.2, size * 0.7, limbWidth, limbLength);
      
      // Lower right limb
      ctx.fillRect(size * 0.8 - limbWidth, size * 0.7, limbWidth, limbLength);
      
      // Draw eyes with tiger pattern around them
      ctx.fillStyle = "#000000";
      
      // Left eye
      ctx.beginPath();
      ctx.arc(headX - headRadius * 0.4, headY, headRadius * 0.1, 0, Math.PI * 2);
      ctx.fill();
      
      // Right eye
      ctx.beginPath();
      ctx.arc(headX + headRadius * 0.4, headY, headRadius * 0.1, 0, Math.PI * 2);
      ctx.fill();
      
      // Nose
      ctx.beginPath();
      ctx.arc(headX, headY + headRadius * 0.3, headRadius * 0.15, 0, Math.PI * 2);
      ctx.fill();
    };
    
    // Execute the drawing steps
    createTigerStripes();
    createFurTexture();
    createAnimalShape();
    
    // Create darker edges to give 3D feel
    const createEdgeShadow = () => {
      const gradient = ctx.createRadialGradient(
        size / 2, size / 2, size * 0.2,
        size / 2, size / 2, size * 0.7
      );
      gradient.addColorStop(0, "rgba(0, 0, 0, 0)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.4)");
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, size, size);
    };
    
    createEdgeShadow();
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  // Create a more realistic shape for the rug (with irregular edges)
  const rugGeometry = useMemo(() => {
    const width = 4;
    const height = 3;
    const geometry = new THREE.PlaneGeometry(width, height, 32, 24);
    
    // Distort the edges to make it look more like an animal skin
    const vertices = geometry.attributes.position.array;
    
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const y = vertices[i + 1];
      
      // Calculate distance from center
      const distanceFromCenter = Math.sqrt(x * x + y * y);
      const maxDistance = Math.sqrt((width/2) * (width/2) + (height/2) * (height/2));
      
      // Add more distortion at the edges
      if (distanceFromCenter > maxDistance * 0.7) {
        const distortionAmount = 0.1 * (distanceFromCenter / maxDistance);
        vertices[i] += (Math.random() - 0.5) * distortionAmount;
        vertices[i + 1] += (Math.random() - 0.5) * distortionAmount;
      }
    }
    
    geometry.attributes.position.needsUpdate = true;
    return geometry;
  }, []);

  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} receiveShadow geometry={rugGeometry}>
      <meshStandardMaterial 
        map={rugTexture} 
        roughness={0.9} 
        metalness={0.1} 
        side={THREE.DoubleSide}
        bumpScale={0.05}
      />
    </mesh>
  );
};

export default Rug;