import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import PictureFrame from "./PictureFrame";
import PlantStand from "./PlantStand";
import Curtains from "./Curtains";
import Console from "./Console";
import Bookshelf from "./Bookshelf";
import WallSconce from "./WallSconce";
import Television from "./Television";
import Chandelier from "./Chandelier";
import DiningSet from "./DiningSet";
import CoffeeTable from "./CoffeeTable";
import Armchair from "./Armchair";
import Couch from "./Couch";
import Rug from "./Rug";
import Floor from "./Floor";
import { floorOptionsData } from "./floorOptionsData";
import FloorOptions from "./FloorOptions";
import FloorDetails from "./FloorDetails";
import AIRecommendations from "./AIRecommendations";
import ComparisonFloor from "./ComparisonFloor";
import AiFloorSelector from "./AiFloorSelector";

// Set up the scene
const Scene = ({ userTexture, wallColor }) => {
  // Much larger room size - expanded in all dimensions
  const roomSize = [14, 4.5, 12];

  return (
    <>
      {/* Enhanced lighting setup for the larger space */}
      <ambientLight intensity={0.5} />

      {/* Central ceiling light */}
      <pointLight
        position={[0, 4.2, 0]}
        intensity={0.8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      />

      {/* Strategic accent lighting */}
      <spotLight
        position={[-5, 3.8, 0]}
        intensity={0.6}
        angle={Math.PI / 5}
        penumbra={0.3}
        castShadow
        target-position={[-3, 0, 0]}
      />
      <spotLight
        position={[5, 3.8, 0]}
        intensity={0.6}
        angle={Math.PI / 5}
        penumbra={0.3}
        castShadow
        target-position={[3, 0, 0]}
      />
      <spotLight
        position={[0, 3.8, 5]}
        intensity={0.6}
        angle={Math.PI / 5}
        penumbra={0.3}
        castShadow
        target-position={[0, 0, 3]}
      />
      <spotLight
        position={[0, 3.8, -5]}
        intensity={0.6}
        angle={Math.PI / 5}
        penumbra={0.3}
        castShadow
        target-position={[0, 0, -3]}
      />

      {/* Room Walls - now using customizable wall color */}
      <mesh position={[0, 2.2, 0]}>
        <boxGeometry args={roomSize} />
        <meshStandardMaterial color={wallColor} side={THREE.BackSide} />
      </mesh>

      {/* Large Floor */}
      <Floor size={[14, 12]} userTexture={userTexture} />

      {/* Oversized Area Rug */}
      <Rug position={[-2, 0.01, 0]} size={[7, 0.05, 5]} />

      {/* Living Area Furniture Group - positioned in the main area */}
      <group position={[-2, 0, 0]}>
        <Couch position={[0, 0, -2]} />
        <Armchair position={[2.5, 0, -0.5]} rotation={[0, -Math.PI / 4, 0]} />
        <Armchair position={[-2.5, 0, -0.5]} rotation={[0, Math.PI / 4, 0]} />
        <CoffeeTable position={[0, 0, 0]} />
      </group>

      {/* Entertainment Wall */}
      <Television position={[-6.9, 1.2, 0]} />

      {/* Fancy Wall Sconces */}
      <WallSconce position={[-6.9, 2.4, -4]} rotation={[0, Math.PI / 2, 0]} />
      <WallSconce position={[-6.9, 2.4, 4]} rotation={[0, Math.PI / 2, 0]} />
      <WallSconce position={[6.9, 2.4, -4]} rotation={[0, -Math.PI / 2, 0]} />
      <WallSconce position={[6.9, 2.4, 4]} rotation={[0, -Math.PI / 2, 0]} />
      <WallSconce position={[-4, 2.4, -5.9]} rotation={[0, 0, 0]} />
      <WallSconce position={[4, 2.4, -5.9]} rotation={[0, 0, 0]} />
      <WallSconce position={[-4, 2.4, 5.9]} rotation={[0, Math.PI, 0]} />
      <WallSconce position={[4, 2.4, 5.9]} rotation={[0, Math.PI, 0]} />

      {/* Grand Chandelier - centered in the expanded room */}
      <Chandelier position={[0, 4.2, 0]} scale={1.5} />

      {/* Multiple window treatments for the larger space */}
      <Curtains
        position={[-6.95, 2, -3]}
        rotation={[0, Math.PI / 2, 0]}
        size={[3, 3.5, 0.1]}
      />
      <Curtains
        position={[-6.95, 2, 3]}
        rotation={[0, Math.PI / 2, 0]}
        size={[3, 3.5, 0.1]}
      />
      <Curtains position={[0, 2, -5.95]} size={[4, 3.5, 0.1]} />

      {/* Multiple Picture Frames */}
      <PictureFrame
        position={[6.95, 2.2, -2]}
        rotation={[0, -Math.PI / 2, 0]}
        size={[1.8, 1.2, 0.05]}
      />
      <PictureFrame
        position={[6.95, 2.2, 2]}
        rotation={[0, -Math.PI / 2, 0]}
        size={[1.8, 1.2, 0.05]}
      />
      <PictureFrame
        position={[0, 2.8, -5.9]}
        rotation={[0, 0, 0]}
        size={[2.2, 1.5, 0.05]}
      />
      <PictureFrame
        position={[-4, 2.2, -5.9]}
        rotation={[0, 0, 0]}
        size={[1.5, 1.0, 0.05]}
      />
      <PictureFrame
        position={[4, 2.2, -5.9]}
        rotation={[0, 0, 0]}
        size={[1.5, 1.0, 0.05]}
      />

      {/* Additional Decor Elements */}
      <Bookshelf position={[6.9, 0, -4]} rotation={[0, -Math.PI / 2, 0]} />
      <PlantStand position={[-6, 0, -4]} />
      <Console position={[0, 0, -5.7]} />

      {/* Camera Controls - adjusted for the larger room */}
      <OrbitControls
        enableDamping={true}
        dampingFactor={0.05}
        minDistance={2}
        maxDistance={18} // Increased max distance
        target={[0, 1.5, 0]}
      />
    </>
  );
};

// AI Recommendation functions
const getRecommendations = (preferences) => {
  const { budget, durability, sustainability, maintenance, moisture, room } =
    preferences;

  // Convert preferences to numerical weights
  const budgetWeight = budget === "high" ? 3 : budget === "medium" ? 2 : 1;
  const durabilityWeight =
    durability === "high" ? 3 : durability === "medium" ? 2 : 1;
  const sustainabilityWeight =
    sustainability === "high" ? 3 : sustainability === "medium" ? 2 : 1;
  const maintenanceWeight =
    maintenance === "high" ? 1 : maintenance === "medium" ? 2 : 3; // Inverse (low maintenance is preferred)
  const moistureWeight =
    moisture === "high" ? 3 : moisture === "medium" ? 2 : 1;

  // Calculate scores for each flooring option
  const scoredOptions = floorOptionsData.map((floor) => {
    // Score factors
    let budgetScore = 10 - Math.min(floor.price / 15, 10); // Lower price = higher score
    let durabilityScore = floor.durability;
    let sustainabilityScore = floor.sustainabilityScore;
    let maintenanceScore = floor.maintenance.includes("Low")
      ? 9
      : floor.maintenance.includes("Moderate")
      ? 6
      : 3;
    let moistureScore = floor.moistureResistance.includes("High")
      ? 9
      : floor.moistureResistance.includes("Moderate")
      ? 6
      : 3;

    // Room suitability bonus
    let roomSuitabilityBonus = floor.roomSuitability.includes(room) ? 2 : 0;

    // Weighted total score
    let totalScore =
      (budgetScore * budgetWeight +
        durabilityScore * durabilityWeight +
        sustainabilityScore * sustainabilityWeight +
        maintenanceScore * maintenanceWeight +
        moistureScore * moistureWeight +
        roomSuitabilityBonus) /
      (budgetWeight +
        durabilityWeight +
        sustainabilityWeight +
        maintenanceWeight +
        moistureWeight +
        1);

    return {
      ...floor,
      score: totalScore.toFixed(1),
      matchPercentage: Math.min(Math.round((totalScore / 10) * 100), 98), // Cap at 98% for realism
    };
  });

  // Sort by score (highest first)
  return scoredOptions.sort((a, b) => b.score - a.score);
};

// Mock predictive analytics function
const getPredictiveInsights = (selectedFloor) => {
  if (!selectedFloor) return null;

  return {
    predictedLifespan: Math.round(selectedFloor.durability * 3.5), // Estimated years
    maintenanceCosts: Math.round(selectedFloor.price * 0.5), // Lifetime maintenance cost per m²
    resaleImpact:
      selectedFloor.durability > 8.5
        ? "High Positive"
        : selectedFloor.durability > 7
        ? "Moderate Positive"
        : "Neutral",
    trendForecast:
      selectedFloor.sustainabilityScore > 7
        ? "Increasing in popularity"
        : "Stable market demand",
    installationTimeEstimate: selectedFloor.installationComplexity.includes(
      "High"
    )
      ? "3-5 days"
      : selectedFloor.installationComplexity.includes("Moderate")
      ? "2-3 days"
      : "1-2 days",
  };
};

const Room = ({ home }) => {
  const [userTexture, setUserTexture] = useState("/wood-parquet.jpeg");
  const [wallColor, setWallColor] = useState("#EAE7DC"); // Default wall color
  const [showFloorOptions, setShowFloorOptions] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [roomType, setRoomType] = useState("Living Room");
  const [userPreferences, setUserPreferences] = useState({
    budget: "medium",
    durability: "high",
    sustainability: "medium",
    maintenance: "low",
    moisture: "medium",
    room: "Living Room",
  });
  const [showAIRecommendations, setShowAIRecommendations] = useState(false);
  const [recommendedFloors, setRecommendedFloors] = useState([]);
  const [showSelectedFloorDetails, setShowSelectedFloorDetails] =
    useState(false);
  const [predictiveInsights, setPredictiveInsights] = useState(null);
  const [floorArea, setFloorArea] = useState(25); // Default floor area in m²
  const [showSideBySide, setShowSideBySide] = useState(false);
  const [comparisonFloor, setComparisonFloor] = useState(null);

  // Handle texture upload
  const handleTextureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUserTexture(url);
    }
  };

  // Handle wall color change
  const handleWallColorChange = (event) => {
    setWallColor(event.target.value);
  };

  // Handle selecting a floor option
  const selectFloor = (floor) => {
    if (typeof floor === "string") {
      // Handle legacy case where only texture string is passed
      setUserTexture(floor);
    } else {
      // New case handling full floor object
      setUserTexture(floor.texture);
      setSelectedFloor(floor);
      setShowSelectedFloorDetails(true);
      setPredictiveInsights(getPredictiveInsights(floor));
    }
    setShowFloorOptions(false);
  };

  // Generate AI recommendations based on user preferences
  const generateRecommendations = () => {
    const recommendations = getRecommendations(userPreferences);
    setRecommendedFloors(recommendations);
    setShowAIRecommendations(true);
    setShowFloorOptions(false);
  };

  // Handle user preference changes
  const handlePreferenceChange = (preference, value) => {
    setUserPreferences((prev) => ({
      ...prev,
      [preference]: value,
    }));
  };

  // Handle room type change
  const handleRoomTypeChange = (event) => {
    const newRoomType = event.target.value;
    setRoomType(newRoomType);
    setUserPreferences((prev) => ({
      ...prev,
      room: newRoomType,
    }));
  };

  // Handle floor area change
  const handleFloorAreaChange = (event) => {
    setFloorArea(Number(event.target.value));
  };

  // Toggle floor options panel
  const toggleFloorOptions = () => {
    setShowFloorOptions(!showFloorOptions);
    setShowAIRecommendations(false);
    setShowSelectedFloorDetails(false);
  };

  // Toggle AI recommendations panel
  const toggleAIRecommendations = () => {
    setShowAIRecommendations(!showAIRecommendations);
    setShowFloorOptions(false);
    setShowSelectedFloorDetails(false);
  };

  // Set up comparison view
  const setupComparison = (floor) => {
    setComparisonFloor(floor);
    setShowSideBySide(true);
  };

  // Calculate total cost estimates
  const calculateTotalCost = (floor) => {
    if (!floor) return { materials: 0, installation: 0, total: 0 };

    const materialsCost = floor.price * floorArea;
    const installationCost = floor.installationCost * floorArea;
    const totalCost = materialsCost + installationCost;

    return {
      materials: materialsCost.toFixed(2),
      installation: installationCost.toFixed(2),
      total: totalCost.toFixed(2),
    };
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {!home && (
        <AiFloorSelector
          roomType={roomType}
          handleRoomTypeChange={handleRoomTypeChange}
          floorArea={floorArea}
          handleFloorAreaChange={handleFloorAreaChange}
          handlePreferenceChange={handlePreferenceChange}
          handleTextureUpload={handleTextureUpload}
          generateRecommendations={generateRecommendations}
          userPreferences={userPreferences}
          toggleFloorOptions={toggleFloorOptions}
          wallColor={wallColor}
          handleWallColorChange={handleWallColorChange}
        />
      )}

      {/* Floor Options Panel */}
      {showFloorOptions && (
        <FloorOptions
          setShowFloorOptions={setShowFloorOptions}
          floorOptionsData={floorOptionsData}
          selectFloor={selectFloor}
          setupComparison={setupComparison}
        />
      )}

      {/* AI Recommendations Panel */}
      {showAIRecommendations && (
        <AIRecommendations
          setShowAIRecommendations={setShowAIRecommendations}
          roomType={roomType}
          userPreferences={userPreferences}
          recommendedFloors={recommendedFloors}
          setupComparison={setupComparison}
        />
      )}

      {/* Selected Floor Details Panel */}
      {showSelectedFloorDetails && selectedFloor && (
        <FloorDetails
          selectedFloor={selectedFloor}
          setShowSelectedFloorDetails={setShowSelectedFloorDetails}
          calculateTotalCost={calculateTotalCost}
          predictiveInsights={predictiveInsights}
          floorArea={floorArea}
        />
      )}

      {/* Side-by-Side Comparison Panel */}
      {showSideBySide && selectedFloor && comparisonFloor && (
        <ComparisonFloor
          setShowSideBySide={setShowSideBySide}
          selectedFloor={selectedFloor}
          comparisonFloor={comparisonFloor}
          selectFloor={selectFloor}
          calculateTotalCost={calculateTotalCost}
        />
      )}

      <Canvas shadows camera={{ position: [0, 3, 8], fov: 60 }}>
        <Scene userTexture={userTexture} wallColor={wallColor} />
      </Canvas>
    </div>
  );
};

export default Room;
