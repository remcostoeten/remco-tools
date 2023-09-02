'use client';
import { useState } from 'react';

export function useMouseHover() {
    const [cursorVariant, setCursorVariant] = useState<string>('default');

    const textEnter = () => setCursorVariant('text');
    const textLeave = () => setCursorVariant('default');

    return { cursorVariant, textEnter, textLeave };
}
