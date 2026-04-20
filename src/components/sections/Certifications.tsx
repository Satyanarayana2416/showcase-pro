import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import { certifications } from "@/data/portfolio";
import { Award, ExternalLink } from "lucide-react";

export function Certifications() {
  return (
    <section id="certifications" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="Credentials" title="Certifications" subtitle="Hand-picked programs I've completed across AI, Cloud and Security." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={(i % 6) * 0.05}>
              <a href={c.url} target="_blank" rel="noreferrer" className="group glass rounded-2xl p-5 flex items-start gap-4 hover:-translate-y-1 transition h-full">
                <div className="w-11 h-11 shrink-0 rounded-xl grid place-items-center" style={{ background: "var(--gradient-primary)" }}>
                  <Award className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium leading-snug">{c.name}</h4>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs text-[var(--neon)] font-mono">
                    {c.url === "Paste your url" ? "Paste your url" : "View"}
                    <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
