"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function LogoIntro() {
  const [visible, setVisible] = useState(true);
  const [showText, setShowText] = useState(false);
useEffect(() => {
  const music = new Audio("/music/wedding.mp3");

  music.volume = 0.25;
  music.loop = true;

  const textTimer = setTimeout(() => {
    setShowText(true);
  }, 1200);

  // Start soft music AFTER intro finishes (5 seconds)
  const musicTimer = setTimeout(() => {
    music.play().catch(() => {
      console.log("Autoplay blocked");
    });
  }, 5000);

  const hideTimer = setTimeout(() => {
    setVisible(false);
  }, 5000);

  return () => {
    clearTimeout(textTimer);
    clearTimeout(musicTimer);
    clearTimeout(hideTimer);
  };
}, []);
  

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black">

      {/* Golden Background Glow */}

      <div className="absolute w-[1200px] h-[1200px] rounded-full bg-yellow-500/10 blur-[180px]" />

      {/* Vignette */}

      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      {/* Animated Gold Sweep */}

      <div className="absolute left-[-40%] top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent animate-[shine_3s_linear_infinite]" />

      {/* Main Content */}

      <div className="relative z-10 flex flex-col items-center">

        <div className="animate-[pulse_4s_ease-in-out_infinite]">

          <Image
            src="/logo/logo.png.png"
            alt="Wedding Album India"
            width={320}
            height={320}
            priority
            className="drop-shadow-[0_0_60px_rgba(255,215,0,0.6)]"
          />

        </div>

        <div
          className={`mt-10 transition-all duration-1000 ${
            showText
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >

          <h1 className="text-5xl md:text-7xl font-black text-yellow-400 text-center">

            Wedding Album India

          </h1>

          <div className="mx-auto mt-6 h-[2px] w-40 rounded-full bg-yellow-400"></div>

          <p className="mt-6 text-center text-lg md:text-xl tracking-[8px] uppercase text-gray-300">

            Premium Luxury Albums

          </p>

        </div>

      </div>

    </div>
  );
}