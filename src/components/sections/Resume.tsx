import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import { profile } from "@/data/portfolio";
import { Download, FileText, Eye } from "lucide-react";

export function Resume() {
  return (
    <section id="resume" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="Resume" title="Grab my CV" />
        <Reveal>
          <div className="relative max-w-3xl mx-auto">
            <div className="absolute -inset-2 rounded-3xl blur-2xl opacity-60" style={{ background: "var(--gradient-hero)" }} />
            <div className="relative glass rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-20 h-20 rounded-2xl grid place-items-center shrink-0" style={{ background: "var(--gradient-primary)" }}>
                <FileText className="w-9 h-9 text-primary-foreground" />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-xl font-bold">{profile.name} — Resume.pdf</h3>
                <p className="text-sm text-muted-foreground mt-1">Download or preview the latest version of my CV.</p>
                <p className="text-xs font-mono text-[var(--neon)] mt-2">{profile.links.resume}</p>
              </div>
              <div className="flex gap-3">
                <a href={profile.links.resume} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass hover:bg-white/10 text-sm">
                  <Eye className="w-4 h-4" /> View
                </a>
                <a href={profile.links.resume} download className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                  <Download className="w-4 h-4" /> Download
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
