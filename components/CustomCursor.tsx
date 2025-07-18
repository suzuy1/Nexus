
import React, { useState, useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Only run on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
        return;
    }

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      if (cursorDotRef.current && cursorOutlineRef.current) {
        cursorDotRef.current.style.left = `${clientX}px`;
        cursorDotRef.current.style.top = `${clientY}px`;
        
        cursorOutlineRef.current.animate({
            left: `${clientX}px`,
            top: `${clientY}px`
        }, { duration: 500, fill: 'forwards' });
      }
    };
    
    const onMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('[data-cursor-grow]')) {
             if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutlineRef.current.style.backgroundColor = 'rgba(0, 255, 255, 0.1)';
            }
             if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = 'translate(-50%, -50%) scale(0)';
            }
        }
    }
    
    const onMouseOut = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('[data-cursor-grow]')) {
            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutlineRef.current.style.backgroundColor = 'transparent';
            }
            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = 'translate(-50%, -50%) scale(1)';
            }
        }
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDotRef}
        className="hidden md:block fixed top-0 left-0 w-2 h-2 bg-cyan-300 rounded-full pointer-events-none z-[9999] transition-transform duration-200 -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div
        ref={cursorOutlineRef}
        className="hidden md:block fixed top-0 left-0 w-10 h-10 border-2 border-cyan-300 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 opacity-50"
      ></div>
      <style>{`
        @media (hover: hover) and (pointer: fine) {
            body, button, a {
                cursor: none;
            }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
