'use client';

import React, { useEffect } from 'react';

const GridBackground = () => {
    useEffect(() => {
        // Create a canvas element for particles
        const particleCanvas = document.createElement('canvas');
        const particleCtx = particleCanvas.getContext('2d');
        particleCanvas.width = window.innerWidth;
        particleCanvas.height = window.innerHeight;

        // Append the particle canvas to the body
        document.body.style.margin = '0';
        document.body.style.overflow = 'hidden';
        document.body.appendChild(particleCanvas);

        // Create a canvas element for the grid
        const gridCanvas = document.createElement('canvas');
        const gridCtx = gridCanvas.getContext('2d');
        gridCanvas.width = window.innerWidth;
        gridCanvas.height = window.innerHeight;

        const gridSize = 200;
        const borderColor = '#000000'; // Border color

        // Draw the grid
        for (let x = 0; x < gridCanvas.width; x += gridSize) {
            for (let y = 0; y < gridCanvas.height; y += gridSize) {
                gridCtx.strokeStyle = borderColor;
                gridCtx.lineWidth = 1;
                gridCtx.strokeRect(x, y, gridSize, gridSize);
            }
        }

        // Append the grid canvas to the body
        document.body.appendChild(gridCanvas);

        // Clean up on unmount
        return () => {
            document.body.style.margin = '';
            document.body.style.overflow = '';
            document.body.removeChild(particleCanvas);
            document.body.removeChild(gridCanvas);
        };
    }, []);

    return <canvas style={{ position: 'fixed', top: '0', left: '0', pointerEvents: 'none' }} width={window.innerWidth} height={window.innerHeight} />;
};

export default GridBackground;
