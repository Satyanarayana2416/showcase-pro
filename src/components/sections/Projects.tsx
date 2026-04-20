import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import { projects } from "@/data/portfolio";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="Projects" title="Things I've built" subtitle="A glimpse into what I've shipped recently." />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <article className="group relative glass rounded-3xl p-7 h-full overflow-hidden hover:-translate-y-2 transition-all duration-500">
                {/* glow on hover */}
                <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{ background: "var(--gradient-hero)", filter: "blur(24px)" }} />
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition pointer-events-none"
                  style={{ background: "linear-gradient(145deg, oklch(0.78 0.18 200 / 8%), transparent)" }} />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono text-muted-foreground mb-1">{p.period}</p>
                    <h3 className="text-2xl font-bold tracking-tight">{p.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl grid place-items-center text-lg font-bold text-primary-foreground"
                    style={{ background: "var(--gradient-primary)" }}>
                    {p.title.charAt(0)}
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-white/5 border border-white/10 font-mono">{t}</span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full glass hover:bg-white/10 transition">
                    <Github className="w-4 h-4" /> {p.github === "Paste your url" ? "Paste your url" : "Code"}
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full font-medium text-primary-foreground transition" style={{ background: "var(--gradient-primary)" }}>
                    <ExternalLink className="w-4 h-4" /> {p.demo === "Paste your url" ? "Paste your url" : "Live"}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
