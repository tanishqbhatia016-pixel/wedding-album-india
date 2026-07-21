"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!glowRef.current) return;

      glowRef.current.style.transform = `translate(${e.clientX - 200}px, ${
        e.clientY - 200
      }px)`;
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        ref={glowRef}
        className="absolute h-[400px] w-[400px] rounded-full bg-yellow-400/15 blur-[140px] transition-transform duration-150 ease-out"
      />
    </div>
  );
}