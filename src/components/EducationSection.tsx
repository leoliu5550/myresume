import { GraduationCap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EducationSection = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Education
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Academic foundation in computer science and artificial intelligence.
        </p>

        <div className="max-w-2xl">
          <div className="flex items-start gap-4 bg-card border border-border rounded-lg p-6">
            <div className="p-3 bg-primary/10 rounded-lg">
              <GraduationCap className="text-primary" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">
                National University
              </h3>
              <p className="text-muted-foreground mb-3">
                Bachelor's Degree in Computer Science & Information Engineering
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="font-mono text-xs">
                  Object Detection
                </Badge>
                <Badge variant="secondary" className="font-mono text-xs">
                  YOLO
                </Badge>
                <Badge variant="secondary" className="font-mono text-xs">
                  RT-DETR
                </Badge>
                <Badge variant="secondary" className="font-mono text-xs">
                  Deep Learning
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
