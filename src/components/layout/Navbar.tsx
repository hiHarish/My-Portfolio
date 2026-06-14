import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-white text-xl tracking-tight font-medium"
          >
            <b>HP</b> 
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-zinc-400 hover:text-white transition-colors duration-300 text-sm"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/Harish_Peddi_SDE.pdf"
              download
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium hover:scale-105 transition-transform"
            >
              Resume
            </a>
          </div>

          {/* Mobile */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-6">
            <div className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/Harish_Kumar_Resume_Dev.pdf"
                download
                className="w-fit px-5 py-2 rounded-full bg-white text-black text-sm font-medium"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}