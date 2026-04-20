import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

export function Reveal({ children, delay = 0, y = 24, className }: { children: ReactNode; delay?: number; y?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <Reveal>
      <div className="text-center max-w-2xl mx-auto mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--neon)] mb-3">{eyebrow}</p>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
          <span className="text-gradient">{title}</span>
        </h2>
        {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
      </div>
    </Reveal>
  );
}
