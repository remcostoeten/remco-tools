'use client';
import React, { useEffect, useState } from "react";
import { db } from "@/utils/firebase";
import MiniSpinner from "../effects/MiniSpinner";
import { collection, onSnapshot, QueryDocumentSnapshot } from "firebase/firestore";
import { ThemeBlockProps } from "@/utils/types";
import Block from "../core/ThemeBlock";
import { motion } from "framer-motion";
import HoverCard from "../effects/HoverCard";

interface Income {
    id: string;
    name: string;
    incomeAmount: number;
}

interface Expense {
    id: string;
    name: string;
    expenseAmount: number;
}

type MoneyCardProps = {
    type?: "income" | "expense" | "Saving" |  "Totals";
    small?: boolean;
    blockClassName?: string;
    useChildren?: boolean;
    hoverCard?: boolean;
    children?: React.ReactNode;
};

export default function MoneyCard({
    type,
    small,
    hoverCard,
    blockClassName,
    useChildren,
    children
}: MoneyCardProps) {
    const [total, setTotal] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [totalItems, setTotalItems] = useState<number>(0);

    useEffect(() => {
        const collectionName = type === "income" ? "incomes" : "expenses";
        const dataCollection = collection(db, collectionName);

        const unsubscribe = onSnapshot(dataCollection, (snapshot) => {
            let totalAmount = 0;
            snapshot.forEach((doc: QueryDocumentSnapshot<Income | Expense>) => {
                const data = doc.data();
                if (type === "income" && "incomeAmount" in data) {
                    totalAmount += data.incomeAmount;
                } else if (type === "expense" && "expenseAmount" in data) {
                    totalAmount += data.expenseAmount;
                }
            });
            setTotal(totalAmount);
            setTotalItems(snapshot.size);
            setIsLoading(false);
        });

        return () => {
            unsubscribe();
        };
    }, [type]);

    if (isLoading) {
        return <MiniSpinner />;
    }

    const blockProps: ThemeBlockProps = {
        flexDir: "col",
        borderRadius: "rounded-lg",
        gap: "gap-2",
        width: "",
        title: ""
    };

    if (hoverCard) {
        return (
            <HoverCard cardType={type === 'income' ? 'card--income' : 'card--expense'}>
                <Block {...blockProps}>
                    <Block
                        {...blockProps}
                        title={type === 'income' ? 'Income' : 'Expense'}
                    >
                        <span className="text-5xl font-medium tracking-wider">€{total},-</span>
                        <div className="flex gap-1"></div>
                        <p>Total of {totalItems} {type}</p>
                    </Block>
                </Block>
            </HoverCard>
        );
    }

    if (useChildren) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2 } }}
                className={small ? "sm:w-2/12 w-full " : "sm:w-5/12 w-full"}
            >
                <Block
                    {...blockProps}
                >
                    {children}
                </Block>
            </motion.div>
        );
    } else {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2 } }}
                className={small ? "sm:w-2/12 w-full " : "sm:w-5/12 w-full"}
            >
                <Block
                    {...blockProps}
                    title={type === "income" ? "Income" : "Expense"}
                >
                    <span className="text-5xl font-medium tracking-wider">€{total},-</span>
                    <div className="flex gap-1"></div>
                    <p>Total of {totalItems} {type}</p>
                </Block>
            </motion.div>
        );
    }
}                 