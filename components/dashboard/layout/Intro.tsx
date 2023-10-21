'use client';
import React, { ReactElement, ReactNode, Suspense, useEffect, useState } from "react";
import { auth } from "@/utils/firebase";
import { BanIcon, CodeIcon } from "@heroicons/react/solid";
import { ArrowDownIcon, ArrowUpIcon, MixIcon } from "@radix-ui/react-icons";
import CountingNumber from "@/components/effects/CountingNumber";
import Image from "next/image";
type IntroProps = {
    icon?: React.ReactNode;
    percentage?: string | number | any;
    amount?: string | number | any;
    title?: string;
    percentageColor?: "red" | "green" | "orange";
};

const classRenames = {
    red: "text-red-400",
    green: "text-green-400",
    orange: "text-orange-400",
};

const UspItem = ({
    icon,
    percentage,
    amount,
    title,
    percentageColor,
}: IntroProps) => {
    const percentageClass = percentageColor
        ? classRenames[percentageColor]
        : "text-green-500";
    const arrowIcon =
        percentage && percentage > 0 ? (
            <ArrowUpIcon className="text-green-500 scale-[1.5] rotate-45" />
        ) : (
            <ArrowDownIcon className="text-red-500 scale-[1.5] rotate-45" />
        );
    return (
        <div className="flex gap-3.5 w-4/12 justify-end">
            <span className="bg-dash-grey rounded-3xl w-24 h-24 flex items-center justify-center header-btn">
                {icon}
            </span>
            <div className="flex space-between items-start flex-col justify-between py-1.5 w">
                <h3>{title}</h3>
                <div className="flex space-between items-center gap-[50]">
                    <span className="text-4xl pr-[70px]">
                        <CountingNumber start={amount * 0.8} end={amount} duration={1} />
                    </span>
                    <span className={`${percentageClass} flex items-center`}>
                        <span className={percentageClass}>
                            <CountingNumber start={0} end={Math.abs(percentage)} duration={1} />
                            <span className={percentageClass}>%</span>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default function Intro() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
                setLoading(false);
            } else {
                setUser(null);
                setLoading(false);
            }
        });

        return () => unsubscribe();
    }, []);

    const avatar = user?.photoURL;

    return (
        <>
            <section className="intro pt-[44px]">
                <div className="flex space-between gap-4 relative ">
                    {avatar && (
                        <Image
                            src={avatar}
                            alt="User avatar"
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-full relative"
                        />
                    )}
                </div>
            </section >
            <style jsx>{`
                .user-loading {
                    filter: blur(10px);
                    transition: filter 0.5s ease-out;
                }
                .user-loading:not(:empty) {
                    filter: blur(0);
                    opacity: 0;
                }
            `}</style>
        </>
    );
}