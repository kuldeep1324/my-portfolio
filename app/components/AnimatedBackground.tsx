"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  alpha: number;
  twinkle: number;
  depth: number;
};

function createStars(width: number, height: number): Star[] {
  const area = width * height;
  const count = Math.max(70, Math.min(170, Math.floor(area / 13000)));

  return Array.from({ length: count }, () => {
    const depth = Math.random() * 1 + 0.3;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 2 + 0.85,
      vx: (Math.random() - 0.5) * 0.075,
      vy: (Math.random() - 0.5) * 0.075,
      alpha: Math.random() * 0.42 + 0.24,
      twinkle: Math.random() * 0.02 + 0.004,
      depth,
    };
  });
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 28, damping: 24, mass: 0.9 });
  const springY = useSpring(mouseY, { stiffness: 28, damping: 24, mass: 0.9 });

  const blobX = useTransform(springX, (value) => value * 26);
  const blobY = useTransform(springY, (value) => value * 18);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let frameId = 0;
    let isVisible = true;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = createStars(width, height);
    };

    const onVisibilityChange = () => {
      isVisible = !document.hidden;
      if (isVisible && !frameId && !reducedMotion) {
        frameId = window.requestAnimationFrame(render);
      }
    };

    const renderStatic = () => {
      context.clearRect(0, 0, width, height);
      for (const star of stars) {
        context.beginPath();
        context.fillStyle = `rgba(120, 170, 255, ${star.alpha * 0.24})`;
        context.arc(star.x, star.y, star.r * 2.6, 0, Math.PI * 2);
        context.fill();

        context.beginPath();
        context.fillStyle = `rgba(216, 232, 255, ${star.alpha * 0.9})`;
        context.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        context.fill();
      }
    };

    const render = () => {
      frameId = 0;
      if (!isVisible) return;

      context.clearRect(0, 0, width, height);

      const parallaxX = springX.get() * 12;
      const parallaxY = springY.get() * 8;

      for (const star of stars) {
        star.x += star.vx * star.depth;
        star.y += star.vy * star.depth;
        star.alpha += (Math.random() - 0.5) * star.twinkle;

        if (star.alpha < 0.14) star.alpha = 0.14;
        if (star.alpha > 0.72) star.alpha = 0.72;

        if (star.x < -4) star.x = width + 4;
        if (star.x > width + 4) star.x = -4;
        if (star.y < -4) star.y = height + 4;
        if (star.y > height + 4) star.y = -4;

        const drawX = star.x + parallaxX * star.depth * 0.1;
        const drawY = star.y + parallaxY * star.depth * 0.1;

        context.beginPath();
        context.fillStyle = `rgba(108, 164, 255, ${star.alpha * 0.22})`;
        context.arc(drawX, drawY, star.r * 2.8, 0, Math.PI * 2);
        context.fill();

        context.beginPath();
        context.fillStyle = `rgba(214, 231, 255, ${star.alpha})`;
        context.arc(drawX, drawY, star.r, 0, Math.PI * 2);
        context.fill();
      }

      frameId = window.requestAnimationFrame(render);
    };

    resize();

    if (reducedMotion) {
      renderStatic();
    } else {
      frameId = window.requestAnimationFrame(render);
    }

    const onResize = () => resize();
    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      if (frameId) window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, [springX, springY]);

  useEffect(() => {
    const onMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      mouseX.set(x);
      mouseY.set(y);
    };

    const onMouseLeave = () => {
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseout", onMouseLeave, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseout", onMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-90" />

      <motion.div
        style={{ x: blobX, y: blobY }}
        className="absolute left-[8%] top-[12%] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(115,146,255,0.24)_0%,rgba(115,146,255,0.06)_55%,transparent_75%)] blur-2xl"
        animate={{ y: [0, -18, 0], x: [0, 10, 0], rotate: [0, 9, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ x: useTransform(blobX, (v) => -v * 0.72), y: useTransform(blobY, (v) => -v * 0.68) }}
        className="absolute right-[10%] top-[26%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(144,96,255,0.2)_0%,rgba(102,89,255,0.08)_58%,transparent_75%)] blur-3xl"
        animate={{ y: [0, 22, 0], x: [0, -12, 0], rotate: [0, -12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={{ x: useTransform(blobX, (v) => v * 0.52), y: useTransform(blobY, (v) => v * 0.42) }}
        className="absolute bottom-[8%] left-[26%] h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(89,212,255,0.18)_0%,rgba(78,183,235,0.07)_56%,transparent_76%)] blur-3xl"
        animate={{ y: [0, -16, 0], x: [0, 8, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,20,0.3)_0%,rgba(5,8,20,0.62)_52%,rgba(5,8,20,0.8)_100%)]" />
    </div>
  );
}
