import React from "react";

export default function AiFloorSelector({roomType,handleRoomTypeChange,floorArea,handleFloorAreaChange,handlePreferenceChange,handleTextureUpload,generateRecommendations,userPreferences,toggleFloorOptions,wallColor,handleWallColorChange}) {
  return (
    <div
      style={{
        position: "absolute",
        top: 10,
        left: 10,
        zIndex: 10,
        background: "#fff",
        padding: "10px",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        maxWidth: "300px",
        maxHeight: "90vh",
        overflowY: "auto",
      }}
    >
      <h2 style={{ marginTop: 0 }}>AI Floor Selector</h2>

      {/* Room Type Selection */}
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="room-type"
          style={{
            display: "block",
            marginBottom: "5px",
            fontWeight: "bold",
          }}
        >
          Room Type:
        </label>
        <select
          id="room-type"
          value={roomType}
          onChange={handleRoomTypeChange}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        >
          <option value="Living Room">Living Room</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Bathroom">Bathroom</option>
          <option value="Dining Room">Dining Room</option>
          <option value="Office">Office</option>
          <option value="Hallway">Hallway</option>
        </select>
      </div>

      {/* Floor Area Input */}
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="floor-area"
          style={{
            display: "block",
            marginBottom: "5px",
            fontWeight: "bold",
          }}
        >
          Floor Area (m²):
        </label>
        <input
          id="floor-area"
          type="number"
          min="1"
          value={floorArea}
          onChange={handleFloorAreaChange}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      {/* User Preferences */}
      <div style={{ marginBottom: "15px" }}>
        <h3 style={{ marginBottom: "8px", fontSize: "16px" }}>
          Your Preferences
        </h3>

        {/* Budget Preference */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Budget:
          </label>
          <div style={{ display: "flex", gap: "5px" }}>
            {["low", "medium", "high"].map((option) => (
              <button
                key={option}
                onClick={() => handlePreferenceChange("budget", option)}
                style={{
                  flex: 1,
                  padding: "5px",
                  background:
                    userPreferences.budget === option ? "#4285F4" : "#f0f0f0",
                  color: userPreferences.budget === option ? "white" : "black",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Durability Preference */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Durability:
          </label>
          <div style={{ display: "flex", gap: "5px" }}>
            {["low", "medium", "high"].map((option) => (
              <button
                key={option}
                onClick={() => handlePreferenceChange("durability", option)}
                style={{
                  flex: 1,
                  padding: "5px",
                  background:
                    userPreferences.durability === option
                      ? "#4285F4"
                      : "#f0f0f0",
                  color:
                    userPreferences.durability === option ? "white" : "black",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Sustainability Preference */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Sustainability:
          </label>
          <div style={{ display: "flex", gap: "5px" }}>
            {["low", "medium", "high"].map((option) => (
              <button
                key={option}
                onClick={() => handlePreferenceChange("sustainability", option)}
                style={{
                  flex: 1,
                  padding: "5px",
                  background:
                    userPreferences.sustainability === option
                      ? "#4285F4"
                      : "#f0f0f0",
                  color:
                    userPreferences.sustainability === option
                      ? "white"
                      : "black",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Maintenance Preference */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Maintenance:
          </label>
          <div style={{ display: "flex", gap: "5px" }}>
            {["low", "medium", "high"].map((option) => (
              <button
                key={option}
                onClick={() => handlePreferenceChange("maintenance", option)}
                style={{
                  flex: 1,
                  padding: "5px",
                  background:
                    userPreferences.maintenance === option
                      ? "#4285F4"
                      : "#f0f0f0",
                  color:
                    userPreferences.maintenance === option ? "white" : "black",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Moisture Resistance Preference */}
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>
            Moisture Resistance:
          </label>
          <div style={{ display: "flex", gap: "5px" }}>
            {["low", "medium", "high"].map((option) => (
              <button
                key={option}
                onClick={() => handlePreferenceChange("moisture", option)}
                style={{
                  flex: 1,
                  padding: "5px",
                  background:
                    userPreferences.moisture === option ? "#4285F4" : "#f0f0f0",
                  color:
                    userPreferences.moisture === option ? "white" : "black",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <button
          onClick={toggleFloorOptions}
          style={{
            flex: 1,
            padding: "10px",
            background: "#4285F4",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Browse Floors
        </button>
        <button
          onClick={generateRecommendations}
          style={{
            flex: 1,
            padding: "10px",
            background: "#0F9D58",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Get AI Recommendations
        </button>
      </div>

      {/* Wall Color Selector */}
      <div style={{ marginBottom: "15px" }}>
        <label
          htmlFor="wall-color"
          style={{
            display: "block",
            marginBottom: "5px",
            fontWeight: "bold",
          }}
        >
          Wall Color:
        </label>
        <input
          id="wall-color"
          type="color"
          value={wallColor}
          onChange={handleWallColorChange}
          style={{ width: "100%" }}
        />
      </div>

      {/* Custom Texture Upload */}
      <div>
        <label
          htmlFor="texture-upload"
          style={{
            display: "block",
            marginBottom: "5px",
            fontWeight: "bold",
          }}
        >
          Upload Custom Texture:
        </label>
        <input
          id="texture-upload"
          type="file"
          accept="image/*"
          onChange={handleTextureUpload}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}
