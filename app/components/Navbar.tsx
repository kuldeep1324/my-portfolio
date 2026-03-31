export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 flex w-full content-center border-b border-white/10 bg-[#060d1f]/78 text-[#e6eeff] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center content-center px-4 py-4 md:px-8">
        <div className="flex flex-wrap items-center content-center justify-center gap-4 text-sm font-semibold text-[#b9caee] md:gap-8 md:text-base">
          <a href="#about" className="transition-colors duration-200 hover:text-[#e7efff]">About</a>
          <a href="#experience" className="transition-colors duration-200 hover:text-[#e7efff]">Experience</a>
          <a href="#skills" className="transition-colors duration-200 hover:text-[#e7efff]">Skills</a>
          <a href="#projects" className="transition-colors duration-200 hover:text-[#e7efff]">Projects</a>
          <a href="#contact" className="transition-colors duration-200 hover:text-[#e7efff]">Contact</a>
        </div>
      </div>
    </nav>
  );
}