import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import { education, experience } from "@/data/portfolio";
import { GraduationCap, Briefcase } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="Journey" title="Education & Experience" />
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Reveal>
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
                <GraduationCap className="w-5 h-5 text-[var(--neon)]" /> Education
              </h3>
            </Reveal>
            <div className="relative pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[var(--neon)] before:via-[var(--violet)] before:to-transparent">
              {education.map((e, i) => (
                <Reveal key={e.school} delay={i * 0.08}>
                  <div className="relative">
                    <span className="absolute -left-[1.45rem] top-2 w-3 h-3 rounded-full" style={{ background: "var(--gradient-primary)", boxShadow: "0 0 12px var(--neon)" }} />
                    <div className="glass rounded-2xl p-5 hover:-translate-y-1 transition">
                      <div className="text-xs font-mono text-muted-foreground mb-1">{e.period}</div>
                      <h4 className="font-semibold">{e.school}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{e.degree}</p>
                      <p className="text-sm mt-2 text-[var(--neon)] font-mono">{e.grade}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <div>
            <Reveal>
              <h3 className="flex items-center gap-2 text-xl font-semibold mb-6">
                <Briefcase className="w-5 h-5 text-[var(--violet)]" /> Experience
              </h3>
            </Reveal>
            <div className="relative pl-8 space-y-6 before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-[var(--violet)] before:via-[var(--neon)] before:to-transparent">
              {experience.map((x, i) => (
                <Reveal key={x.role} delay={i * 0.08}>
                  <div className="relative">
                    <span className="absolute -left-[1.45rem] top-2 w-3 h-3 rounded-full" style={{ background: "var(--gradient-primary)", boxShadow: "0 0 12px var(--violet)" }} />
                    <div className="glass rounded-2xl p-5 hover:-translate-y-1 transition">
                      <div className="text-xs font-mono text-muted-foreground mb-1">{x.period}</div>
                      <h4 className="font-semibold">{x.role}</h4>
                      <p className="text-sm text-muted-foreground">{x.org}</p>
                      <ul className="mt-3 space-y-1.5">
                        {x.points.map((p) => (
                          <li key={p} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-[var(--neon)] mt-1">▹</span>{p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
