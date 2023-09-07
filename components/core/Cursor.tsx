'use client';
import React, { useEffect, useRef } from 'react';

export default function Trailer() {
  const trailer = useRef(null);
  const trailerIcon = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const interactable = e.target.closest(".grow");
      const interacting = interactable !== null;

      animateTrailer(e, interacting);
      trailer.current.dataset.type = interacting ? interactable.dataset.type : "";
    };

    const animateTrailer = (e, interacting) => {
      const x = e.clientX - trailer.current.offsetWidth / 2,
            y = e.clientY - trailer.current.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 8 : 1})`
      }

      trailer.current.animate(keyframes, {
        duration: 800,
        fill: "forwards"
      });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  return (
    <div>
      <div ref={trailer} id="trailer">
        <i ref={trailerIcon} id="trailer-icon" className="fa-solid fa-arrow-up-right"></i>
      </div>
    </div>
  );
}
