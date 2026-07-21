"use client";

import { useEffect, useState } from "react";

const particles = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${(i * 13) % 100}%`,
  delay: `${(i * 0.15).toFixed(2)}s`,
  duration: `${5 + (i % 4)}s`,
}));

export default function IntroScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  if (hide) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black overflow-hidden flex items-center justify-center">

      {/* Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-yellow-400/20 blur-[180px]" />

      {/* Gold Particles */}
      {particles.map((particle) => (
        <span
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            animationDelay: particle.delay,
            animationDuration: particle.duration,
          }}
        />
      ))}

      {/* Left Curtain */}
      <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-red-950 via-red-900 to-red-800 animate-leftCurtain shadow-2xl" />

      {/* Right Curtain */}
      <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-red-950 via-red-900 to-red-800 animate-rightCurtain shadow-2xl" />

      {/* Center Content */}
      <div className="relative z-20 text-center px-6">

        <p className="text-yellow-400 uppercase tracking-[10px] mb-5 text-lg">
          Welcome To
        </p>

        <h1 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-[0_0_25px_gold]">
          Wedding Album India
        </h1>

        <div className="w-32 h-[2px] bg-yellow-400 mx-auto my-8"></div>

        <p className="text-gray-300 text-xl italic">
          Every Memory Deserves Forever
        </p>

      </div>

    </div>
  );
}