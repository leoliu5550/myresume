import { ArrowRight, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="font-mono text-primary text-sm mb-4 tracking-wide">
            Senior Applied AI / LLM Systems Engineer
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Leo Liu
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
            On-prem & Hybrid AI Systems
          </p>
          <p className="text-lg text-muted-foreground/80 mb-8">
            Semiconductor · Industrial AI · MLOps
          </p>

          <div className="max-w-2xl mb-10">
            <p className="text-muted-foreground leading-relaxed">
              Applied AI and LLM systems engineer with end-to-end ownership from system analysis 
              to production deployment. Specialized in secure, on-prem and hybrid AI systems 
              for semiconductor and industrial domains.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="gap-2">
              <a href="#projects">
                View Projects
                <ArrowRight size={18} />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="gap-2">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github size={18} />
                GitHub
              </a>
            </Button>
            <Button asChild variant="ghost" size="lg" className="gap-2">
              <a href="#contact">
                <Mail size={18} />
                Contact
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
