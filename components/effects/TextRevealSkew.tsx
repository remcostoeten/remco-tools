"use client"

import React, { useState } from "react";
import { motion, Variants } from "framer-motion";

import PageSetting from "@c/showcase/PageSetting";
import AnimatedText from "./AnimatedText";

interface TextData {
  type: string;
  text: string;
}

export default function TextRevealSkew() {
  const [replay, setReplay] = useState<boolean>(true);
  const placeholderText: TextData[] = [
    { type: "heading1", text: "Framer Motion" },
    {
      type: "heading2",
      text: "Animating responsive text!",
    },
  ];

  const container: Variants = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const handleReplay = () => {
    setReplay(!replay);
    setTimeout(() => {
      setReplay(true);
    }, 600);
  };

  return (
    <>
      <PageSetting
        title="Animation Settings"
        settings={[
          {
            id: "replay-animation",
            title: "Replay animation",
            defaultChecked: false,
            onToggle: (_isChecked: boolean) => {
              handleReplay();
            },
            description: "Click to replay the animation",
          },
        ]}
        description="Configure the animation settings"
      />
      <motion.div
        className="reveal-animation"
        initial="hidden"
        animate={replay ? "visible" : "hidden"}
        variants={container}
      >
        <div className="container">
          {placeholderText.map((item: TextData, index: number) => {
            return <AnimatedText {...item} key={index} />;
          })}
        </div>
      </motion.div>
    </>
  );
}