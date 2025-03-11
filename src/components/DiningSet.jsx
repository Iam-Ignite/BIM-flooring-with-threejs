import React from "react";

const FineDiningSet = ({ position = [2.5, 0.5, 2.5] }) => {
  // Luxury color palette
  const tableColor = "#1A1110"; // Rich dark wood
  const tableLegColor = "#8B7D3A"; // Antique brass
  const accentColor = "#800020"; // Burgundy
  const chairColors = ["#1A1110"]; // Matching dark wood for all chairs
  const linensColor = "#FFFAF0"; // Cream white linens
  const silverwaveColor = "#D4D0C8"; // Silver for utensils
  const crystalColor = "#F5F5F5"; // Crystal glass color

  return (
    <group position={position}>
      {/* Table - elegant dark wood with larger surface */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.2, 0.08, 1.4]} />
        <meshStandardMaterial
          color={tableColor}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>
      
      {/* Table edge detail */}
      <mesh position={[0, -0.02, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.3, 0.04, 1.5]} />
        <meshStandardMaterial
          color={tableColor}
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* Luxury tablecloth - slightly smaller than table surface */}
      <mesh position={[0, 0.045, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.0, 0.01, 1.2]} />
        <meshStandardMaterial
          color={linensColor}
          roughness={0.6}
          metalness={0}
        />
      </mesh>

      {/* Ornate table legs */}
      {[
        [-1.5, -0.5, 0.6],  // Front right
        [1.5, -0.5, 0.6],   // Front left
        [-1.5, -0.5, -0.6], // Back right
        [1.5, -0.5, -0.6],  // Back left
      ].map((legPos, i) => (
        <group key={i} position={legPos}>
          {/* Ornate upper leg portion */}
          <mesh position={[0, 0.25, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.08, 0.12, 0.2, 8]} />
            <meshStandardMaterial
              color={tableLegColor}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
          
          {/* Main leg */}
          <mesh position={[0, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.06, 0.06, 0.8, 8]} />
            <meshStandardMaterial
              color={tableColor}
              roughness={0.3}
              metalness={0.2}
            />
          </mesh>
          
          {/* Ornate foot */}
          <mesh position={[0, -0.45, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.12, 0.05, 0.15, 8]} />
            <meshStandardMaterial
              color={tableLegColor}
              roughness={0.3}
              metalness={0.7}
            />
          </mesh>
        </group>
      ))}

      {/* Luxury chairs - 8 chairs positioned around the table */}
      {[
        [-1.2, 0, 0.8, Math.PI/2],    // North side 1
        [-0.4, 0, 0.8, Math.PI/2],    // North side 2
        [0.4, 0, 0.8, Math.PI/2],     // North side 3
        [1.2, 0, 0.8, Math.PI/2],     // North side 4
        [-1.2, 0, -0.8, -Math.PI/2],  // South side 1
        [-0.4, 0, -0.8, -Math.PI/2],  // South side 2
        [0.4, 0, -0.8, -Math.PI/2],   // South side 3
        [1.2, 0, -0.8, -Math.PI/2],   // South side 4
      ].map((chairPos, i) => (
        <group
          key={i}
          position={[chairPos[0], chairPos[1], chairPos[2]]}
          rotation={[0, chairPos[3], 0]}
        >
          {/* Chair seat - elegant curved design */}
          <mesh position={[0, -0.25, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.5, 0.06, 0.5]} />
            <meshStandardMaterial color={chairColors[0]} roughness={0.3} />
          </mesh>

          {/* Chair cushion - luxury upholstery */}
          <mesh position={[0, -0.2, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.45, 0.05, 0.45]} />
            <meshStandardMaterial color={accentColor} roughness={0.7} />
          </mesh>

          {/* Chair backrest - tall, ornate design */}
          <mesh
            position={[0, 0.3, -0.22]}
            rotation={[0.1, 0, 0]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[0.45, 0.8, 0.05]} />
            <meshStandardMaterial color={chairColors[0]} roughness={0.3} />
          </mesh>

          {/* Chair backrest pattern */}
          <mesh
            position={[0, 0.3, -0.25]}
            rotation={[0.1, 0, 0]}
            castShadow
            receiveShadow
          >
            <boxGeometry args={[0.35, 0.7, 0.02]} />
            <meshStandardMaterial color={accentColor} roughness={0.5} />
          </mesh>

          {/* Chair legs - ornate carved wood */}
          {[
            [0.2, -0.5, 0.2],
            [-0.2, -0.5, 0.2],
            [-0.2, -0.5, -0.2],
            [0.2, -0.5, -0.2],
          ].map((legPos, j) => (
            <mesh key={j} position={legPos} castShadow receiveShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.5, 8]} />
              <meshStandardMaterial
                color={chairColors[0]}
                metalness={0.2}
                roughness={0.4}
              />
            </mesh>
          ))}
          
          {/* Chair leg ornate feet */}
          {[
            [0.2, -0.73, 0.2],
            [-0.2, -0.73, 0.2],
            [-0.2, -0.73, -0.2],
            [0.2, -0.73, -0.2],
          ].map((legPos, j) => (
            <mesh key={j} position={legPos} castShadow receiveShadow>
              <sphereGeometry args={[0.04, 8, 8]} />
              <meshStandardMaterial
                color={tableLegColor}
                metalness={0.7}
                roughness={0.2}
              />
            </mesh>
          ))}
        </group>
      ))}

      {/* Fine dining table settings - 8 place settings */}
      {[
        [-1.2, 0.06, 0.3], // North side 1
        [-0.4, 0.06, 0.3], // North side 2
        [0.4, 0.06, 0.3],  // North side 3
        [1.2, 0.06, 0.3],  // North side 4
        [-1.2, 0.06, -0.3], // South side 1
        [-0.4, 0.06, -0.3], // South side 2
        [0.4, 0.06, -0.3],  // South side 3
        [1.2, 0.06, -0.3],  // South side 4
      ].map((platePos, i) => (
        <group key={i} position={platePos}>
          {/* Fine china dinner plate */}
          <mesh position={[0, 0, 0]} castShadow receiveShadow>
            <cylinderGeometry args={[0.2, 0.2, 0.02, 32]} />
            <meshStandardMaterial color="#FFFFFF" roughness={0.1} />
          </mesh>

          {/* Gold rim on plate */}
          <mesh position={[0, 0.015, 0]} castShadow receiveShadow>
            <torusGeometry args={[0.18, 0.01, 16, 32]} />
            <meshStandardMaterial color="#D4AF37" roughness={0.1} metalness={0.8} />
          </mesh>
          
          {/* Wine glass */}
          <group position={[0.25, 0, 0]}>
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.06, 0.03, 0.15, 16]} />
              <meshPhysicalMaterial
                color={crystalColor}
                roughness={0}
                metalness={0.1}
                transmission={0.9}
                transparent={true}
              />
            </mesh>
            <mesh position={[0, 0.15, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[0.008, 0.008, 0.15, 8]} />
              <meshStandardMaterial color={crystalColor} roughness={0} metalness={0.1} transparent={true} opacity={0.9} />
            </mesh>
          </group>
          
          {/* Silverware */}
          <mesh position={[0.22, 0, -0.12]} rotation={[0, Math.PI/4, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.03, 0.01, 0.2]} /> {/* Fork */}
            <meshStandardMaterial color={silverwaveColor} roughness={0.1} metalness={0.9} />
          </mesh>
          <mesh position={[-0.22, 0, -0.12]} rotation={[0, -Math.PI/4, 0]} castShadow receiveShadow>
            <boxGeometry args={[0.03, 0.01, 0.2]} /> {/* Knife */}
            <meshStandardMaterial color={silverwaveColor} roughness={0.1} metalness={0.9} />
          </mesh>
        </group>
      ))}

      {/* Center decorative pieces */}
      <group position={[0, 0.1, 0]}>
        {/* Luxury candelabra */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[0.15, 0.2, 0.05, 16]} />
          <meshStandardMaterial
            color={tableLegColor}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        
        {/* Candelabra arms */}
        {[0, Math.PI/2, Math.PI, Math.PI*1.5].map((angle, i) => (
          <group key={i} rotation={[0, angle, 0]}>
            <mesh position={[0.15, 0.2, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[0.02, 0.02, 0.4, 8]} />
              <meshStandardMaterial color={tableLegColor} roughness={0.2} metalness={0.8} />
            </mesh>
            
            {/* Candle holders */}
            <mesh position={[0.15, 0.3, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[0.05, 0.05, 0.05, 16]} />
              <meshStandardMaterial color={tableLegColor} roughness={0.2} metalness={0.8} />
            </mesh>
            
            {/* Candles */}
            <mesh position={[0.15, 0.4, 0]} castShadow receiveShadow>
              <cylinderGeometry args={[0.03, 0.03, 0.15, 16]} />
              <meshStandardMaterial color="#FFF8E7" roughness={0.8} metalness={0} />
            </mesh>
          </group>
        ))}
        
        {/* Flower arrangements around the candelabra */}
        {[0, Math.PI/3, 2*Math.PI/3, Math.PI, 4*Math.PI/3, 5*Math.PI/3].map((angle, i) => (
          <group key={i} rotation={[0, angle, 0]} position={[0.3, 0, 0]}>
            {/* Small vase */}
            <mesh castShadow receiveShadow>
              <cylinderGeometry args={[0.05, 0.04, 0.1, 16]} />
              <meshStandardMaterial color="#D4AF37" roughness={0.2} metalness={0.8} />
            </mesh>
            
            {/* Luxury flowers */}
            {[0, 0.4, 0.8, 1.2, 1.6].map((fAngle, j) => (
              <group key={j} rotation={[0.3, fAngle, 0]} position={[0, 0.1, 0]}>
                <mesh castShadow receiveShadow>
                  <cylinderGeometry args={[0.005, 0.005, 0.2, 8]} />
                  <meshStandardMaterial color="#006400" roughness={0.8} />
                </mesh>
                <mesh position={[0, 0.12, 0]}>
                  <sphereGeometry args={[0.04, 8, 8]} />
                  <meshStandardMaterial
                    color={j % 2 === 0 ? "#800020" : "#800080"}
                    roughness={0.8}
                  />
                </mesh>
              </group>
            ))}
          </group>
        ))}
      </group>
    </group>
  );
};

export default FineDiningSet;