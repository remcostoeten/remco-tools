'use client';
import React from "react";
import { motion } from "framer-motion";
import { IntroWork } from "@/config/data";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 500,
            damping: 90,
        },
    },
};



export default function IntroBlock() {
    return (
        <div className="container h-[627px]">
            <div className="mt-96">
                <motion.div
                    className="grid grid-cols-7 grid-rows-5 gap-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div
                        className="rounded-card bg-grid col-span-5 row-span-3 col-start-3 row-start-3 h-[420px] block-1"
                        variants={childVariants}
                    >

                    </motion.div>
                    <motion.div
                        className="rounded-card bg-grid col-span-2 row-span-2 col-start-3 row-start-1"
                        variants={childVariants}
                    >
                        16
                    </motion.div>
                    <motion.div
                        className="rounded-card bg-grid col-span-3 row-span-2 col-start-5 row-start-1"
                        variants={childVariants}
                    >
                        17
                    </motion.div>
                    <motion.div
                        className="rounded-card bg-grid col-span-2 row-span-3 col-start-1 row-start-1"
                        variants={childVariants}
                    >
                        {
                            IntroWork.map((job) => {
                                return (
                                    <>
                                        <div className="rounded-card bg-card-inner w-full p-card-inner flex flex-col">
                                            <div className="flex gap-m">
                                                <time dateTime={job.date}>{job.date}</time>
                                                <div className="div">
                                                    <span>{job.title}</span>
                                                    <span>{job.description}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })
                        }

                    </motion.div>
                    <motion.div
                        className="rounded-card bg-grid col-span-2 row-span-2 row-start-4"
                        variants={childVariants}
                    >
                        19
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
}

{
    IntroWork.map((job) => {
        return (
            <>
                <div className="rounded-card bg-card-inner w-full p-card-inner flex flex-col">
                    <div className="flex gap-m">
                        <time dateTime={job.date}>{job.date}</time>
                        <div className="div">
                            <span>{job.title}</span>
                            <span>{job.description}</span>
                        </div>
                    </div>
                </div>
            </>
        );
    })
}