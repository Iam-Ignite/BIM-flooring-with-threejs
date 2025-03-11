import React, { useMemo, useRef } from "react";
import * as THREE from "three";
const Television = ({ position = [-2.9, 1.2, 0] }) => {
  // TV Screen Texture with realistic content
  const tvScreenTexture = useMemo(() => {
    const size = 1024; // Higher resolution
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = (size * 9) / 16; // 16:9 aspect ratio
    const ctx = canvas.getContext("2d");

    // Black background
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Create a realistic TV show scene
    // Soft gradient background like in a reality show interview
    const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    bgGradient.addColorStop(0, "#1a2639");
    bgGradient.addColorStop(1, "#0d1321");
    ctx.fillStyle = bgGradient;
    ctx.fillRect(100, 50, canvas.width - 200, canvas.height - 100);

    // Add some glowing accent lights like in a studio
    // Left side glow
    const leftGlow = ctx.createRadialGradient(
      150,
      canvas.height / 2,
      10,
      150,
      canvas.height / 2,
      200
    );
    leftGlow.addColorStop(0, "rgba(65, 105, 225, 0.7)");
    leftGlow.addColorStop(1, "rgba(65, 105, 225, 0)");
    ctx.fillStyle = leftGlow;
    ctx.fillRect(0, 0, 300, canvas.height);

    // Right side glow
    const rightGlow = ctx.createRadialGradient(
      canvas.width - 150,
      canvas.height / 2,
      10,
      canvas.width - 150,
      canvas.height / 2,
      200
    );
    rightGlow.addColorStop(0, "rgba(220, 20, 60, 0.6)");
    rightGlow.addColorStop(1, "rgba(220, 20, 60, 0)");
    ctx.fillStyle = rightGlow;
    ctx.fillRect(canvas.width - 300, 0, 300, canvas.height);

    // Add a person silhouette
    ctx.fillStyle = "#000000";
    // Head
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2 - 70, 50, 0, Math.PI * 2);
    ctx.fill();
    // Body
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 60, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + 60, canvas.height / 2);
    ctx.lineTo(canvas.width / 2 + 80, canvas.height - 100);
    ctx.lineTo(canvas.width / 2 - 80, canvas.height - 100);
    ctx.closePath();
    ctx.fill();

    // Add TV network logo
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 30px Arial";
    ctx.fillText("LUXURY TV", canvas.width - 200, canvas.height - 50);

    // Add a lower third graphic like in TV shows
    ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
    ctx.fillRect(canvas.width / 4, canvas.height - 140, canvas.width / 2, 80);

    // Text in lower third
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 26px Arial";
    ctx.fillText(
      "Celebrity Home Tour",
      canvas.width / 4 + 20,
      canvas.height - 100
    );
    ctx.font = "20px Arial";
    ctx.fillText("Season Finale", canvas.width / 4 + 20, canvas.height - 70);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  return (
    <group position={position} rotation={[0, Math.PI / 2, 0]}>
      {/* Modern TV Console */}
      <group position={[0, -0.9, 0]}>
        {/* Main console body - matte black with wood elements */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.8, 0.4, 0.7]} />
          <meshStandardMaterial
            color="#121212"
            roughness={0.8}
            metalness={0.1}
          />
        </mesh>

        {/* Wood accent top surface */}
        <mesh position={[0, 0.21, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.8, 0.02, 0.7]} />
          <meshStandardMaterial
            color="#513B1C"
            roughness={0.6}
            metalness={0.1}
          />
        </mesh>

        {/* Drawer fronts - three drawers with minimalist design */}
        {[-0.8, 0, 0.8].map((x, i) => (
          <group key={i} position={[x, 0, 0.351]}>
            {/* Drawer face - subtle dark gray */}
            <mesh castShadow receiveShadow>
              <boxGeometry args={[0.85, 0.3, 0.02]} />
              <meshStandardMaterial
                color="#1A1A1A"
                roughness={0.7}
                metalness={0.2}
              />
            </mesh>

            {/* Subtle handle - thin horizontal line */}
            <mesh position={[0, 0.05, 0.01]} castShadow>
              <boxGeometry args={[0.4, 0.01, 0.01]} />
              <meshStandardMaterial
                color="#333333"
                metalness={0.8}
                roughness={0.2}
              />
            </mesh>
          </group>
        ))}

        {/* Glass shelf beneath for media devices */}
        <mesh position={[0, -0.15, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.6, 0.01, 0.6]} />
          <meshPhysicalMaterial
            color="#333333"
            roughness={0}
            metalness={0.2}
            transmission={0.7}
            transparent={true}
          />
        </mesh>

        {/* Modern thin legs - brushed metal */}
        {[
          [-1.35, -0.35, 0.3],
          [-1.35, -0.35, -0.3],
          [1.35, -0.35, 0.3],
          [1.35, -0.35, -0.3],
        ].map((pos, i) => (
          <mesh key={i} position={pos} castShadow>
            <boxGeometry args={[0.03, 0.3, 0.03]} />
            <meshStandardMaterial
              color="#777777"
              metalness={0.9}
              roughness={0.3}
            />
          </mesh>
        ))}

        {/* LED accent light under the console */}
        <pointLight
          position={[0, -0.25, 0.2]}
          intensity={0.15}
          distance={1.5}
          color="#FFFFFF"
        />

        {/* Media devices - soundbar */}
        <mesh position={[0, 0.23, 0.15]} castShadow receiveShadow>
          <boxGeometry args={[1.8, 0.06, 0.12]} />
          <meshStandardMaterial
            color="#0A0A0A"
            roughness={0.3}
            metalness={0.6}
          />
        </mesh>

        {/* Media device - streaming box */}
        <mesh position={[-0.6, -0.15, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.15, 0.03, 0.15]} />
          <meshStandardMaterial
            color="#0A0A0A"
            roughness={0.4}
            metalness={0.5}
          />
        </mesh>

        {/* Media device - game console */}
        <mesh position={[0.6, -0.15, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.25, 0.04, 0.18]} />
          <meshStandardMaterial
            color="#202020"
            roughness={0.5}
            metalness={0.4}
          />
        </mesh>

        {/* Hidden cable management - subtle inset */}
        <mesh position={[0, 0, -0.35]} castShadow receiveShadow>
          <boxGeometry args={[1.0, 0.1, 0.02]} />
          <meshStandardMaterial
            color="#0A0A0A"
            roughness={0.9}
            metalness={0.1}
          />
        </mesh>
      </group>

      {/* Modern Ultra-thin OLED TV */}
      <group position={[0, 0.2, 0]}>
        {" "}
        {/* Raised position for better viewing angle */}
        {/* Ultra-thin main panel */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.2, 1.2, 0.02]} /> {/* Even thinner */}
          <meshStandardMaterial
            color="#0A0A0A"
            roughness={0.3}
            metalness={0.7}
          />
        </mesh>
        {/* Nearly invisible bezels */}
        <mesh position={[0, 0, 0.015]} castShadow receiveShadow>
          <boxGeometry args={[2.18, 1.18, 0.01]} />
          <meshStandardMaterial
            color="#000000"
            roughness={0.1}
            metalness={0.8}
          />
        </mesh>
        {/* TV Screen - with realistic content */}
        <mesh position={[0, 0, 0.025]} castShadow>
          <planeGeometry args={[2.15, 1.15]} />
          <meshBasicMaterial map={tvScreenTexture} />
        </mesh>
        {/* Small LED indicator light */}
        <mesh position={[1.05, -0.59, 0.025]} castShadow>
          <sphereGeometry args={[0.005, 8, 8]} /> {/* Smaller, more subtle */}
          <meshStandardMaterial
            color="#00FF00"
            emissive="#00FF00"
            emissiveIntensity={1}
          />
        </mesh>
        {/* Subtle brand logo */}
        <mesh position={[0, -0.59, 0.025]} castShadow>
          <boxGeometry args={[0.15, 0.015, 0.005]} />
          <meshStandardMaterial
            color="#555555"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* Modern wall mount look (integrated with TV) */}
      <mesh position={[0, 0.2, -0.02]} castShadow receiveShadow>
        <boxGeometry args={[0.4, 0.2, 0.02]} />
        <meshStandardMaterial color="#1A1A1A" roughness={0.4} metalness={0.6} />
      </mesh>

      {/* Ambient light effect behind TV (for modern bias lighting) */}
      <pointLight
        position={[0, 0.2, -0.1]}
        intensity={0.25}
        distance={2.5}
        color="#80A0FF"
      />
    </group>
  );
};

export default Television;
