import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import { skills, skillBars } from "@/data/portfolio";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Bar({ name, level }: { name: string; level: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <div ref={ref}>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-muted-foreground font-mono text-xs">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/5 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{ background: "var(--gradient-primary)" }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="Skills" title="Tools of the craft" subtitle="A modern stack across AI, full-stack, security and cloud." />
        <div className="grid lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="glass rounded-3xl p-8 space-y-6">
              {skillBars.map((s) => <Bar key={s.name} {...s} />)}
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(skills).map(([cat, list], i) => (
              <Reveal key={cat} delay={i * 0.06}>
                <div className="glass rounded-2xl p-5 h-full hover:bg-white/[0.06] transition">
                  <h4 className="font-semibold mb-3 text-sm font-mono text-[var(--neon)]">{cat}</h4>
                  <div className="flex flex-wrap gap-2">
                    {list.map((s) => (
                      <span key={s} className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 hover:border-[var(--neon)]/50 transition">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
