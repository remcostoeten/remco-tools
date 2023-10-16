'use client';
import { useEffect } from 'react';
import { useSpring, useMotionTemplate } from 'framer-motion';

export function useMouseHoverEffect() {
  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    // @ts-ignore
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  useEffect(() => {
    const elements = document.querySelectorAll('.mouse-hover-effect');

    function addMouseHoverEffect(element: HTMLElement) {
      element.addEventListener('mousemove', handleMouseMove);
      element.style.setProperty(
        'mask-image',
        // @ts-ignore
        useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`
      );
      element.style.setProperty(
        '-webkit-mask-image',
        // @ts-ignore
        useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`
      );
    }

    function removeMouseHoverEffect(element: HTMLElement) {
      element.removeEventListener('mousemove', handleMouseMove);
      element.style.removeProperty('mask-image');
      element.style.removeProperty('-webkit-mask-image');
    }

    elements.forEach((element) => {
      addMouseHoverEffect(element as any);
      return () => removeMouseHoverEffect(element as any);
    });
  }, [mouseX, mouseY]);

  return { className: 'mouse-hover-effect' };
}
