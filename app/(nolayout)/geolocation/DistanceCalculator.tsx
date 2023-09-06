import { Badge } from "@/components/ui/badge";
import { Button, Input, Label } from "@/components/ui/ui-imports";
import React, { useState } from "react";

interface DistanceCalculatorProps {
  latitude1: number;
  longitude1: number;
  latitude2: number;
  longitude2: number;
}

const DistanceCalculator = () => {
  const [latitude1, setLatitude1] = useState("");
  const [longitude1, setLongitude1] = useState("");
  const [latitude2, setLatitude2] = useState("");
  const [longitude2, setLongitude2] = useState("");
  const [distance, setDistance] = useState(0);


  const calculateDistance = () => {
    const lat1 = parseFloat(latitude1);
    const lon1 = parseFloat(longitude1);
    const lat2 = parseFloat(latitude2);
    const lon2 = parseFloat(longitude2);
  
    // Calculate the distance using the Haversine formula
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
  
    // Update the distance state
    setDistance(distance);
  };
  
  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  return (
       <>
      <h2>Distance Calculator</h2>
      <div className="flex flex-col gap-2">
        <Label>Location 1 Latitude:</Label>
        <Input
          type="text"
          value={latitude1}
          onChange={(e) => setLatitude1(e.target.value)}
        />
      </div>
      <div>
        <Label>Location 1 Longitude:</Label>
        <Input
          type="text"
          value={longitude1}
          onChange={(e) => setLongitude1(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Location 2 Latitude:</Label>
        <Input
          type="text"
          value={latitude2}
          onChange={(e) => setLatitude2(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label>Location 2 Longitude:</Label>
        <Input
          type="text"
          value={longitude2}
          onChange={(e) => setLongitude2(e.target.value)}
        />
      </div>
      <Button onClick={calculateDistance}>Calculate Distance</Button>
      <div>
        <Label>Distance:</Label>
        <Badge>{distance}</Badge>
      </div>
    </>
  );
};

export default DistanceCalculator;
