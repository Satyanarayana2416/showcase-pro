import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import profileImg from "@/assets/profile.jpg";
import { profile } from "@/data/portfolio";
import { Sparkles, Target, Code2 } from "lucide-react";

export function About() {
  const cards = [
    { Icon: Sparkles, title: "What I do", text: "Build multimodal AI apps, intelligent agents, and secure full-stack systems." },
    { Icon: Target, title: "Career goal", text: "Land an SDE Internship where I can ship AI-powered, cloud-native products." },
    { Icon: Code2, title: "Passion", text: "Generative AI, Cybersecurity, clean architecture, and developer experience." },
  ];
  return (
    <section id="about" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="About me" title="A curious builder at the AI × Security frontier" />
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <Reveal>
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-3 rounded-3xl blur-2xl opacity-60" style={{ background: "var(--gradient-hero)" }} />
              <div className="relative glass rounded-3xl p-2">
                <img src={profileImg} alt={profile.name} width={600} height={600} loading="lazy"
                  className="w-full rounded-2xl object-cover aspect-square" />
              </div>
            </div>
          </Reveal>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {profile.bio} I love turning ideas into shipped products — whether that's a Gemini-powered virtual try-on,
                an ML-driven sustainability dashboard, or a packet-analysis pipeline that catches threats in real time.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              {cards.map((c, i) => (
                <Reveal key={c.title} delay={0.15 + i * 0.08}>
                  <div className="glass rounded-2xl p-5 h-full hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-xl grid place-items-center mb-3" style={{ background: "var(--gradient-primary)" }}>
                      <c.Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-semibold mb-1">{c.title}</h3>
                    <p className="text-sm text-muted-foreground">{c.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="grid grid-cols-3 gap-4 mt-8">
              {[
                { k: "8.18", l: "Current CGPA" },
                { k: "9+", l: "Certifications" },
                { k: "2", l: "Internships" },
              ].map((s) => (
                <div key={s.l} className="glass rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-gradient">{s.k}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
