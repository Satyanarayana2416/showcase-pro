import { useState } from "react";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import { profile } from "@/data/portfolio";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const message = data.get("message");
    if (!name || !message) {
      toast.error("Please fill in name and message.");
      return;
    }
    setSending(true);
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(String(message));
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setTimeout(() => {
      setSending(false);
      toast.success("Opening your email client…");
    }, 600);
  };

  const items = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/achutha", href: profile.links.linkedin },
    { Icon: Github, label: "GitHub", value: "github.com/achutha", href: profile.links.github },
  ];

  return (
    <section id="contact" className="py-28 relative">
      <div className="container mx-auto px-6">
        <SectionHeading eyebrow="Contact" title="Let's build something" subtitle="Have an idea, role, or collaboration in mind? My inbox is open." />
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((it, i) => (
              <Reveal key={it.label} delay={i * 0.06}>
                <a href={it.href} target="_blank" rel="noreferrer" className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition group">
                  <div className="w-11 h-11 rounded-xl grid place-items-center shrink-0" style={{ background: "var(--gradient-primary)" }}>
                    <it.Icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-mono text-muted-foreground">{it.label}</p>
                    <p className="font-medium truncate group-hover:text-[var(--neon)] transition">{it.value}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1}>
            <form onSubmit={onSubmit} className="lg:col-span-3 glass rounded-3xl p-6 sm:p-8 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-muted-foreground">Name</label>
                  <input name="name" required className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--neon)] focus:outline-none focus:ring-2 focus:ring-[var(--neon)]/30 transition" placeholder="Your name" />
                </div>
                <div>
                  <label className="text-xs font-mono text-muted-foreground">Email</label>
                  <input type="email" name="email" className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--neon)] focus:outline-none focus:ring-2 focus:ring-[var(--neon)]/30 transition" placeholder="you@example.com" />
                </div>
              </div>
              <div>
                <label className="text-xs font-mono text-muted-foreground">Message</label>
                <textarea name="message" required rows={5} className="mt-1 w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-[var(--neon)] focus:outline-none focus:ring-2 focus:ring-[var(--neon)]/30 transition resize-none" placeholder="Tell me about your project…" />
              </div>
              <button disabled={sending} type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium text-primary-foreground transition hover:scale-[1.02] disabled:opacity-60" style={{ background: "var(--gradient-primary)" }}>
                <Send className="w-4 h-4" /> {sending ? "Sending…" : "Send Message"}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
