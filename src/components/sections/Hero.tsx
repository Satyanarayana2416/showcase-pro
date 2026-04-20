import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";
import { profile } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </div>
      {/* Animated blobs */}
      <div aria-hidden className="absolute top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-50 -z-10" style={{ background: "var(--gradient-glow)", animation: "blob 20s ease-in-out infinite" }} />
      <div aria-hidden className="absolute bottom-10 right-0 w-[30rem] h-[30rem] rounded-full blur-3xl opacity-40 -z-10" style={{ background: "radial-gradient(circle, oklch(0.65 0.24 305 / 50%), transparent 70%)", animation: "blob 24s ease-in-out infinite reverse" }} />

      <div className="container mx-auto px-6 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--neon)] animate-pulse" />
            Available for SDE Internships · 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight"
          >
            Hi, I'm <span className="text-gradient">Achutha</span>
            <br />
            I build with <span className="text-gradient">AI & Code.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 text-lg text-muted-foreground max-w-2xl"
          >
            {profile.tagline}. I craft multimodal AI experiences with Gemini, ship secure full-stack systems, and explore the frontier of AI Agents.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-primary-foreground glow-primary transition-transform hover:scale-105"
              style={{ background: "var(--gradient-primary)" }}
            >
              View Projects
              <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition" />
            </a>
            <a
              href={profile.links.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium glass hover:bg-white/10 transition"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex items-center gap-3"
          >
            {[
              { Icon: Github, href: profile.links.github, label: "GitHub" },
              { Icon: Linkedin, href: profile.links.linkedin, label: "LinkedIn" },
              { Icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
                className="w-11 h-11 grid place-items-center rounded-full glass hover:bg-white/10 hover:scale-110 transition">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Avatar / floating card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative mx-auto w-72 h-72 sm:w-80 sm:h-80 lg:w-[22rem] lg:h-[22rem]">
            <div className="absolute -inset-4 rounded-full blur-2xl opacity-70" style={{ background: "var(--gradient-hero)", animation: "glow-pulse 4s ease-in-out infinite" }} />
            <div className="relative w-full h-full rounded-full overflow-hidden glass p-1.5" style={{ animation: "float 6s ease-in-out infinite" }}>
              <img src={profileImg} alt={profile.name} width={352} height={352} className="w-full h-full object-cover rounded-full" />
            </div>
            {/* floating chips */}
            <motion.div className="absolute -top-2 -left-6 glass rounded-2xl px-3 py-2 text-xs font-mono"
              animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}>
              ⚡ Gemini 2.5
            </motion.div>
            <motion.div className="absolute bottom-4 -right-6 glass rounded-2xl px-3 py-2 text-xs font-mono"
              animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
              🛡 Cybersecurity
            </motion.div>
            <motion.div className="absolute top-1/2 -right-12 glass rounded-2xl px-3 py-2 text-xs font-mono hidden sm:block"
              animate={{ x: [0, 8, 0] }} transition={{ duration: 6, repeat: Infinity }}>
              🤖 AI Agents
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-foreground transition" aria-label="Scroll">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="flex flex-col items-center gap-2">
          <span className="text-xs font-mono">scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </a>
    </section>
  );
}
