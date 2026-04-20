import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className={`glass rounded-full px-5 py-3 flex items-center justify-between ${scrolled ? "shadow-[var(--shadow-card)]" : ""}`}>
          <a href="#hero" className="font-display font-bold text-lg">
            <span className="text-gradient">{profile.shortName}</span>
            <span className="text-foreground"></span>
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={profile.links.resume}
            target="_blank"
            rel="noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-[var(--gradient-primary)] text-primary-foreground hover:opacity-90 transition"
            style={{ background: "var(--gradient-primary)" }}
          >
            Resume
          </a>
          <button
            aria-label="Menu"
            className="md:hidden p-2 rounded-full hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="w-5 h-0.5 bg-foreground mb-1" />
            <div className="w-5 h-0.5 bg-foreground mb-1" />
            <div className="w-5 h-0.5 bg-foreground" />
          </button>
        </div>
        {open && (
          <div className="md:hidden glass rounded-2xl mt-2 p-4 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a href={profile.links.resume} target="_blank" rel="noreferrer" className="px-4 py-2 text-sm font-medium rounded-lg" style={{ background: "var(--gradient-primary)", color: "var(--primary-foreground)" }}>
              Resume
            </a>
          </div>
        )}
      </div>
    </motion.header>
  );
}
