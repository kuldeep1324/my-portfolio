"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useMemo, useState, type MouseEvent } from "react";

const typewriterWords = ["Full Stack Developer", "Next.js Developer", "AI Integrations"];

function useTypewriter(words: string[], typeSpeed = 65, deleteSpeed = 40, holdMs = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentWord.slice(0, text.length + 1);
          setText(next);

          if (next === currentWord) {
            setTimeout(() => setIsDeleting(true), holdMs);
          }
        } else {
          const next = currentWord.slice(0, Math.max(0, text.length - 1));
          setText(next);

          if (next.length === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deleteSpeed : typeSpeed,
    );

    return () => clearTimeout(timeout);
  }, [deleteSpeed, holdMs, isDeleting, text, typeSpeed, wordIndex, words]);

  return text;
}

export default function HeroSection() {
  const typedKeyword = useTypewriter(typewriterWords);
  const [hovered, setHovered] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 20, mass: 0.7 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 20, mass: 0.7 });

  const particles = useMemo(
    () =>
      Array.from({ length: 14 }, (_, idx) => ({
        id: idx,
        size: 2 + (idx % 3),
        left: `${6 + ((idx * 7) % 88)}%`,
        top: `${10 + ((idx * 13) % 80)}%`,
        delay: (idx % 5) * 0.45,
      })),
    [],
  );

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;
    const maxTilt = 8;

    rotateY.set(((x - centerX) / centerX) * maxTilt);
    rotateX.set(-((y - centerY) / centerY) * maxTilt);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setHovered(false);
  };

  return (
    <section id="home" className="relative overflow-hidden pt-24 text-[#e7efff]">
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(110%_65%_at_50%_0%,rgba(88,119,255,0.34),transparent_58%),radial-gradient(55%_45%_at_80%_12%,rgba(126,91,255,0.24),transparent_65%),radial-gradient(45%_35%_at_12%_18%,rgba(81,155,255,0.2),transparent_70%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,10,24,0.2)_0%,rgba(7,10,24,0.72)_58%,rgba(7,10,24,0.92)_100%)]" />

      <div className="pointer-events-none absolute inset-0 -z-10">
        {particles.map((particle) => (
          <motion.span
            key={particle.id}
            className="absolute rounded-full bg-[#b9ccff]/40"
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
            }}
            animate={{ opacity: [0.12, 0.4, 0.12], y: [0, -8, 0] }}
            transition={{ duration: 3.2, repeat: Infinity, delay: particle.delay, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-14 pt-10 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        <div className="relative">
          <div className="pointer-events-none absolute -left-6 top-10 h-44 w-44 rounded-full bg-[#5d8dff]/24 blur-3xl" />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.48, ease: "easeOut" }}
            className="inline-flex rounded-full border border-[#a5c1ff]/35 bg-[#3d67dd]/22 px-4 py-1.5 text-sm font-semibold text-[#d7e5ff]"
          >
            Available for freelance and full-time roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
            className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#f0f5ff] md:text-6xl"
          >
            Building scalable and modern web experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16, ease: "easeOut" }}
            className="mt-5 min-h-8 text-lg font-semibold text-[#9cc0ff]"
            aria-live="polite"
          >
            {typedKeyword}
            <span className="ml-1 inline-block h-[1.05em] w-[2px] animate-pulse bg-[#d8e7ff] align-[-0.08em]" />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24, ease: "easeOut" }}
            className="mt-4 max-w-xl text-base leading-relaxed text-[#c7d9ff]/84 md:text-lg"
          >
            I design and build high-performance products with elegant UI, reliable backend systems, and practical AI features.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.32, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center justify-center rounded-xl border border-[#98b8ff]/48 bg-[linear-gradient(120deg,#4b7dff_0%,#6a63ff_45%,#4b7dff_100%)] bg-[length:180%_180%] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(73,108,255,0.38)] transition-all duration-300 hover:scale-[1.03] hover:bg-[position:100%_0] hover:shadow-[0_0_28px_rgba(96,128,255,0.65)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xl border border-[#afc8ff]/34 bg-[#0d1d3f]/78 px-6 py-3 text-sm font-semibold text-[#dce9ff] transition-all duration-300 hover:scale-[1.03] hover:border-[#bfd5ff]/65 hover:bg-[#132957]/90 hover:shadow-[0_0_22px_rgba(132,166,255,0.46)]"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.58, delay: 0.26, ease: "easeOut" }}
          className="mx-auto w-full max-w-sm"
        >
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.article
              className="relative overflow-hidden rounded-[1.7rem] border border-[#b2c8ff]/22 bg-[#0a1733]/64 p-6 shadow-[0_26px_65px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              style={{ rotateX: springX, rotateY: springY, transformPerspective: 1200 }}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[#6b8bff]/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-[#7f62ff]/22 blur-3xl" />

              <div className="relative mx-auto w-fit">
                <motion.div
                  className="absolute -inset-2 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 180deg at 50% 50%, rgba(142,181,255,0.96), rgba(120,89,255,0.9), rgba(107,196,255,0.86), rgba(142,181,255,0.96))",
                    filter: "blur(0.3px)",
                  }}
                  animate={{ rotate: 360, scale: hovered ? 1.05 : 1 }}
                  transition={{ rotate: { duration: 7, repeat: Infinity, ease: "linear" }, scale: { duration: 0.35 } }}
                />

                <div className="relative h-32 w-32 overflow-hidden rounded-full border border-[#d6e4ff]/34 bg-[#152958]">
                  <Image
                    src="/user.png"
                    alt="Kuldeep profile"
                    fill
                    priority
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              </div>

              <div className="relative mt-5 text-center">
                <h2 className="text-2xl font-bold tracking-tight text-[#edf4ff]">Kuldeep</h2>
                <p className="mt-1 text-sm text-[#c6daff]/85">Full Stack Developer</p>

                <ul className="mt-5 flex flex-wrap justify-center gap-2">
                  {[
                    "Next.js",
                    "TypeScript",
                    "AI Apps",
                  ].map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-[#a6c5ff]/24 bg-[#183667]/52 px-3 py-1 text-xs font-medium text-[#d5e6ff]"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: [0.45, 1, 0.45], y: [0, 6, 0] }}
        transition={{ duration: 2.3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="mx-auto mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#9ebfff]/32 bg-[#0b193a]/64 text-[#d6e5ff]"
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </motion.a>
    </section>
  );
}
