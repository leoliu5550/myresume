import { Database, Server, Code, Cloud } from "lucide-react";

interface SkillCategory {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: <Database className="text-primary" size={24} />,
    title: "Data & AI",
    skills: [
      "EDA & Feature Engineering",
      "Computer Vision (YOLO, RT-DETR)",
      "LLM & RAG Systems",
      "NLP & Text Processing",
    ],
  },
  {
    icon: <Server className="text-primary" size={24} />,
    title: "Systems & Infra",
    skills: [
      "Docker & Containerization",
      "MLflow & DVC",
      "MinIO Object Storage",
      "On-prem Deployment",
    ],
  },
  {
    icon: <Code className="text-primary" size={24} />,
    title: "Programming",
    skills: [
      "Python",
      "SQL",
      "Shell Scripting",
      "Git & Version Control",
    ],
  },
  {
    icon: <Cloud className="text-primary" size={24} />,
    title: "Cloud",
    skills: [
      "AWS (EC2, S3, Lambda)",
      "Oracle Cloud Infrastructure",
      "Google Cloud Platform",
      "Hybrid Cloud Architecture",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Skills
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Technical expertise spanning data science, systems engineering, and cloud infrastructure.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                {category.icon}
                <h3 className="font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                    {skill}
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

export default SkillsSection;
