import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar2() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };
    handleScroll(); // Check immediately on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown if click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Common background effect for all sizes
  const bgClass = scrolled ? "bg-[#0c142c]/90" : "bg-transparent";
  const dropdownBgClass = scrolled ? "bg-[#0c142c]/90" : "bg-[#2f1b0e]/98";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${bgClass} shadow-md`}
    >
      {/* Desktop/Laptop Navbar */}
      <div className="hidden md:flex items-center justify-between px-8 h-16">
        <span className="text-2xl font-bold text-amber-400">
          <a href="#hero">Fernando Morán</a>
        </span>
        <div className="flex items-center gap-8">
          <a
            href="#about"
            className="text-white hover:text-amber-400 transition-colors"
          >
            About
          </a>
          <a
            href="#skills"
            className="text-white hover:text-amber-400 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white hover:text-amber-400 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-white hover:text-amber-400 transition-colors"
          >
            Contact
          </a>
          <Link
            to="/FernandoMoranCV.pdf"
            target="_blank"
            className="text-white hover:text-amber-400 transition-colors"
          >
            Resume
          </Link>
        </div>
      </div>
      {/* Mobile Navbar */}
      <div className="flex md:hidden items-center justify-between px-4 h-16">
        <span className="text-xl font-bold text-amber-400">
          {" "}
          <a href="#hero">FM</a>
        </span>
        {/* Hamburger for mobile */}
        <div className="md:hidden relative">
          <button
            className="focus:outline-none"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
            type="button"
          >
            <div className="w-8 h-1 bg-white mb-1 rounded" />
            <div className="w-8 h-1 bg-white mb-1 rounded" />
            <div className="w-8 h-1 bg-white rounded" />
          </button>
          {/* Dropdown menu */}
          {open && (
            <div
              ref={menuRef}
              className={`absolute right-0 mt-2 w-48 rounded shadow-lg flex flex-col py-2 border border-transparent ${dropdownBgClass}`}
            >
              <a
                href="#about"
                className="text-white px-4 py-2 hover:bg-amber-400/20"
                onClick={() => {
                  setOpen(false);
                }}
              >
                About
              </a>
              <a
                href="#skills"
                className="text-white px-4 py-2 hover:bg-amber-400/20"
                onClick={() => setOpen(false)}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-white px-4 py-2 hover:bg-amber-400/20"
                onClick={() => setOpen(false)}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-white px-4 py-2 hover:bg-amber-400/20"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
              <Link
                to="/FernandoMoranCV.pdf"
                target="_blank"
                className="text-white px-4 py-2 hover:bg-amber-400/20"
                onClick={() => setOpen(false)}
              >
                Resume
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
