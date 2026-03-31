export default function Home() {
  return (
    <main id="home" className="min-h-screen pt-24 text-[#e7efff]">
      <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-14 md:grid-cols-[1.2fr_1fr] md:px-8 md:py-20">
        <div className="fade-up">
          <p className="status-pill mb-3">
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
              className="btn-primary"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="btn-secondary"
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
          <h2 className="text-3xl font-bold text-[#e7efff] md:text-4xl">My Skills</h2>
          <div className="skills-chain mt-7">
            <div className="skills-grid">
              <article className="skill-column">
                <h3 className="skill-title">Frontend</h3>
                <ul className="skill-list">
                  <li className="skill-node">Next.js</li>
                  <li className="skill-node">React</li>
                  <li className="skill-node">TypeScript</li>
                  <li className="skill-node">JavaScript</li>
                  <li className="skill-node">Tailwind CSS</li>
                </ul>
              </article>

              <article className="skill-column">
                <h3 className="skill-title">Backend</h3>
                <ul className="skill-list">
                  <li className="skill-node">Node.js</li>
                  <li className="skill-node">Express.js</li>
                  <li className="skill-node">REST APIs</li>
                  <li className="skill-node">JWT Auth</li>
                </ul>
              </article>

              <article className="skill-column">
                <h3 className="skill-title">Database</h3>
                <ul className="skill-list">
                  <li className="skill-node">MongoDB</li>
                  <li className="skill-node">Mongoose</li>
                  <li className="skill-node">MySQL</li>
                </ul>
              </article>

              <article className="skill-column">
                <h3 className="skill-title">Other Languages</h3>
                <ul className="skill-list">
                  <li className="skill-node">C</li>
                  <li className="skill-node">C++</li>
                  <li className="skill-node">Python</li>
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="projects-intro">
          <p className="projects-index">04</p>
          <h2 className="projects-title">My Projects</h2>
        </div>

        <div className="projects-grid mt-10">
          <a
            href="https://rent-hub-plum.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="project-card project-renthub"
            aria-label="Open RentHub project"
          >
            <div className="project-overlay">
              <h3>RentHub</h3>
              <p>Community sharing platform with modern UI and APIs.</p>
            </div>
          </a>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 pt-10 md:px-8">
        <div className="contact-shell glass-card rounded-3xl p-8 md:p-12">
          <div className="contact-grid">
            <div className="contact-copy">
              <p className="contact-kicker">Let&apos;s Connect</p>
              <h2 className="text-3xl font-bold text-[#e7efff] md:text-4xl">Let&apos;s Work Together</h2>
              <p className="mt-4 max-w-xl text-[#c7dbff]/82">
                I&apos;m open to collaboration on web products, AI-powered tools, and modern frontend experiences.
              </p>
            </div>

            <div className="contact-list" role="list" aria-label="Contact links">
              <a href="tel:+919644397542" className="contact-item" role="listitem">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.2 2 2 0 0 1 4.1 1h2a2 2 0 0 1 2 1.72c.12.9.33 1.8.62 2.66a2 2 0 0 1-.45 2.11L7.1 8.66a16 16 0 0 0 6.24 6.24l1.17-1.17a2 2 0 0 1 2.11-.45c.86.29 1.76.5 2.66.62A2 2 0 0 1 22 16.92z" />
                  </svg>
                </span>
                <span className="contact-text">
                  <span className="contact-label">Phone</span>
                  <span className="contact-value">+91 9644397542</span>
                </span>
              </a>

              <a href="mailto:kuldeep13rajak@gmail.com" className="contact-item" role="listitem">
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span className="contact-text">
                  <span className="contact-label">Gmail</span>
                  <span className="contact-value">kuldeep13rajak@gmail.com</span>
                </span>
              </a>

              <a
                href="https://github.com/kuldeep1324"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
                role="listitem"
              >
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </span>
                <span className="contact-text">
                  <span className="contact-label">GitHub</span>
                  <span className="contact-value">github.com/kuldeep1324</span>
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/kuldeep1324/"
                target="_blank"
                rel="noreferrer"
                className="contact-item"
                role="listitem"
              >
                <span className="contact-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </span>
                <span className="contact-text">
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">linkedin.com/in/kuldeep1324</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}