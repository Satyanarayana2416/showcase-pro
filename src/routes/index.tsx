import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/portfolio/Navbar";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Education } from "@/components/sections/Education";
import { Projects } from "@/components/sections/Projects";
import { Certifications } from "@/components/sections/Certifications";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Certifications />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Toaster richColors position="bottom-right" />
    </div>
  );
}
