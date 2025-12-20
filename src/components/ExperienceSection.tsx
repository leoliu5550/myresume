import { Badge } from "@/components/ui/badge";

interface Experience {
  company: string;
  role: string;
  period: string;
  badges: string[];
  highlights: string[];
}

const experiences: Experience[] = [
  {
    company: "Dalabx",
    role: "System Analyst / LLM Product Owner",
    period: "2023 — Present",
    badges: ["On-prem LLM", "Semiconductor", "SecDevOps", "Data Analysis"],
    highlights: [
      "Led end-to-end development of on-premise LLM systems for semiconductor manufacturing",
      "Architected secure AI infrastructure with hybrid cloud deployment patterns",
      "Owned product roadmap and technical decision-making for AI platform initiatives",
      "Implemented SecDevOps practices ensuring compliance with industry security standards",
    ],
  },
  {
    company: "Previous Experience",
    role: "Symbio / Jubo — AI Engineer",
    period: "2021 — 2023",
    badges: ["Computer Vision", "MLOps", "Healthcare AI"],
    highlights: [
      "Achieved 93% mAP on computer vision models for industrial inspection",
      "Delivered NTD 540,000 in cost savings through automation initiatives",
      "Built and deployed ML pipelines for production healthcare applications",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Experience
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Building production AI systems with focus on security, scalability, and real-world impact.
        </p>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-border hover:border-primary transition-colors"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
              
              <div className="mb-4">
                <p className="font-mono text-sm text-primary mb-1">{exp.period}</p>
                <h3 className="text-xl font-semibold text-foreground">{exp.company}</h3>
                <p className="text-muted-foreground">{exp.role}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {exp.badges.map((badge) => (
                  <Badge key={badge} variant="secondary" className="font-mono text-xs">
                    {badge}
                  </Badge>
                ))}
              </div>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1.5">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
