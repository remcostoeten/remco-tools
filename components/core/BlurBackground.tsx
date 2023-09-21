'use client';
 import { useEffect, useRef } from 'react';

 export default function ParallaxEffect() {
   const parallaxRef = useRef<HTMLDivElement | null>(null);
 
   useEffect(() => {
     const parallaxContainer = parallaxRef.current;
 
     const handleScroll = () => {
       if (parallaxContainer) {
         const scrollY = window.scrollY;
         const parallaxOffset = scrollY * 0.5; // Adjust the parallax effect speed as needed
         parallaxContainer.style.transform = `translateY(${parallaxOffset}px)`;
       }
     };
 
     window.addEventListener('scroll', handleScroll);
 
     return () => {
       // Cleanup function to remove the event listener when the component unmounts
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);
 
   return (
    <div className="-z-10 md:top:[-100px]" id="parallax" style={{ position: 'fixed', top: '0', left: '0' }} ref={parallaxRef}>
    <div className="bg-[#1a1a1a] top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25r1em] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#1a1a1a]"></div>
    <div className="bg-[#dbd7fb] left-[-35rem] h-[31.25rem] -bottom-[100px] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#292736]"></div>
  </div>
   );
 }
 