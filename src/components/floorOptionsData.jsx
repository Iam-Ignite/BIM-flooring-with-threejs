export const floorOptionsData = [
    {
      "id": 1,
      "name": "2145 Floor",
      "type": "Hardwood Flooring",
      "description": "Light oak wooden flooring with a sleek finish",
      "durability": 8.5, // Scale of 1-10 (converted from durabilityScore)
      "durabilityText": "High (25+ years)",
      "price": 30, // $/sq.ft (converted from priceValue)
      "priceText": "$30/sq.ft",
      "maintenance": "Regular polishing required",
      "maintenanceCost": "Medium",
      "sustainabilityScore": 6.8, // Already on scale of 1-10
      "sustainabilityText": "Moderate - Renewable resource with some environmental impact",
      "moistureResistance": "Moderate",
      "moistureScore": 6.2,
      "installationComplexity": "Moderate",
      "installationScore": 5.5,
      "installationCost": 25, // Estimated based on complexity
      "texture": "/2145.jpg",
      "environmentalImpact": "Medium",
      "totalLifecycleCost": 65, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium (16kg CO2/sq.ft)",
      "heatRetention": "Moderate",
      "roomSuitability": ["Living Room", "Dining Room", "Bedroom", "Office"],
      "manufacturerDetails": {
        "name": "Premium Wood Flooring",
        "certifications": ["FSC Certified"],
        "warranty": "25 years residential"
      }
    },
    {
      "id": 2,
      "name": "Bernard Hermant Floor",
      "type": "Tile Flooring",
      "description": "Classic checkered tile flooring",
      "durability": 7.0, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "Medium (20+ years)",
      "price": 28, // $/sq.ft (from priceValue)
      "priceText": "$28/sq.ft",
      "maintenance": "Regular cleaning, occasional regrouting",
      "maintenanceCost": "Low",
      "sustainabilityScore": 7.2, // Already on scale of 1-10
      "sustainabilityText": "Good - Made from natural materials with moderate processing",
      "moistureResistance": "High",
      "moistureScore": 8.5,
      "installationComplexity": "Moderate to High",
      "installationScore": 6.5,
      "installationCost": 30, // Estimated based on complexity
      "texture": "/bernard-hermant-cB18uhhf43s-unsplash.jpg",
      "environmentalImpact": "Medium-Low",
      "totalLifecycleCost": 65, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium-Low (12kg CO2/sq.ft)",
      "heatRetention": "Low",
      "roomSuitability": ["Kitchen", "Bathroom", "Entryway", "Sunroom"],
      "manufacturerDetails": {
        "name": "European Tile Works",
        "certifications": ["ISO 14001"],
        "warranty": "20 years residential"
      }
    },
    {
      "id": 3,
      "name": "Black White Floor",
      "type": "Tile Flooring",
      "description": "Modern black and white checkered floor tiles",
      "durability": 8.8, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "High (30+ years)",
      "price": 40, // $/sq.ft (from priceValue)
      "priceText": "$40/sq.ft",
      "maintenance": "Regular cleaning, occasional regrouting",
      "maintenanceCost": "Low",
      "sustainabilityScore": 6.5, // Already on scale of 1-10
      "sustainabilityText": "Moderate - Natural materials with moderate energy in production",
      "moistureResistance": "Very High",
      "moistureScore": 9.2,
      "installationComplexity": "High",
      "installationScore": 7.0,
      "installationCost": 35, // Estimated based on complexity
      "texture": "/black-white-floor.avif",
      "environmentalImpact": "Medium",
      "totalLifecycleCost": 80, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium (15kg CO2/sq.ft)",
      "heatRetention": "Low",
      "roomSuitability": ["Bathroom", "Kitchen", "Entryway", "Hallway"],
      "manufacturerDetails": {
        "name": "Designer Tile Company",
        "certifications": ["Eco-Label Certified"],
        "warranty": "30 years residential"
      }
    },
    {
      "id": 4,
      "name": "Brick Floor",
      "type": "Brick Flooring",
      "description": "Rustic brick flooring for a vintage aesthetic",
      "durability": 9.5, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "Very High (50+ years)",
      "price": 45, // $/sq.ft (from priceValue)
      "priceText": "$45/sq.ft",
      "maintenance": "Sealing required, occasional repointing",
      "maintenanceCost": "Medium",
      "sustainabilityScore": 7.0, // Already on scale of 1-10
      "sustainabilityText": "Good - Potential for reclaimed materials, long lifespan",
      "moistureResistance": "Moderate",
      "moistureScore": 6.0,
      "installationComplexity": "Very High",
      "installationScore": 8.5,
      "installationCost": 50, // Estimated based on complexity
      "texture": "/brick-floor.jpg",
      "environmentalImpact": "Low (Reclaimed) to High (New)",
      "totalLifecycleCost": 105, // Estimated: price + installation + maintenance over time
      "co2Footprint": "High initially, Low over lifetime (18kg CO2/sq.ft)",
      "heatRetention": "High",
      "roomSuitability": ["Living Room", "Kitchen", "Hallway", "Patio"],
      "manufacturerDetails": {
        "name": "Historic Materials Inc.",
        "certifications": ["LEED Contributing"],
        "warranty": "50 years residential"
      }
    },
    {
      "id": 5,
      "name": "Clean White Wall",
      "type": "Laminate Flooring",
      "description": "Smooth white flooring for a minimalistic look",
      "durability": 5.5, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "Medium (15+ years)",
      "price": 25, // $/sq.ft (from priceValue)
      "priceText": "$25/sq.ft",
      "maintenance": "Regular cleaning, avoid moisture",
      "maintenanceCost": "Low",
      "sustainabilityScore": 4.5, // Already on scale of 1-10
      "sustainabilityText": "Low-Moderate - Contains synthetic materials, not biodegradable",
      "moistureResistance": "Low",
      "moistureScore": 4.0,
      "installationComplexity": "Low",
      "installationScore": 3.0,
      "installationCost": 15, // Estimated based on complexity
      "texture": "/clean-white-wall_1194-5925.avif",
      "environmentalImpact": "Medium-High",
      "totalLifecycleCost": 45, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium-High (17kg CO2/sq.ft)",
      "heatRetention": "Low",
      "roomSuitability": ["Bedroom", "Living Room", "Office", "Dining Room"],
      "manufacturerDetails": {
        "name": "Modern Floors Inc.",
        "certifications": ["E1 Emissions Standard"],
        "warranty": "15 years residential"
      }
    },
    {
      "id": 6,
      "name": "Geometric Pattern Floor",
      "type": "Tile Flooring",
      "description": "Hexagonal geometric patterned tiles",
      "durability": 8.7, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "High (30+ years)",
      "price": 50, // $/sq.ft (from priceValue)
      "priceText": "$50/sq.ft",
      "maintenance": "Regular cleaning, occasional regrouting",
      "maintenanceCost": "Low",
      "sustainabilityScore": 6.3, // Already on scale of 1-10
      "sustainabilityText": "Moderate - Natural materials with high energy in production",
      "moistureResistance": "High",
      "moistureScore": 8.8,
      "installationComplexity": "Very High",
      "installationScore": 8.7,
      "installationCost": 45, // Estimated based on complexity
      "texture": "/geometric-pattern-floor.avif",
      "environmentalImpact": "Medium",
      "totalLifecycleCost": 100, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium (15kg CO2/sq.ft)",
      "heatRetention": "Low",
      "roomSuitability": ["Bathroom", "Kitchen", "Entryway", "Commercial Spaces"],
      "manufacturerDetails": {
        "name": "Artisan Tile Works",
        "certifications": ["Fair Trade Certified"],
        "warranty": "30 years residential"
      }
    },
    {
      "id": 7,
      "name": "Gray Parquet",
      "type": "Engineered Wood Flooring",
      "description": "Elegant grey parquet flooring",
      "durability": 8.3, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "High (30+ years)",
      "price": 38, // $/sq.ft (from priceValue)
      "priceText": "$38/sq.ft",
      "maintenance": "Regular polishing, avoid excess water",
      "maintenanceCost": "Medium",
      "sustainabilityScore": 6.8, // Already on scale of 1-10
      "sustainabilityText": "Moderate-Good - Uses less hardwood than solid wood flooring",
      "moistureResistance": "Moderate",
      "moistureScore": 6.5,
      "installationComplexity": "High",
      "installationScore": 7.5,
      "installationCost": 35, // Estimated based on complexity
      "texture": "/gray-parquet.jpg",
      "environmentalImpact": "Medium",
      "totalLifecycleCost": 85, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium (14kg CO2/sq.ft)",
      "heatRetention": "Moderate",
      "roomSuitability": ["Living Room", "Dining Room", "Bedroom", "Office"],
      "manufacturerDetails": {
        "name": "European Flooring Solutions",
        "certifications": ["FSC Certified", "Low VOC Emissions"],
        "warranty": "25 years residential"
      }
    },
    {
      "id": 8,
      "name": "Joshua Bartell Floor",
      "type": "Hardwood Flooring",
      "description": "Sophisticated wooden flooring for premium interiors",
      "durability": 9.2, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "Very High (40+ years)",
      "price": 55, // $/sq.ft (from priceValue)
      "priceText": "$55/sq.ft",
      "maintenance": "Regular polishing and conditioning",
      "maintenanceCost": "High",
      "sustainabilityScore": 5.5, // Already on scale of 1-10
      "sustainabilityText": "Moderate - Renewable but slow-growing hardwood species",
      "moistureResistance": "Moderate",
      "moistureScore": 6.0,
      "installationComplexity": "High",
      "installationScore": 7.0,
      "installationCost": 40, // Estimated based on complexity
      "texture": "/joshua-bartell-6vvIBTvL90A-unsplash.jpg",
      "environmentalImpact": "Medium-High",
      "totalLifecycleCost": 110, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium-High (19kg CO2/sq.ft)",
      "heatRetention": "Moderate",
      "roomSuitability": ["Living Room", "Dining Room", "Master Bedroom", "Study"],
      "manufacturerDetails": {
        "name": "Luxury Wood Products",
        "certifications": ["FSC Certified"],
        "warranty": "40 years residential"
      }
    },
    {
      "id": 9,
      "name": "Lamp Floor",
      "type": "Tile Flooring",
      "description": "Subtle lighting-reflective floor tiles",
      "durability": 7.2, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "Medium (20+ years)",
      "price": 35, // $/sq.ft (from priceValue)
      "priceText": "$35/sq.ft",
      "maintenance": "Regular cleaning, avoid abrasives",
      "maintenanceCost": "Low",
      "sustainabilityScore": 6.7, // Already on scale of 1-10
      "sustainabilityText": "Moderate - Standard ceramic production methods",
      "moistureResistance": "High",
      "moistureScore": 8.0,
      "installationComplexity": "Moderate",
      "installationScore": 6.0,
      "installationCost": 30, // Estimated based on complexity
      "texture": "/lamp-floor.avif",
      "environmentalImpact": "Medium",
      "totalLifecycleCost": 70, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium (15kg CO2/sq.ft)",
      "heatRetention": "Low",
      "roomSuitability": ["Living Room", "Dining Room", "Hallway", "Entryway"],
      "manufacturerDetails": {
        "name": "Modern Tile Solutions",
        "certifications": ["Low VOC Emissions"],
        "warranty": "20 years residential"
      }
    },
    {
      "id": 10,
      "name": "Marble Floor",
      "type": "Stone Flooring",
      "description": "Premium white marble flooring",
      "durability": 9.8, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "Very High (50+ years)",
      "price": 75, // $/sq.ft (from priceValue)
      "priceText": "$75/sq.ft",
      "maintenance": "Regular sealing, careful cleaning",
      "maintenanceCost": "High",
      "sustainabilityScore": 3.5, // Already on scale of 1-10
      "sustainabilityText": "Low - Non-renewable resource with energy-intensive extraction",
      "moistureResistance": "Moderate",
      "moistureScore": 6.5,
      "installationComplexity": "Very High",
      "installationScore": 8.8,
      "installationCost": 55, // Estimated based on complexity
      "texture": "/marble-floor.jpg",
      "environmentalImpact": "High",
      "totalLifecycleCost": 145, // Estimated: price + installation + maintenance over time
      "co2Footprint": "High (25kg CO2/sq.ft)",
      "heatRetention": "High",
      "roomSuitability": ["Entryway", "Bathroom", "Kitchen", "Formal Living Areas"],
      "manufacturerDetails": {
        "name": "Luxury Stone Imports",
        "certifications": ["Natural Stone Council Certification"],
        "warranty": "Lifetime residential"
      }
    },
    {
      "id": 11,
      "name": "Parquet Floor Texture",
      "type": "Hardwood Flooring",
      "description": "Natural wooden parquet for an elegant touch",
      "durability": 8.5, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "High (30+ years)",
      "price": 45, // $/sq.ft (from priceValue)
      "priceText": "$45/sq.ft",
      "maintenance": "Regular polishing and refinishing",
      "maintenanceCost": "Medium to High",
      "sustainabilityScore": 5.8, // Already on scale of 1-10
      "sustainabilityText": "Moderate - Hardwood resource with medium sustainability",
      "moistureResistance": "Low to Moderate",
      "moistureScore": 5.5,
      "installationComplexity": "High",
      "installationScore": 7.3,
      "installationCost": 40, // Estimated based on complexity
      "texture": "/parquet-floor-texture_1194-6957.avif",
      "environmentalImpact": "Medium-High",
      "totalLifecycleCost": 100, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium (16kg CO2/sq.ft)",
      "heatRetention": "Moderate",
      "roomSuitability": ["Living Room", "Dining Room", "Bedroom", "Study"],
      "manufacturerDetails": {
        "name": "Classic Parquet Company",
        "certifications": ["FSC Certified"],
        "warranty": "30 years residential"
      }
    },
    {
      "id": 12,
      "name": "Red Parquet Floor",
      "type": "Hardwood Flooring",
      "description": "Bold red wooden parquet flooring",
      "durability": 8.7, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "High (35+ years)",
      "price": 50, // $/sq.ft (from priceValue)
      "priceText": "$50/sq.ft",
      "maintenance": "Regular polishing and refinishing",
      "maintenanceCost": "Medium to High",
      "sustainabilityScore": 5.5, // Already on scale of 1-10
      "sustainabilityText": "Moderate - Hardwood with staining treatments",
      "moistureResistance": "Low to Moderate",
      "moistureScore": 5.5,
      "installationComplexity": "High",
      "installationScore": 7.5,
      "installationCost": 45, // Estimated based on complexity
      "texture": "/red-parquet-floor_1194-6946.avif",
      "environmentalImpact": "Medium-High",
      "totalLifecycleCost": 110, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium-High (18kg CO2/sq.ft)",
      "heatRetention": "Moderate",
      "roomSuitability": ["Living Room", "Dining Room", "Library", "Wine Cellar"],
      "manufacturerDetails": {
        "name": "Designer Wood Flooring",
        "certifications": ["FSC Certified", "Low VOC Finishes"],
        "warranty": "35 years residential"
      }
    },
    {
      "id": 13,
      "name": "Tile Floor",
      "type": "Tile Flooring",
      "description": "Classic patterned tile flooring",
      "durability": 8.5, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "High (30+ years)",
      "price": 40, // $/sq.ft (from priceValue)
      "priceText": "$40/sq.ft",
      "maintenance": "Regular cleaning, occasional regrouting",
      "maintenanceCost": "Low",
      "sustainabilityScore": 7.0, // Already on scale of 1-10
      "sustainabilityText": "Good - Made from natural materials with moderate processing",
      "moistureResistance": "Very High",
      "moistureScore": 9.0,
      "installationComplexity": "Moderate to High",
      "installationScore": 6.5,
      "installationCost": 35, // Estimated based on complexity
      "texture": "/tile-floor.jpg",
      "environmentalImpact": "Medium",
      "totalLifecycleCost": 80, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium (14kg CO2/sq.ft)",
      "heatRetention": "Low to Moderate",
      "roomSuitability": ["Bathroom", "Kitchen", "Entryway", "Laundry Room"],
      "manufacturerDetails": {
        "name": "Classic Tile Works",
        "certifications": ["ISO 14001"],
        "warranty": "30 years residential"
      }
    },
    {
      "id": 14,
      "name": "Tile Motif",
      "type": "Tile Flooring",
      "description": "Decorative tile flooring with intricate patterns",
      "durability": 8.6, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "High (30+ years)",
      "price": 55, // $/sq.ft (from priceValue)
      "priceText": "$55/sq.ft",
      "maintenance": "Regular cleaning, careful maintenance",
      "maintenanceCost": "Low to Medium",
      "sustainabilityScore": 6.5, // Already on scale of 1-10
      "sustainabilityText": "Moderate - Energy-intensive decoration process",
      "moistureResistance": "High",
      "moistureScore": 8.8,
      "installationComplexity": "High",
      "installationScore": 7.8,
      "installationCost": 45, // Estimated based on complexity
      "texture": "/tile-motif.avif",
      "environmentalImpact": "Medium",
      "totalLifecycleCost": 105, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium (16kg CO2/sq.ft)",
      "heatRetention": "Low",
      "roomSuitability": ["Entryway", "Bathroom", "Kitchen", "Dining Room"],
      "manufacturerDetails": {
        "name": "Artisan Tile Creations",
        "certifications": ["Handcrafted Certification", "Low VOC Materials"],
        "warranty": "30 years residential"
      }
    },
    {
      "id": 15,
      "name": "Tiles Floor",
      "type": "Tile Flooring",
      "description": "Sleek modern tiles for contemporary homes",
      "durability": 8.4, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "High (30+ years)",
      "price": 42, // $/sq.ft (from priceValue)
      "priceText": "$42/sq.ft",
      "maintenance": "Easy cleaning, minimal maintenance",
      "maintenanceCost": "Low",
      "sustainabilityScore": 7.2, // Already on scale of 1-10
      "sustainabilityText": "Good - Efficient production methods and long lifespan",
      "moistureResistance": "Very High",
      "moistureScore": 9.5,
      "installationComplexity": "Moderate",
      "installationScore": 6.0,
      "installationCost": 30, // Estimated based on complexity
      "texture": "/tiles-floor-1.jpg",
      "environmentalImpact": "Medium",
      "totalLifecycleCost": 75, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium (14kg CO2/sq.ft)",
      "heatRetention": "Low",
      "roomSuitability": ["Bathroom", "Kitchen", "Laundry Room", "Entryway"],
      "manufacturerDetails": {
        "name": "Modern Ceramic Solutions",
        "certifications": ["ISO 14001", "Low VOC Materials"],
        "warranty": "30 years residential"
      }
    },
    {
      "id": 16,
      "name": "Wesley Tingey Floor",
      "type": "Hardwood Flooring",
      "description": "High-end wooden flooring with rich textures",
      "durability": 9.0, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "Very High (40+ years)",
      "price": 60, // $/sq.ft (from priceValue)
      "priceText": "$60/sq.ft",
      "maintenance": "Regular care and refinishing",
      "maintenanceCost": "High",
      "sustainabilityScore": 5.5, // Already on scale of 1-10
      "sustainabilityText": "Moderate - Slow-growing hardwood species",
      "moistureResistance": "Moderate",
      "moistureScore": 6.0,
      "installationComplexity": "High",
      "installationScore": 7.2,
      "installationCost": 45, // Estimated based on complexity
      "texture": "/wesley-tingey-RZgumehZWs4-unsplash.jpg",
      "environmentalImpact": "Medium-High",
      "totalLifecycleCost": 120, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium-High (19kg CO2/sq.ft)",
      "heatRetention": "Moderate",
      "roomSuitability": ["Living Room", "Dining Room", "Master Bedroom", "Study"],
      "manufacturerDetails": {
        "name": "Signature Wood Flooring",
        "certifications": ["FSC Certified", "Low VOC Finishes"],
        "warranty": "40 years residential"
      }
    },
    {
      "id": 17,
      "name": "White Wooden Floor",
      "type": "Engineered Wood Flooring",
      "description": "Bright and clean white wooden flooring",
      "durability": 8.0, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "High (30+ years)",
      "price": 38, // $/sq.ft (from priceValue)
      "priceText": "$38/sq.ft",
      "maintenance": "Careful cleaning, avoid stains",
      "maintenanceCost": "Medium",
      "sustainabilityScore": 6.5, // Already on scale of 1-10
      "sustainabilityText": "Moderate-Good - More efficient use of wood than solid hardwood",
      "moistureResistance": "Moderate",
      "moistureScore": 6.5,
      "installationComplexity": "Moderate",
      "installationScore": 5.5,
      "installationCost": 25, // Estimated based on complexity
      "texture": "/white-wooden-floor.jpg",
      "environmentalImpact": "Medium",
      "totalLifecycleCost": 70, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium (15kg CO2/sq.ft)",
      "heatRetention": "Moderate",
      "roomSuitability": ["Bedroom", "Living Room", "Dining Room", "Home Office"],
      "manufacturerDetails": {
        "name": "Scandinavian Floor Designs",
        "certifications": ["Nordic Swan Ecolabel", "Low VOC Finishes"],
        "warranty": "25 years residential"
      }
    },
    {
      "id": 18,
      "name": "Wood Floor",
      "type": "Hardwood Flooring",
      "description": "Rustic dark wood flooring",
      "durability": 8.8, // Scale of 1-10 (from durabilityScore)
      "durabilityText": "High (35+ years)",
      "price": 48, // $/sq.ft (from priceValue)
      "priceText": "$48/sq.ft",
      "maintenance": "Regular polishing and care",
      "maintenanceCost": "Medium to High",
      "sustainabilityScore": 5.5, // Already on scale of 1-10
      "sustainabilityText": "Moderate - From managed forests but slow-growing species",
      "moistureResistance": "Low to Moderate",
      "moistureScore": 5.0,
      "installationComplexity": "Moderate to High",
      "installationScore": 6.8,
      "installationCost": 35, // Estimated based on complexity
      "texture": "/wood-floor-1.jpg",
      "environmentalImpact": "Medium-High",
      "totalLifecycleCost": 95, // Estimated: price + installation + maintenance over time
      "co2Footprint": "Medium-High (18kg CO2/sq.ft)",
      "heatRetention": "Moderate to High",
      "roomSuitability": ["Living Room", "Dining Room", "Library", "Study"],
      "manufacturerDetails": {
        "name": "Heritage Wood Products",
        "certifications": ["FSC Certified", "Sustainable Forestry Initiative"],
        "warranty": "35 years residential"
      }
    }
  ];