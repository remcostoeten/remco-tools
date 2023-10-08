import { motion } from "framer-motion";
import React from "react";
import { ThemeBlockProps } from "@/utils/types";
import Block from "../core/ThemeBlock";

type MoneyCardSkeletonProps = {
    small?: boolean;
    blockClassName?: string;
    useChildren?: boolean;
};

export default function MoneyCardSkeleton({ small, blockClassName, useChildren }: MoneyCardSkeletonProps) {
    const blockProps: ThemeBlockProps = {
        flexDir: "col",
        borderRadius: "rounded-lg",
        gap: "gap-2",
        width: "",
        title: "",
        className: blockClassName,
    };

    if (useChildren) {
        return (
            <motion.div
                initial={{ opacity: 0,  }}
                animate={{ opacity: 1,  transition: { duration: 2 } }}
                className={small ? "w-2/12" : "w-5/12"}
            >
                <Block {...blockProps}></Block>
            </motion.div>
        );
    } else {
        return (
            <motion.div
            initial={{ opacity: 0,  }}
            animate={{ opacity: 1,  transition: { duration: 2 } }}
                className={small ? "w-2/12" : "w-5/12"}
            >
                <Block {...blockProps}></Block>
            </motion.div>
        );
    }
}
