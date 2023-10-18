'use client';
import { LocationMarkerIcon } from "@heroicons/react/solid";
import React from "react";

interface ButtonProps {
    label: string;
    backgroundColor: string;
    color: string;
    border?: string;
    onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({
    label,
    backgroundColor,
    color,
    border,
    onClick, // Receive the onClick prop
}) => {
    return (
        <button
            className="dash-btn h-full"
            style={{
                backgroundColor,
                color,
                border,
            }}
            onClick={onClick} // Use the onClick prop here
        >
            {label}
        </button>
    );
};
const location = () => {
    const todaysDate = new Date().toLocaleDateString();

    return (
        <>
            <div className="flex gap-1">
                <div className="flex "></div>
                <h3>Orders database</h3>
                <span className="text-light text-[#a0a0a0] ">Today - {todaysDate}</span>
                <div className="rounded-full h-[30p] w-p[30px] flex items-center justify-center bg-[#3333]">
                    <LocationMarkerIcon width={20} height={20} />
                </div>
            </div>
        </>
    )
}

interface BannerProps {
    todaysDate: string;
}


const Banner: React.FC<BannerProps> = ({ todaysDate }) => {
    const handleClick = () => {
        console.log("Button clicked");
    };

    return (
        <div className="rounded-full bg-dash-grey-card p-2 h-[75px] flex">
            <div className="flex gap-1">
                <div className="flex "></div>
                <h3>Orders database</h3>
                <span className="text-light text-[#a0a0a0] ">Today - {todaysDate}</span>
                <div className="rounded-full h-[30px] w-[30px] flex items-center justify-center bg-[#3333]">
                    <LocationMarkerIcon width={20} height={20} />
                </div>
            </div>
            <div className="flex w-full gap-1 justify-end">
                <CustomButton
                    label="Download report"
                    backgroundColor=" transparent"
                    border="1px solid #404040"
                    color="white"
                    onClick={handleClick}
                />
                <CustomButton
                    label="Create shipment"
                    backgroundColor="#EE815F"
                    color="black"
                    onClick={handleClick}
                />
            </div>
        </div>
    );
};

export default Banner;