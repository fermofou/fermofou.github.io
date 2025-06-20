import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  // Set the scroll threshold (e.g., 1/3 of 600px hero = 200px)
  const SCROLL_THRESHOLD = 500;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`flex w-full items-center justify-between px-6 py-2 shadow-md fixed top-0 left-0 z-50 transition-colors duration-500
        ${scrolled ? "bg-[#0c142c]/95" : "bg-transparent"}`}
      style={{ backdropFilter: "blur(10px)" }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-amber-400 mb-0 self-center">
        Fernando Morán
      </h1>
      <div className="flex items-center space-x-8">
        <a
          href="#about"
          className="text-white hover:text-amber-400 transition-colors"
        >
          ABOUT
        </a>
        <a
          href="#skills"
          className="text-white hover:text-amber-400 transition-colors"
        >
          SKILLS
        </a>
        <a
          href="#projects"
          className="text-white hover:text-amber-400 transition-colors"
        >
          PROJECTS
        </a>
        <a
          href="#contact"
          className="text-white hover:text-amber-400 transition-colors"
        >
          CONTACT
        </a>
        <Link
          to="/FernandoMoranCV.pdf"
          target="_blank"
          className="text-white hover:text-amber-400 transition-colors"
        >
          RESUME
        </Link>
      </div>
    </nav>
  );
}
