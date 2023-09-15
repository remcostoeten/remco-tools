'use client';

import { useEffect } from 'react';

export default function TileGrid() {
    useEffect(() => {
        const elTextGrid = document.querySelector('.text-grid');

        function recalculateDistances(mouseCoords) {
            let containerRect = elTextGrid.getBoundingClientRect();
            let diagonal = Math.hypot(containerRect.width, containerRect.height);
            const squares = Array.from(elTextGrid.children);

            squares.forEach((square: HTMLElement) => {
                const rect = square.getBoundingClientRect();
                const distance = Math.hypot(rect.left + rect.width / 2 - mouseCoords.x, rect.top + rect.height / 2 - mouseCoords.y);
                const normalizedDistance = 1 - distance / diagonal;
                const colorValue = Math.max(Math.pow(normalizedDistance, 3), 0);
                square.style.backgroundColor = `rgba(
          ${255 * colorValue},
          ${255 * (1 - colorValue)},
          ${20 + 40 * colorValue},
          1
        )`;
            });
        }

        document.addEventListener('mousemove', (event) => {
            const { clientX, clientY } = event;
            recalculateDistances({ x: clientX, y: clientY });
        });
    }, []);

    return (
        <div className="text-grid">
            {Array(11)
                .fill(null)
                .map((_, idx) => (
                    <div key={idx} className="square"></div>
                ))}
        </div>
    );
}
