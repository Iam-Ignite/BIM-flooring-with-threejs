import React from "react";

export default function ComparisonFloor({setShowSideBySide,selectedFloor,comparisonFloor,selectFloor,calculateTotalCost,floorArea}) {
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
        maxWidth: "600px",
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
        <h2 style={{ margin: 0 }}>Floor Comparison</h2>
        <button
          onClick={() => setShowSideBySide(false)}
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "15px",
        }}
      >
        {/* Current Floor */}
        <div>
          <h3 style={{ textAlign: "center" }}>{selectedFloor.name}</h3>
          <img
            src={selectedFloor.texture}
            alt={selectedFloor.name}
            style={{
              width: "100%",
              height: "100px",
              objectFit: "cover",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          />
          <div style={{ fontSize: "14px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <span>Price:</span>
              <span>${selectedFloor.price}/m²</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <span>Durability:</span>
              <span>{selectedFloor.durability}/10</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <span>Maintenance:</span>
              <span>{selectedFloor.maintenance}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <span>Moisture:</span>
              <span>{selectedFloor.moistureResistance}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <span>Sustainability:</span>
              <span>{selectedFloor.sustainabilityScore}/10</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              <span>Total Cost ({floorArea}m²):</span>
              <span>${calculateTotalCost(selectedFloor).total}</span>
            </div>
          </div>
        </div>

        {/* Comparison Floor */}
        <div>
          <h3 style={{ textAlign: "center" }}>{comparisonFloor.name}</h3>
          <img
            src={comparisonFloor.texture}
            alt={comparisonFloor.name}
            style={{
              width: "100%",
              height: "100px",
              objectFit: "cover",
              marginBottom: "10px",
              borderRadius: "5px",
            }}
          />
          <div style={{ fontSize: "14px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <span>Price:</span>
              <span>${comparisonFloor.price}/m²</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <span>Durability:</span>
              <span>{comparisonFloor.durability}/10</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <span>Maintenance:</span>
              <span>{comparisonFloor.maintenance}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <span>Moisture:</span>
              <span>{comparisonFloor.moistureResistance}</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <span>Sustainability:</span>
              <span>{comparisonFloor.sustainabilityScore}/10</span>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
                fontWeight: "bold",
              }}
            >
              <span>Total Cost ({floorArea}m²):</span>
              <span>${calculateTotalCost(comparisonFloor).total}</span>
            </div>
          </div>
          <button
            onClick={() => {
              selectFloor(comparisonFloor);
              setShowSideBySide(false);
            }}
            style={{
              width: "100%",
              padding: "8px 0",
              marginTop: "10px",
              background: "#4285F4",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Select This Floor
          </button>
        </div>
      </div>
    </div>
  );
}
