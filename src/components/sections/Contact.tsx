import { useState } from "react";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import { profile } from "@/data/portfolio";
import { Mail, Phone, Github, Linkedin, Send, MapPin, Sparkles } from "lucide-react";
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
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, accent: "from-cyan-400 to-blue-500" },
    { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}`, accent: "from-emerald-400 to-teal-500" },
    { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/satyanarayana", href: profile.links.linkedin, accent: "from-sky-400 to-indigo-500" },
    { Icon: Github, label: "GitHub", value: "github.com/Satyanarayana2416", href: profile.links.github, accent: "from-fuchsia-400 to-violet-500" },
  ];

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Ambient background blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-10 -left-20 w-[28rem] h-[28rem] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--neon), transparent 60%)", animation: "blob 18s ease-in-out infinite" }} />
        <div className="absolute bottom-0 -right-20 w-[32rem] h-[32rem] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, var(--violet), transparent 60%)", animation: "blob 22s ease-in-out infinite reverse" }} />
      </div>

      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Get in touch"
          title="Let's build something great"
          subtitle="Have an idea, role, or collaboration in mind? My inbox is always open — I usually reply within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
          {/* LEFT — Contact cards */}
          <div className="lg:col-span-2 space-y-4 flex flex-col min-w-0">
            <Reveal>
              <div className="glass rounded-2xl p-6 relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full opacity-20 blur-2xl" style={{ background: "var(--gradient-primary)" }} />
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-[var(--neon)]" />
                  <span className="text-xs font-mono uppercase tracking-[0.18em] text-[var(--neon)]">Available for work</span>
                </div>
                <h3 className="text-xl font-semibold leading-tight">Open to internships, freelance & full-time roles.</h3>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>Based in India · Remote friendly</span>
                </div>
              </div>
            </Reveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {items.map((it, i) => (
                <Reveal key={it.label} delay={0.05 + i * 0.06}>
                  <a
                    href={it.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass rounded-2xl p-4 flex items-center gap-4 hover:-translate-y-1 hover:border-[var(--neon)]/40 transition-all duration-300 group relative overflow-hidden"
                  >
                    <div className={`w-12 h-12 rounded-xl grid place-items-center shrink-0 bg-gradient-to-br ${it.accent} shadow-lg group-hover:scale-110 transition-transform`}>
                      <it.Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">{it.label}</p>
                      <p className="font-medium text-sm truncate group-hover:text-[var(--neon)] transition">{it.value}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <Reveal delay={0.15} className="lg:col-span-3 min-w-0">
            <form
              onSubmit={onSubmit}
              className="glass rounded-3xl p-6 sm:p-10 relative overflow-hidden h-full"
            >
              {/* gradient border glow */}
              <div aria-hidden className="absolute inset-0 rounded-3xl pointer-events-none opacity-60"
                style={{ background: "linear-gradient(135deg, transparent 40%, color-mix(in oklab, var(--neon) 18%, transparent) 100%)" }} />

              <div className="relative">
                <div className="mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Send a message</h3>
                  <p className="text-sm text-muted-foreground mt-1">Fill out the form and I'll get back to you shortly.</p>
                </div>

                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <FloatingField label="Your Name" name="name" placeholder="John Doe" required />
                    <FloatingField label="Your Email" name="email" type="email" placeholder="you@example.com" />
                  </div>
                  <FloatingField label="Subject" name="subject" placeholder="Project inquiry, collaboration…" />
                  <FloatingArea label="Message" name="message" rows={5} placeholder="Tell me a bit about your project, timeline, and goals…" required />

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
                    <button
                      disabled={sending}
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-[var(--shadow-glow)] disabled:opacity-60 group"
                      style={{ background: "var(--gradient-primary)" }}
                    >
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      {sending ? "Sending…" : "Send Message"}
                    </button>
                    <p className="text-xs text-muted-foreground">
                      Or email me directly at{" "}
                      <a href={`mailto:${profile.email}`} className="text-[var(--neon)] hover:underline underline-offset-4">
                        {profile.email}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ----- Field primitives ----- */

function FloatingField({
  label, name, type = "text", placeholder, required,
}: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <label className="block group">
      <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground group-focus-within:text-[var(--neon)] transition">
        {label}{required && <span className="text-[var(--neon)]"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 placeholder:text-muted-foreground/50 focus:bg-white/[0.06] focus:border-[var(--neon)]/60 focus:outline-none focus:ring-4 focus:ring-[var(--neon)]/15 transition-all"
      />
    </label>
  );
}

function FloatingArea({
  label, name, placeholder, rows = 5, required,
}: { label: string; name: string; placeholder?: string; rows?: number; required?: boolean }) {
  return (
    <label className="block group">
      <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-muted-foreground group-focus-within:text-[var(--neon)] transition">
        {label}{required && <span className="text-[var(--neon)]"> *</span>}
      </span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full px-4 py-3.5 rounded-xl bg-white/[0.04] border border-white/10 placeholder:text-muted-foreground/50 focus:bg-white/[0.06] focus:border-[var(--neon)]/60 focus:outline-none focus:ring-4 focus:ring-[var(--neon)]/15 transition-all resize-none"
      />
    </label>
  );
}
