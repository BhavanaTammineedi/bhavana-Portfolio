import { ExternalLink, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description: "Web app that provides real-time weather updates using API integration.",
      tech: ["HTML", "CSS", "JavaScript", "Weather API"],
      link: "#",
    },
    {
      title: "RecipeHub",
      description: "Clean UI platform to explore and view food recipes with responsive layout.",
      tech: ["React", "CSS", "Recipe API"],
      link: "#",
    },
    {
      title: "Credit Card Fraud Detection",
      description: "ML-based fraud detection model built with Python and Streamlit.",
      tech: ["Python", "Machine Learning", "Streamlit", "Pandas"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text">
              Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-strong rounded-2xl p-6 hover-glow-mint hover:scale-105 transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="hover:text-primary transition-colors"
                      onClick={() => window.open(project.link, "_blank")}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Project Content */}
                  <div>
                    <h3 className="text-xl font-semibold font-poppins mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xs px-3 py-1 rounded-full bg-primary/5 text-primary/80 border border-primary/20 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <Button
                    className="w-full glass hover-glow-mint border border-primary/30 group-hover:bg-primary/10 transition-all"
                    onClick={() => window.open(project.link, "_blank")}
                  >
                    View Project
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
