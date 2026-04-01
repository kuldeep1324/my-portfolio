"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { useMemo, useState, type MouseEvent } from "react";

type ProjectItem = {
  title: string;
  description: string;
  techStack: string[];
  liveDemoUrl: string;
  githubUrl: string;
  image?: string;
  gradient: string;
};

export const sampleProjects: ProjectItem[] = [
  {
    title: "RentHub Platform",
    description: "Rental marketplace with listings, availability, and secure booking flow.",
    techStack: ["Next.js", "React", "MongoDB", "TypeScript"],
    liveDemoUrl: "https://rent-hub-plum.vercel.app/",
    githubUrl: "https://github.com/kuldeep1324",
    gradient:
      "radial-gradient(70% 70% at 80% 0%, rgba(120, 180, 255, 0.55), transparent 65%), linear-gradient(160deg, #112149, #172f67 42%, #0d1733)",
  },
  {
    title: "AI Portfolio Assistant",
    description: "Interactive portfolio assistant with smart prompts and contextual answers.",
    techStack: ["Next.js", "Framer Motion", "OpenAI API", "Tailwind CSS"],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/kuldeep1324",
    gradient:
      "radial-gradient(65% 60% at 15% 5%, rgba(108, 232, 255, 0.45), transparent 70%), linear-gradient(160deg, #083b4f, #0d2f52 45%, #091826)",
  },
  {
    title: "SaaS Analytics Dashboard",
    description: "Real-time product analytics dashboard with role-based access and exports.",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/kuldeep1324",
    gradient:
      "radial-gradient(60% 55% at 85% 15%, rgba(255, 190, 120, 0.5), transparent 68%), linear-gradient(155deg, #3a1a24, #57283b 48%, #1f1420)",
  },
];

type ProjectsSectionProps = {
  projects?: ProjectItem[];
};

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: "easeOut",
    },
  },
};

function ProjectCard({ project }: { project: ProjectItem }) {
  const [isHovering, setIsHovering] = useState(false);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 18, mass: 0.6 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18, mass: 0.6 });

  const glow = useMotionTemplate`radial-gradient(420px 220px at 50% 0%, rgba(122, 170, 255, 0.28), transparent 70%)`;

  const imageBackground = useMemo(() => {
    if (project.image) {
      return `linear-gradient(to bottom, rgba(3, 8, 20, 0) 35%, rgba(3, 8, 20, 0.35) 100%), url(${project.image})`;
    }
    return project.gradient;
  }, [project.image, project.gradient]);

  const handlePointerMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;

    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    const rotateMax = 7;
    const newRotateY = ((x - centerX) / centerX) * rotateMax;
    const newRotateX = -((y - centerY) / centerY) * rotateMax;

    rotateX.set(newRotateX);
    rotateY.set(newRotateY);
  };

  const handlePointerLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setIsHovering(false);
  };

  return (
    <motion.article
      variants={cardVariants}
      className="group relative"
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <motion.div
        className="relative rounded-[1.35rem] p-[1px]"
        style={{
          background:
            "linear-gradient(145deg, rgba(165,205,255,0.56), rgba(97,140,255,0.2) 45%, rgba(103,88,255,0.34))",
          rotateX: springX,
          rotateY: springY,
          transformPerspective: 1200,
          boxShadow: "0 28px 60px rgba(0, 0, 0, 0.42)",
        }}
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
      >
        <motion.div
          className="relative overflow-hidden rounded-[1.3rem] border border-white/10 bg-[#0b1530]/72 backdrop-blur-xl"
          style={{ backgroundImage: glow }}
        >
          <motion.div
            className="relative h-52 overflow-hidden border-b border-white/12 md:h-48"
            style={{ background: imageBackground, backgroundSize: "cover", backgroundPosition: "center" }}
            animate={{ scale: isHovering ? 1.06 : 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <motion.div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(124, 166, 255, 0.02), rgba(52, 88, 180, 0.45) 50%, rgba(6, 14, 32, 0.8) 100%)",
              }}
              animate={{ opacity: isHovering ? 1 : 0.55 }}
              transition={{ duration: 0.35 }}
            />
          </motion.div>

          <div className="relative p-5">
            <h3 className="text-xl font-bold tracking-tight text-[#ecf3ff]">{project.title}</h3>
            <p className="mt-2 line-clamp-2 text-sm text-[#c6d8ff]/86">{project.description}</p>

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-[#8eb5ff]/28 bg-[#173163]/55 px-2.5 py-1 text-xs font-medium text-[#d3e5ff]"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <motion.div
              className="mt-5 grid grid-cols-2 gap-2"
              animate={{ opacity: isHovering ? 1 : 0.76, y: isHovering ? 0 : 6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-[#8fb7ff]/52 bg-[#2f5bd2]/86 px-3 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_22px_rgba(86,132,255,0.58)]"
              >
                Live Demo
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-[#a9c8ff]/38 bg-[#0f2146]/82 px-3 py-2 text-sm font-semibold text-[#d7e6ff] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#aecdff]/72 hover:shadow-[0_0_20px_rgba(122,170,255,0.48)]"
              >
                GitHub Repo
              </a>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </motion.article>
  );
}

export default function ProjectsSection({ projects = sampleProjects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16 md:px-8">
      <div
        className="pointer-events-none absolute inset-x-0 top-8 -z-10 mx-auto h-[320px] w-[92%] max-w-5xl rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 65% at 50% 50%, rgba(77, 125, 255, 0.34), rgba(66, 103, 210, 0.16) 52%, transparent 84%)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="mb-10 text-center"
      >
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#9ec2ff]">Selected Work</p>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#ecf3ff] md:text-5xl">My Projects</h2>
        <p className="mx-auto mt-3 max-w-2xl text-[#c3d6ff]/82">
          A snapshot of products I built with modern frontend architecture, robust APIs, and premium user experiences.
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </section>
  );
}
