'use client';
import React, { useEffect, useState } from "react";
import { db } from "@/utils/firebase";
import MiniSpinner from "../../effects/MiniSpinner";
import { collection, onSnapshot, QueryDocumentSnapshot } from "firebase/firestore";
import { ThemeBlockProps } from "@/utils/types";
import Block from "../ThemeBlock";
import { motion } from "framer-motion";
import HoverCard from "../../effects/HoverCard";
import { Card } from "../../ui/card";
import MoneyCardSkeleton from "../LoaderBlock";
import CountingNumber from "@/components/effects/CountingNumber";

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

interface Saving {
    id: string;
    name: string;
    savingAmount: number;
}

type MoneyCardProps = {
    type?: "income" | "expense" | "saving" | "totals";
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
    useChildren,
    children,
}: MoneyCardProps) {
    const [total, setTotal] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [totalItems, setTotalItems] = useState<number>(0);

    useEffect(() => {
        const collectionName =
            type === "income" ? "incomes" : type === "expense" ? "expenses" : "savings";
        const dataCollection = collection(db, collectionName);

        const unsubscribe = onSnapshot(dataCollection, (snapshot) => {
            let totalAmount = 0;
            snapshot.forEach((doc: QueryDocumentSnapshot<Income | Expense>) => {
                const data = doc.data();
                if (type === "income" && "incomeAmount" in data) {
                    totalAmount += data.incomeAmount as number;
                } else if (type === "expense" && "expenseAmount" in data) {
                    totalAmount += data.expenseAmount as number;
                } else if (type === "saving" && "savingAmount" in data) {
                    totalAmount += data.savingAmount as number;
                } else {
                    console.error(`Invalid data type for ${type} card:`, data);
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
        return <MoneyCardSkeleton />;
    }

    const blockProps: ThemeBlockProps = {
        flexDir: "col",
        borderRadius: "rounded-lg",
        gap: "gap-2",
        width: "",
        title: "",
    };

    if (hoverCard) {
        return (
            <Card>
                <HoverCard
                    cardType={type === "income" ? "card--income" : "card--expense"}
                >
                    <Block {...blockProps}>
                        <Block
                            {...blockProps}
                            title={type === "income" ? "Income" : type === "expense" ? "Expense" : "Saving"}
                        >
                            <span className="6r4g1!-3xl font-medium tracking-wider">
                                €{total},-
                            </span>
                            <div className="flex gap-1"></div>
                            <p>Total of {totalItems} {type}</p>
                        </Block>
                    </Block>
                </HoverCard>
            </Card>
        );
    }

    if (useChildren) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2 } }}
                className={
                    small
                        ? "w-full rounded-xl border text-card-foreground shadow "
                        : "rounded-xl border text-card-foreground shadow  w-full"
                }
            >
                <Block {...blockProps}>{children}</Block>
            </motion.div>
        );
    } else {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 2 } }}
            >
                <Block
                    {...blockProps}
                    title={
                        type === "income"
                            ? "Income"
                            : type === "expense"
                                ? "Expense"
                                : "Saving"
                    }
                >
                    <span className="text- sm:text-xl font-medium tracking-wider">
                        €<CountingNumber start={0} end={total} duration={1} className="6r4g1!-3xl font-medium tracking-wider" />
                        ,-
                    </span>
                    <div className="flex gap-1"></div>
                    <p>Total of {totalItems} {type}</p>
                </Block>
            </motion.div>
        );
    }
}