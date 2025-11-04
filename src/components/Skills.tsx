import { Code, Wrench, Lightbulb, Database } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code,
      color: "mint",
      skills: ["Python", "Java", "HTML", "CSS", "MySQL"],
    },
    {
      title: "Concepts",
      icon: Database,
      color: "lavender",
      skills: ["OOPs", "Operating Systems", "DBMS", "Machine Learning Basics"],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "mint",
      skills: ["VS Code", "Google Colab", "Jupyter Notebook"],
    },
    {
      title: "Soft Skills",
      icon: Lightbulb,
      color: "lavender",
      skills: ["Communication", "Teamwork", "Adaptability"],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-background-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text">
              Skills & Tools
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <div
                  key={categoryIndex}
                  className={`glass-strong rounded-2xl p-8 ${
                    category.color === "mint" ? "hover-glow-mint" : "hover-glow-lavender"
                  } transition-all duration-300`}
                  style={{ animationDelay: `${categoryIndex * 0.1}s` }}
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-lg ${
                        category.color === "mint" ? "bg-primary/10" : "bg-secondary/10"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          category.color === "mint" ? "text-primary" : "text-secondary"
                        }`}
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold font-poppins">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-4 py-2 rounded-full glass text-sm font-medium ${
                          category.color === "mint"
                            ? "border-primary/30 hover:border-primary/60 hover:bg-primary/10"
                            : "border-secondary/30 hover:border-secondary/60 hover:bg-secondary/10"
                        } border transition-all duration-300 cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
