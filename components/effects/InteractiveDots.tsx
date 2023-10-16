'use client';
import React, { useEffect, useState, useRef } from 'react';

interface InteractiveDotsProps {
    showGradient?: boolean;
    size?: number;
    dotSize?: number;
    dotColor?: string;
}


export default function InteractiveDots({ size = 1, dotSize = 75, dotColor = "white" }: InteractiveDotsProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (canvasRef.current) {
            const grid = new DotGrid(canvasRef.current);
            grid.init();
        }
    }, []);

    class DotGrid {
        canvasElement: HTMLCanvasElement;
        dpr: number;
        drawable: DOMRect;
        canvasWidth: number;
        canvasHeight: number;
        mouseX: number;
        mouseY: number;
        canvas: CanvasRenderingContext2D;

        constructor(canvasElement: HTMLCanvasElement) {
            this.canvasElement = canvasElement;
            this.dpr = window.devicePixelRatio || 1;
        }

        setupCanvas() {
            this.drawable = this.canvasElement.getBoundingClientRect();
            this.canvasWidth = this.drawable.width * this.dpr;
            this.canvasHeight = this.drawable.height * this.dpr;
            this.canvasElement.width = this.canvasWidth;
            this.canvasElement.height = this.canvasHeight;
            this.mouseX = 0;
            this.mouseY = 0;
            this.canvas = this.canvasElement.getContext("2d")!;
            this.canvas.scale(this.dpr, this.dpr);
        }

        onMouseUpdate(e: MouseEvent) {
            this.mouseX = e.pageX - this.drawable.left;
            this.mouseY = e.pageY - this.drawable.top;

            window.requestAnimationFrame(this.draw.bind(this));
        }

        init() {
            this.setupCanvas();
            window.requestAnimationFrame(this.draw.bind(this));
            document.body.addEventListener(
                "mousemove",
                this.onMouseUpdate.bind(this),
                false
            );
        }

        draw() {
            this.canvas.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            this.drawDots();
        }

        drawDots() {
            for (var i = 2; i < this.canvasWidth / this.dpr / dotSize - 1; i++) {
                for (var j = 2; j < this.canvasHeight / this.dpr / dotSize - 1; j++) {
                    let x = i * dotSize;
                    let y = j * dotSize;
                    let dist = this.pythag(x, y, this.mouseX, this.mouseY);
                    this.canvas.beginPath();
                    this.canvas.arc(
                        x + (x - this.mouseX) / dist * dotSize,
                        y + (y - this.mouseY) / dist * dotSize,
                        size,
                        size,
                        Math.PI,
                        true
                    );
                    this.canvas.fillStyle = dotColor;
                    this.canvas.fill();
                }
            }
        }

        pythag(ellipseX: number, ellipseY: number, mouseX: number, mouseY: number) {
            let x = mouseX;
            let y = mouseY;

            if (isNaN(x)) {
                return 1;
            } else {
                let leg1 = Math.abs(x - ellipseX);
                let leg2 = Math.abs(y - ellipseY);
                let pyth = Math.pow(leg1, 2) + Math.pow(leg2, 2);
                return Math.sqrt(pyth);
            }
        }
    }

    return (
        <>
            <canvas id="sketch" ref={canvasRef}></canvas>
        </>
    )
}

