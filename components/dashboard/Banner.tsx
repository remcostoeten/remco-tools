'use client';
import { HiLocationMarker } from "react-icons/hi";
import React from "react";
import WarningIcon from "../core/icons/WarningIcon";
import { ListBulletIcon } from "@radix-ui/react-icons";


interface ButtonProps {
    label: string;
    backgroundColor: string;
    color: string;
    border?: string;
    onClick?: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({
    label,
    backgroundColor,
    color,
    border,
    onClick,
}) => {
    return (
        <button
            className="dash-btn h-full"
            style={{
                backgroundColor,
                color,
                border,
            }}
            onClick={onClick}
        >
            {label}
        </button>
    );
};
const Banner: React.FC = () => {
    const currentDay = new Date().getDay();
    return (
        <div className="rounded-full bg-dash-grey-card p-1 h-[75px] flex">
            <div className="flex gap-4 p-1">
                <div className="flex items-center justify-center border-[#414141] bg-[#333333] border-1 rounded-full border w-10 ">
                    <HiLocationMarker />
                </div>
                <div className="flex flex-col w-max text-sm">
                    <h3>Orders database</h3>
                    <span className="text-light text-[#a0a0a0] text-[12px] ">
                        {currentDay}
                    </span>
                </div>
            </div>
            <div className="flex w-full gap-1 justify-end">
                <div className="flex items-center justify-between gap-1">
                    <WarningIcon />
                    <span className="text-white pr-8 text-[12px]">
                        Some random text goes here
                    </span>
                </div>
                <div className="flex items-center justify-center border-[#414141] border-1 rounded-full  w-[53px] ">
                    <ListBulletIcon />
                </div>
                <CustomButton
                    label="Download report"
                    backgroundColor=" transparent"
                    border="1px solid #414141"
                    color="white"
                />
                <CustomButton
                    label="Create shipment"
                    backgroundColor="orange"
                    color="black"
                />
            </div>
        </div>
    );
};

export default Banner;