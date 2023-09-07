'use client';
import React, { useEffect, useRef } from 'react';
import { FaArrowUp, FaPlay } from 'react-icons/fa';

export default function Home() {
  const trailer = useRef(null);
  const trailerIcon = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const interactable = e.target.closest(".grow");
      const interacting = interactable !== null;

      animateTrailer(e, interacting);
      trailer.current.dataset.type = interacting ? interactable.dataset.type : "";

      if (interacting) {
        trailerIcon.current.className = getTrailerClass(interactable.dataset.type);
      }
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

    const getTrailerClass = type => {
      switch (type) {
        case "video":
          return <FaPlay/>;
        default:
          return <FaArrowUp />;
      }
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

      <div
        className="interactable"
        data-type="link"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1657739774592-14c8f97eaece?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60)' }}
      >
      </div>

      <div
        className="interactable grow"
        data-type="video"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1657779582398-a13b5896ff19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60)' }}
      >
      </div>
    </div>
  );
}
