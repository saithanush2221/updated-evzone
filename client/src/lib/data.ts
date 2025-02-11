import type { Vehicle, ChargingStation } from "@shared/schema";

// Initial vehicle data
export const initialVehicles: Vehicle[] = [
  {
    id: 1,
    name: "Model S",
    manufacturer: "Tesla",
    range: 405,
    batteryCapacity: 100,
    price: 89990,
    maintenanceCost: 1200,
    fuelSavings: 2500,
    imageUrl: "https://images.unsplash.com/photo-1593018931925-c18bb72e6bf0"
  },
  {
    id: 2,
    name: "ID.4",
    manufacturer: "Volkswagen",
    range: 280,
    batteryCapacity: 82,
    price: 41230,
    maintenanceCost: 900,
    fuelSavings: 2000,
    imageUrl: "https://images.unsplash.com/photo-1624623864107-ef79f850b554"
  },
  {
    id: 3,
    name: "Ioniq 5",
    manufacturer: "Hyundai",
    range: 303,
    batteryCapacity: 77,
    price: 45500,
    maintenanceCost: 850,
    fuelSavings: 2200,
    imageUrl: "https://images.unsplash.com/photo-1738794373116-e7d5dee59dcc"
  }
];

// Initial charging station data
export const initialChargingStations: ChargingStation[] = [
  {
    id: 1,
    name: "Downtown Supercharger",
    latitude: "40.7128",
    longitude: "-74.0060",
    address: "123 Main St, New York, NY"
  },
  {
    id: 2,
    name: "City Center Station",
    latitude: "34.0522",
    longitude: "-118.2437",
    address: "456 Oak Ave, Los Angeles, CA"
  },
  {
    id: 3,
    name: "Mall Charging Hub",
    latitude: "41.8781",
    longitude: "-87.6298",
    address: "789 Pine Rd, Chicago, IL"
  }
];

// Educational content sections
export const educationalContent = [
  {
    id: 1,
    title: "EV Basics",
    description: "Learn the fundamentals of electric vehicles",
    imageUrl: "https://images.unsplash.com/photo-1667805630247-28c2a8db1cb4"
  },
  {
    id: 2,
    title: "Charging Guide",
    description: "Understanding EV charging types and best practices",
    imageUrl: "https://images.unsplash.com/photo-1669334788758-c97e6263f149"
  },
  {
    id: 3,
    title: "Maintenance Tips",
    description: "Keep your EV running efficiently",
    imageUrl: "https://images.unsplash.com/photo-1671602472505-5830833ecb70"
  }
];
