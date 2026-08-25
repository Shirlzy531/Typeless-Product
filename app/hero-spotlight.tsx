'use client';

import { useEffect, useRef } from 'react';

export default function HeroSpotlight() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    const hero = glow?.parentElement;
    const canFollowPointer = window.matchMedia('(pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!glow || !hero || !canFollowPointer || reduceMotion) return;

    let frame = 0;
    let currentX = hero.clientWidth * 0.5;
    let currentY = Math.min(hero.clientHeight * 0.22, 330);
    let targetX = currentX;
    let targetY = currentY;
    let pointerActive = false;

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      pointerActive = true;
      targetX = Math.max(0, Math.min(bounds.width, event.clientX - bounds.left));
      targetY = Math.max(0, Math.min(bounds.height, event.clientY - bounds.top));
      glow.dataset.active = 'true';
    };

    const handlePointerLeave = () => {
      pointerActive = false;
      glow.dataset.active = 'false';
    };

    const animate = (time: number) => {
      if (!pointerActive) {
        targetX = hero.clientWidth * (0.5 + Math.sin(time / 2600) * 0.07);
        targetY = Math.min(hero.clientHeight * 0.22, 330) + Math.cos(time / 3100) * 32;
      }

      currentX += (targetX - currentX) * 0.075;
      currentY += (targetY - currentY) * 0.075;
      glow.style.left = `${currentX}px`;
      glow.style.top = `${currentY}px`;
      frame = window.requestAnimationFrame(animate);
    };

    hero.addEventListener('pointermove', handlePointerMove);
    hero.addEventListener('pointerleave', handlePointerLeave);
    frame = window.requestAnimationFrame(animate);

    return () => {
      hero.removeEventListener('pointermove', handlePointerMove);
      hero.removeEventListener('pointerleave', handlePointerLeave);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={glowRef} className="hero-spotlight" data-active="false" aria-hidden="true" />;
}
