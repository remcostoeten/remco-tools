'use client';
import React, { useEffect, useRef, useState } from "react";
import GreenCursor from "./icons/Cursor/GreenCursor";

const Trailer: React.FC = () => {
  const trailer = useRef<HTMLDivElement>(null);
  const trailerIcon = useRef<HTMLSpanElement>(null);
  const [showSVG, setShowSVG] = useState(false);
  const [showCircle, setShowCircle] = useState(true);
  const [useClientCursor, setUseClientCursor] = useState(true);
  const [isTop2, setIsTop2] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
        const x = e.clientX - (trailer.current?.offsetWidth || 0) / 2;
        const y = e.clientY - (trailer.current?.offsetHeight || 0) / 2;
        
        const interactableElement = document.querySelector('.interactable');
      
        if (interactableElement && interactableElement.contains(e.target as Node)) {
          const scaleValue = 1.5;
          trailer.current?.style.setProperty('transform', `translate(${x}px, ${y}px) scale(${scaleValue})`);
        } else {
          trailer.current?.style.setProperty('transform', `translate(${x}px, ${y}px)`);
        }
      };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [useClientCursor]);

  useEffect(() => {
    document.body.classList.toggle("no-cursor", showSVG);
    setShowCircle(!showSVG);
  }, [showSVG]);

  return (
    <div ref={trailer} id="trailer" className={`cursor${isTop2 ? " top-2" : ""}`}>
      {showCircle && !showSVG && <div className="cursor-trailer"></div>}
      <i id="trailerIcon" className="fa-solid fa-arrow-up-right">
        {showSVG && useClientCursor && <GreenCursor />}
      </i>
    </div>
  );
};

export default Trailer;
