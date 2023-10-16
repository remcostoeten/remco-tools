import InputWithLabel from "@/components/core/icons/InputWithElement";
import Sprinkle from "@/components/effects/Sprinkle";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button, Input, Label } from "@/components/ui/ui-imports";
import React, { useState } from "react";


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

        const R = 6371;
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

        setDistance(distance);
    };

    const deg2rad = (deg: number) => {
        return deg * (Math.PI / 180);
    };

    return (
        <>
            <Card className="text-cream">
                <h2>Distance Calculator</h2>
                <Card className="flex flex-col gap-2">
                    <InputWithLabel label="Location 1 Latitude:" onChange={(e) => setLatitude1(e.target.value)}
                        value={latitude1} />
                </Card>
                <Card className="flex flex-col gap-2 p-4">
                    <Label className="mb-4">Location 1 Longitude:</Label>
                    <Input
                        type="text" className="text-cream"
                        value={longitude1}
                        onChange={(e) => setLongitude1(e.target.value)}
                    />
                </Card>
                <Card className="flex flex-col gap-2 p-4">
                    <Label className="mb-4">Location 2 Latitude:</Label>
                    <Input
                        type="text" className="text-cream"
                        value={latitude2}
                        onChange={(e) => setLatitude2(e.target.value)}
                    />
                </Card>
                <Card className="flex flex-col gap-2 p-4">
                    <Label className="mb-4">Location 2 Longitude:</Label>
                    <Input
                        type="text" className="text-cream"
                        value={longitude2}
                        onChange={(e) => setLongitude2(e.target.value)}
                    />
                </Card>
            </Card >
            <button className="cta-sprinkle" onClick={calculateDistance}><Sprinkle>Calculate</Sprinkle></button>
            <Label>Distance:</Label>
            <Badge>{distance}</Badge>
        </>
    );
};

export default DistanceCalculator;
