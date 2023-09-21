import React, { useState, useEffect } from 'react';

/**
 * useMousePosition Hook
 *
 * A custom React Hook that tracks the mouse position on the screen.
 *
 * @returns The current mouse position as an object with `x` and `y` coordinates.
 */
const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        /**
         * Event handler for the 'mousemove' event.
         * Updates the mouse position in the state.
         *
         * @param event The MouseEvent object.
         */
        const handleMouseMove = (event: MouseEvent) => {
            setPosition({
                x: event.clientX,
                y: event.clientY,
            });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return position;
};

/**
 * Example usage scenario 1:
 *
 * import useMousePosition from './useMousePosition';
 *
 * function MyComponent() {
 *   const { x, y } = useMousePosition();
 *
 *   return (
 *     <div>
 *       <p>Mouse position: {x}, {y}</p>
 *     </div>
 *   );
 * }
 *
 * Example usage scenario 2
 *
 * import useMousePosition from './useMousePosition';
 *
 * function FollowCursor() {
 *   const { x, y } = useMousePosition();
 *
 *   return (
 *     <div className="relative">
 *       <div
 *         className="absolute w-4 h-4 bg-red-500 rounded-full"
 *         style={{ left: x, top: y }}
 *       ></div>
 *     </div>
 *   );
 * }
 *
 * Example usage scenario 3:
 *
 * import useMousePosition from './useMousePosition';
 *
 * function ParallaxEffect() {
 *   const { x, y } = useMousePosition();
 *
 *   return (
 *     <div
 *       className="w-screen h-screen bg-black"
 *       style={{ transform: `translate(${x / 10}px, ${y / 10}px)` }}
 *     >
 *       <div className="w-[500px] h-[500px] flex flex-col gap-4 justify-normalcenter bg-slate-400">
 *         <h1>Parallax Effect</h1>
 *         <p>Move your mouse to see the effect!</p>
 *         <button>Click Me</button>
 *       </div>
 *     </div>
 *   );
 * }
 */

export default useMousePosition;
