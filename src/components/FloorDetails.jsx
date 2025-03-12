import React from "react";

export default function FloorDetails({selectedFloor,setShowSelectedFloorDetails,calculateTotalCost,predictiveInsights,floorArea}) {
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
        <h2 style={{ margin: 0 }}>{selectedFloor.name}</h2>
        <button
          onClick={() => setShowSelectedFloorDetails(false)}
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

      <img
        src={selectedFloor.texture}
        alt={selectedFloor.name}
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          marginBottom: "15px",
          borderRadius: "5px",
        }}
      />

      <div style={{ marginBottom: "15px" }}>
        <h3 style={{ margin: "0 0 10px 0" }}>Features</h3>
        <ul style={{ margin: 0, paddingLeft: "20px" }}>
          <li>
            <strong>Material:</strong> {selectedFloor.material}
          </li>
          <li>
            <strong>Price:</strong> ${selectedFloor.price}/m²
          </li>
          <li>
            <strong>Durability:</strong> {selectedFloor.durability}/10
          </li>
          <li>
            <strong>Sustainability:</strong> {selectedFloor.sustainabilityScore}
            /10
          </li>
          <li>
            <strong>Maintenance:</strong> {selectedFloor.maintenance}
          </li>
          <li>
            <strong>Moisture Resistance:</strong>{" "}
            {selectedFloor.moistureResistance}
          </li>
          <li>
            <strong>Installation Complexity:</strong>{" "}
            {selectedFloor.installationComplexity}
          </li>
        </ul>
      </div>

      {/* Cost Calculator */}
      <div style={{ marginBottom: "15px" }}>
        <h3 style={{ margin: "0 0 10px 0" }}>Cost Estimate ({floorArea}m²)</h3>
        <div
          style={{
            background: "#f5f5f5",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5px",
            }}
          >
            <span>Materials:</span>
            <span>${calculateTotalCost(selectedFloor).materials}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "5px",
            }}
          >
            <span>Installation:</span>
            <span>${calculateTotalCost(selectedFloor).installation}</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
              borderTop: "1px solid #ddd",
              paddingTop: "5px",
              marginTop: "5px",
            }}
          >
            <span>Total:</span>
            <span>${calculateTotalCost(selectedFloor).total}</span>
          </div>
        </div>
      </div>

      {/* Predictive Insights */}
      {predictiveInsights && (
        <div>
          <h3 style={{ margin: "0 0 10px 0" }}>AI Predictive Insights</h3>
          <div
            style={{
              background: "#f5f5f5",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <div style={{ marginBottom: "5px" }}>
              <strong>Predicted Lifespan:</strong>{" "}
              {predictiveInsights.predictedLifespan} years
            </div>
            <div style={{ marginBottom: "5px" }}>
              <strong>Lifetime Maintenance:</strong> ~$
              {predictiveInsights.maintenanceCosts}/m²
            </div>
            <div style={{ marginBottom: "5px" }}>
              <strong>Resale Impact:</strong> {predictiveInsights.resaleImpact}
            </div>
            <div style={{ marginBottom: "5px" }}>
              <strong>Trend Forecast:</strong>{" "}
              {predictiveInsights.trendForecast}
            </div>
            <div>
              <strong>Installation Time:</strong>{" "}
              {predictiveInsights.installationTimeEstimate}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
