'use client';
import React, { useState, useEffect, useRef } from "react";
import styles from "./styles/abstract.module.scss";

function useLoggedState(initialValue) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        console.log(`State changed: ${JSON.stringify(value)}`);
    }, [value]);

    return [value, setValue];
}

export default function Video() {
    const [videoNames, setVideoNames] = useLoggedState(["pexels-mart-production-7565985 (1080p)", "3d", "cubes"]);
    const [currentVideoIndex, setCurrentVideoIndex] = useLoggedState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const newIndex = Math.floor(Math.random() * videoNames.length);
            setCurrentVideoIndex(newIndex);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [videoNames, setCurrentVideoIndex]);

    const currentVideoName = videoNames[currentVideoIndex];

    return (
        <div className="flex flex-col">
            <video
                className={styles.video}
                src={`/videos/${currentVideoName}.mp4`}
                autoPlay
                ref={videoRef}
            />
            <sub className={styles.subtitle}>This video has absolutely nothing to do with my site.</sub>
        </div>
    );
}