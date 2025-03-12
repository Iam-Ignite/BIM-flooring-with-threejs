import React from "react";

export default function FloorOptions({setShowFloorOptions,floorOptionsData,selectFloor,setupComparison}) {
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
        <h2 style={{ margin: 0 }}>Floor Options</h2>
        <button
          onClick={() => setShowFloorOptions(false)}
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
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "15px",
        }}
      >
        {floorOptionsData.map((floor, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "5px",
              padding: "10px",
              cursor: "pointer",
            }}
            onClick={() => selectFloor(floor)}
          >
            <img
              src={floor.texture}
              alt={floor.name}
              style={{
                width: "100%",
                height: "100px",
                objectFit: "cover",
                marginBottom: "5px",
              }}
            />
            <h3 style={{ margin: "0 0 5px 0", fontSize: "16px" }}>
              {floor.name}
            </h3>
            <p style={{ margin: "0 0 5px 0", fontSize: "14px" }}>
              ${floor.price}/m²
            </p>
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
                marginTop: "5px",
                fontSize: "12px",
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
