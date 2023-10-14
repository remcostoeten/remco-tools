'use client'; import { motion } from "framer-motion";
import React from "react";
import { ThemeBlockProps } from "@/utils/types";
import Block from "../core/ThemeBlock";
import MiniSpinner from "../effects/MiniSpinner";
import { Skeleton } from "@mui/material";

type MoneyCardSkeletonProps = {
    small?: boolean;
    blockClassName?: string;
    useChildren?: boolean;
};

export default function MoneyCardSkeleton({
    small,
    blockClassName,
    useChildren,
}: MoneyCardSkeletonProps) {
    const blockProps: ThemeBlockProps = {
        flexDir: "col",
        borderRadius: "rounded-lg",
        gap: "gap-2",
        width: "",
        title: "",
        className: blockClassName,
    };

    const BarsSkeleton = () => {
        return (
            <div className="barsSkeleton">
                <div className="container">

                    <div className="card1">
                        <div className="gradient element1">
                        </div>
                        <div className="gradient element2">
                        </div>
                        <div className="gradient element3">
                        </div>
                        <div className="gradient element4">
                        </div>
                        <div className="gradient element5">

                        </div>
                    </div>

                    <div className="card2">
                        <div className="gradient element1">
                        </div>
                        <div className="gradient element2">
                        </div>
                        <div className="gradient element3">
                        </div>
                        <div className="gradient element4">
                        </div>
                        <div className="gradient element5">
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const AvatarTitlteDescBtnSkeleton = () => {
        return (
            <div className="avatarTitleDescBtnSkeleton">
                <div className="card " >
                    <div className="header">
                        <div className="img"></div>
                        <div className="details">
                            <span className="name"></span>
                            <span className="about"></span>
                        </div>
                    </div>
                    <div className="content">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line line-3"></div>
                    </div>
                    <div className="btns">
                        <div className="btn btn-1"></div>
                        <div className="btn btn-2"></div>
                    </div>
                </div>
            </div>
        )
    }



    return (
        <BarsSkeleton />
    );
}