import React from "react";

export default function AIRecommendations({setShowAIRecommendations,roomType,userPreferences,recommendedFloors,setupComparison}) {
  return (
    <div
      style={{
        position: "absolute",
        top: 10,
        right: 10,
        zIndex: 10,
        background: "#fff",
        padding: "15px",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
        maxWidth: "400px",
        maxHeight: "90vh",
        overflowY: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "15px",
        }}
      >
        <h2 style={{ margin: 0 }}>AI Recommendations</h2>
        <button
          onClick={() => setShowAIRecommendations(false)}
          style={{
            background: "none",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          ×
        </button>
      </div>

      <div>
        <p>
          Based on your preferences for a <strong>{roomType}</strong> with:
        </p>
        <ul style={{ marginBottom: "15px" }}>
          <li>
            <strong>Budget:</strong>{" "}
            {userPreferences.budget.charAt(0).toUpperCase() +
              userPreferences.budget.slice(1)}
          </li>
          <li>
            <strong>Durability:</strong>{" "}
            {userPreferences.durability.charAt(0).toUpperCase() +
              userPreferences.durability.slice(1)}
          </li>
          <li>
            <strong>Sustainability:</strong>{" "}
            {userPreferences.sustainability.charAt(0).toUpperCase() +
              userPreferences.sustainability.slice(1)}
          </li>
          <li>
            <strong>Maintenance:</strong>{" "}
            {userPreferences.maintenance.charAt(0).toUpperCase() +
              userPreferences.maintenance.slice(1)}
          </li>
          <li>
            <strong>Moisture Resistance:</strong>{" "}
            {userPreferences.moisture.charAt(0).toUpperCase() +
              userPreferences.moisture.slice(1)}
          </li>
        </ul>

        <h3>Top Recommendations:</h3>
        {recommendedFloors.slice(0, 5).map((floor, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              padding: "10px",
              marginBottom: "10px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
            onClick={() => selectFloor(floor)}
          >
            <img
              src={floor.texture}
              alt={floor.name}
              style={{ width: "80px", height: "80px", objectFit: "cover" }}
            />
            <div>
              <h3 style={{ margin: "0 0 5px 0", fontSize: "16px" }}>
                {floor.name}
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "8px",
                    background: "#eee",
                    borderRadius: "4px",
                    marginRight: "5px",
                  }}
                >
                  <div
                    style={{
                      width: `${floor.matchPercentage}%`,
                      height: "100%",
                      background: "#4285F4",
                      borderRadius: "4px",
                    }}
                  />
                </div>
                <span style={{ fontSize: "12px" }}>
                  {floor.matchPercentage}% match
                </span>
              </div>
              <p style={{ margin: "0", fontSize: "14px" }}>${floor.price}/m²</p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setupComparison(floor);
              }}
              style={{
                padding: "5px 10px",
                background: "#4285F4",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "12px",
                marginLeft: "auto",
              }}
            >
              Compare
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
