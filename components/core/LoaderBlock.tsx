import React from "react";
import { ThemeBlockProps } from "@/utils/types";

type MoneyCardSkeletonProps = {
    small?: boolean;
    blockClassName?: string;
    useChildren?: boolean;
};

export const LinesSkeleton = () => {
    return (
        <div className="barsSkeleton flex opacity-20">

            <div className="card1 !m-0 w-1/3">
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
            <div className="card1 !m-0 w-1/3">
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
            <div className="card1 !m-0 w-1/3">
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
            <div className="card1 !m-0">
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
    )
}

export const SingleSkeleton = () => {
    return (
        <div className="barsSkeleton  singleSkeleton flex opacity-20">

            <div className="card1 flex flex-col gap-2 !m-0 w-1/3">

                <div className="gradient element3">
                </div>
                <div className="gradient element3">
                </div>
                <div className="gradient element3">
                </div>
            </div>
        </div>
    )
}

export const BarsSkeleton = () => {
    return (
        <div className="barsSkeleton opacity-20">
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



    const AvatarTitlteDescBtnSkeleton = () => {
        return (
            <div className="avatarTitleDescBtnSkeleton opacity-20">
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