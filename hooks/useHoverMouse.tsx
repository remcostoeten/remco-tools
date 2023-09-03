'use client';
import { useEffect } from 'react';

const useHandleMouseMove = (className: string) => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      for (const card of document.getElementsByClassName(className)) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [className]);
};

export default useHandleMouseMove;