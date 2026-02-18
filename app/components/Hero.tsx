"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.play().catch(() => {});
    }
  }, []);

  return (
    <>
      <div className="absolute inset-0 z-0 bg-stone-800">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="/beach-wedding-hero.mp4"
          className="absolute top-0 left-0 h-full w-full object-cover object-top grayscale"
        />
      </div>
      <div className="absolute inset-0 z-[1] bg-stone-900/40" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-stone-900/50" />
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-4 font-display text-sm uppercase tracking-[0.3em] text-white/90">
          Bespoke Wedding Websites
        </p>
        <h1 className="font-display text-5xl font-medium leading-tight text-white sm:text-6xl md:text-7xl">
          Your love story,{" "}
          <span className="italic text-[var(--accent-light)]">beautifully told</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-white/90">
          We create custom wedding websites that capture your unique style and make planning easier
          for you and your guests.
        </p>
        <a
          href="#contact"
          className="mt-10 inline-block rounded-lg border-2 border-white/80 bg-white/10 px-8 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-stone-800"
        >
          Get in touch
        </a>
      </div>
    </>
  );
}
