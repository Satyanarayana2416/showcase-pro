import { profile } from "@/data/portfolio";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 mt-10">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-display font-bold text-lg">
            <span className="text-gradient">{profile.shortName}</span>.dev
          </p>
          <p className="text-xs text-muted-foreground mt-1">© {new Date().getFullYear()} {profile.name}. Crafted with care.</p>
        </div>
        <div className="flex items-center gap-3">
          {[
            { Icon: Github, href: profile.links.github, label: "GitHub" },
            { Icon: Linkedin, href: profile.links.linkedin, label: "LinkedIn" },
            { Icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
              className="w-10 h-10 grid place-items-center rounded-full glass hover:bg-white/10 hover:scale-110 transition">
              <Icon className="w-4 h-4" />
            </a>
          ))}
          <a href="#hero" aria-label="Back to top"
            className="w-10 h-10 grid place-items-center rounded-full text-primary-foreground hover:scale-110 transition"
            style={{ background: "var(--gradient-primary)" }}>
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
