export default function Home() {
  return (
    <main id="home" className="min-h-screen pt-24 text-[#e7efff]">
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr] md:px-8 md:py-20">
        <div className="fade-up">
          <p className="mb-3 inline-flex rounded-full border border-[#8dc0ff]/30 bg-[#295dff]/18 px-4 py-1 text-sm font-semibold text-[#bcd5ff]">
            Available for freelance and full-time roles
          </p>
          <h1 className="hero-title text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
            Building reliable web products with modern UX.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-[#c7dbff]/82">
            I am Kuldeep, a Full Stack Developer focused on performant Next.js applications,
            practical AI integrations, and clean product experiences for businesses.
          </p>

          <div className="fade-up-delay mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-[#295dff] px-6 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1f4fe8]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-[#8dc0ff]/35 bg-[#081a3d]/90 px-6 py-3 font-semibold text-[#dbe8ff] transition hover:-translate-y-0.5 hover:border-[#8dc0ff]/60"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="fade-up-delay-2">
          <div className="glass-card relative mx-auto max-w-sm overflow-hidden rounded-3xl p-6">
            <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#4c8dff]/35 blur-2xl" />
            <div className="absolute -bottom-10 -left-8 h-28 w-28 rounded-full bg-[#295dff]/35 blur-2xl" />

            <div className="profile-photo relative" role="img" aria-label="Kuldeep profile" />
            <div className="relative mt-5">
              <h2 className="text-2xl font-bold text-[#e7efff]">Kuldeep</h2>
              <p className="text-[#c7dbff]/82">Full Stack Developer</p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                <span className="rounded-full bg-[#295dff]/18 px-3 py-1 font-medium text-[#9ec2ff]">Next.js</span>
                <span className="rounded-full bg-[#4c8dff]/20 px-3 py-1 font-medium text-[#bcd5ff]">TypeScript</span>
                <span className="rounded-full bg-[#8dc0ff]/18 px-3 py-1 font-medium text-[#dbe8ff]">AI Apps</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="glass-card rounded-3xl p-8 md:p-10">
          <h2 className="text-3xl font-bold text-[#e7efff] md:text-4xl">About Me</h2>
          <p className="mt-4 max-w-3xl text-[#c7dbff]/82">
            I build scalable dashboards, business websites, and product interfaces that balance
            aesthetics with usability. My approach combines strong engineering fundamentals,
            performance-first architecture, and professional design details that create trust.
          </p>
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-6 py-8 md:px-8 md:py-12">
        <div className="glass-card rounded-3xl p-8 md:p-10">
          <h2 className="text-3xl font-bold text-[#e7efff] md:text-4xl">Experience</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-blue-300/20 bg-[#081a3d]/70 p-5">
              <p className="text-sm text-[#8dc0ff]">2024 - Present</p>
              <h3 className="mt-2 text-xl font-semibold text-[#e7efff]">Freelance Full Stack Developer</h3>
              <p className="mt-2 text-[#c7dbff]/82">Developed business websites and admin dashboards with modern UI, API integration, and performance optimization.</p>
            </article>
            <article className="rounded-2xl border border-blue-300/20 bg-[#081a3d]/70 p-5">
              <p className="text-sm text-[#8dc0ff]">2023 - 2024</p>
              <h3 className="mt-2 text-xl font-semibold text-[#e7efff]">Frontend Developer Projects</h3>
              <p className="mt-2 text-[#c7dbff]/82">Built responsive interfaces and booking flows using React, Next.js, and TypeScript with focus on clean UX.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-6xl px-6 py-8 md:px-8 md:py-12">
        <div className="glass-card rounded-3xl p-8 md:p-10">
          <h2 className="text-3xl font-bold text-[#e7efff] md:text-4xl">Skills</h2>
          <div className="mt-6 flex flex-wrap gap-3 text-sm md:text-base">
            <span className="rounded-full border border-blue-300/25 bg-[#295dff]/18 px-4 py-2 font-medium text-[#cfe2ff]">Next.js</span>
            <span className="rounded-full border border-blue-300/25 bg-[#295dff]/18 px-4 py-2 font-medium text-[#cfe2ff]">React</span>
            <span className="rounded-full border border-blue-300/25 bg-[#295dff]/18 px-4 py-2 font-medium text-[#cfe2ff]">TypeScript</span>
            <span className="rounded-full border border-blue-300/25 bg-[#295dff]/18 px-4 py-2 font-medium text-[#cfe2ff]">JavaScript</span>
            <span className="rounded-full border border-blue-300/25 bg-[#295dff]/18 px-4 py-2 font-medium text-[#cfe2ff]">Tailwind CSS</span>
            <span className="rounded-full border border-blue-300/25 bg-[#295dff]/18 px-4 py-2 font-medium text-[#cfe2ff]">Node.js</span>
            <span className="rounded-full border border-blue-300/25 bg-[#295dff]/18 px-4 py-2 font-medium text-[#cfe2ff]">MongoDB</span>
            <span className="rounded-full border border-blue-300/25 bg-[#295dff]/18 px-4 py-2 font-medium text-[#cfe2ff]">REST APIs</span>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <h2 className="text-3xl font-bold text-[#e7efff] md:text-4xl">Featured Projects</h2>
        <p className="mt-3 max-w-2xl text-[#c7dbff]/82">
          A selection of practical projects with clear business goals and modern implementation.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <article className="glass-card group rounded-2xl p-6 transition hover:-translate-y-1">
            <p className="text-sm font-semibold text-[#8dc0ff]">Analytics + AI</p>
            <h3 className="mt-2 text-xl font-bold text-[#e7efff]">Drone Dashboard</h3>
            <p className="mt-3 text-[#c7dbff]/82">
              Real-time monitoring, mission analytics, and alerting to improve operational response time.
            </p>
          </article>

          <article className="glass-card group rounded-2xl p-6 transition hover:-translate-y-1">
            <p className="text-sm font-semibold text-[#9ec2ff]">E-commerce UX</p>
            <h3 className="mt-2 text-xl font-bold text-[#e7efff]">Salon Booking Platform</h3>
            <p className="mt-3 text-[#c7dbff]/82">
              Responsive booking flow, service management, and customer-first interface for conversions.
            </p>
          </article>

          <article className="glass-card group rounded-2xl p-6 transition hover:-translate-y-1">
            <p className="text-sm font-semibold text-[#bcd5ff]">Automation</p>
            <h3 className="mt-2 text-xl font-bold text-[#e7efff]">Admin Workflow Suite</h3>
            <p className="mt-3 text-[#c7dbff]/82">
              Dashboard tools to streamline repetitive tasks, increase team output, and reduce errors.
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 pt-10 text-center md:px-8">
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-[#e7efff] md:text-4xl">Let&apos;s Work Together</h2>
          <p className="mx-auto mt-4 max-w-xl text-[#c7dbff]/82">
            I&apos;m open to collaboration on web products, AI-powered tools, and modern frontend experiences.
          </p>
          <a
            href="mailto:yourmail@gmail.com"
            className="mt-7 inline-block rounded-xl bg-[#295dff] px-7 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1f4fe8]"
          >
            yourmail@gmail.com
          </a>
        </div>
      </section>
    </main>
  );
}