import { ExternalLink, Trophy, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Projects & Awards
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Highlighted projects demonstrating system architecture and end-to-end delivery capabilities.
        </p>

        {/* Featured Project */}
        <div className="bg-card border border-border rounded-lg p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Trophy className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">AI Filing System</h3>
              <p className="text-primary font-mono text-sm">
                Qualcomm Edge AI Hackathon Champion 2025
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground mb-2">Problem</h4>
                <p className="text-muted-foreground">
                  Traditional document filing systems lack intelligent categorization, 
                  requiring manual sorting and causing inefficiencies in enterprise workflows.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">Architecture</h4>
                <p className="text-muted-foreground">
                  Edge-optimized LLM pipeline with on-device inference, utilizing Qualcomm's 
                  NPU acceleration for real-time document processing and classification.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-2">My Role</h4>
                <p className="text-muted-foreground">
                  End-to-end system design — from architecture planning to deployment optimization, 
                  including model quantization and edge deployment strategies.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground">
                "Exceptional demonstration of practical AI deployment with clear 
                understanding of edge computing constraints and optimization techniques."
                <footer className="mt-2 text-sm not-italic text-primary">
                  — Qualcomm Hackathon Judges
                </footer>
              </blockquote>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="font-mono text-xs">Edge AI</Badge>
                <Badge variant="secondary" className="font-mono text-xs">LLM</Badge>
                <Badge variant="secondary" className="font-mono text-xs">Qualcomm NPU</Badge>
                <Badge variant="secondary" className="font-mono text-xs">On-device</Badge>
              </div>

              <Button asChild variant="outline" className="gap-2 mt-4">
                <a href="https://news.yahoo.com" target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={16} />
                  Yahoo News Coverage
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Other Competitions */}
        <h3 className="text-xl font-semibold text-foreground mb-6">Other Competitions</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="text-primary" size={20} />
              <h4 className="font-semibold text-foreground">Mei-Chu Hackathon</h4>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Developed embedded AI solution with focus on real-time processing 
              and resource-constrained deployment.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="font-mono text-xs">Embedded</Badge>
              <Badge variant="outline" className="font-mono text-xs">Edge AI</Badge>
              <Badge variant="outline" className="font-mono text-xs">Optimization</Badge>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <Zap className="text-primary" size={20} />
              <h4 className="font-semibold text-foreground">Industrial AI Challenge</h4>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Computer vision system for manufacturing quality control 
              with 93% mAP accuracy achievement.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="font-mono text-xs">Computer Vision</Badge>
              <Badge variant="outline" className="font-mono text-xs">QC Automation</Badge>
              <Badge variant="outline" className="font-mono text-xs">YOLO</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
