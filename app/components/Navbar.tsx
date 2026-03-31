export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full content-center border-b border-blue-300/20 bg-[#04102a]/72 text-[#e7efff] backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center content-center px-4 py-4 md:px-8">
        <div className="flex flex-wrap items-center content-center justify-center gap-4 text-sm font-medium text-[#c7dbff]/85 md:gap-7 md:text-base">
          <a href="#about" className="transition hover:text-[#8dc0ff]">About</a>
          <a href="#experience" className="transition hover:text-[#8dc0ff]">Experience</a>
          <a href="#skills" className="transition hover:text-[#8dc0ff]">Skills</a>
          <a href="#projects" className="transition hover:text-[#8dc0ff]">Projects</a>
          <a href="#contact" className="transition hover:text-[#8dc0ff]">Contact</a>
        </div>
      </div>
    </nav>
  );
}