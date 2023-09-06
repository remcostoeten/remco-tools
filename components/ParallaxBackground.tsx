'use client';
import { useEffect } from 'react';

const GlowEffect: React.FC = () => {
  useEffect(() => {
    const blob = document.getElementById('blob');

    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;

      blob?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: 'forwards' }
      );
    };

    window.onpointermove = handlePointerMove;

    return () => {
      // Cleanup function to remove the event listener when the component unmounts
      window.onpointermove = null;
    };
  }, []);

  return (
    <div>
      <div id="blob"></div>
      <div id="blur"></div>
    </div>
  );
};

export default GlowEffect;
