import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Information Technology",
      institution: "SVECW, Bhimavaram",
      duration: "2022 – Present",
      score: "CGPA: 8.22",
    },
    {
      degree: "Intermediate",
      institution: "Sasi Junior College",
      duration: "2020 – 2022",
      score: "89.9%",
    },
    {
      degree: "10th Grade",
      institution: "Sasi English Medium High School",
      duration: "Completed",
      score: "",
    },
  ];

  return (
    <section id="education" className="py-20 md:py-32 bg-background-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text">
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2"></div>

            {/* Education Cards */}
            <div className="space-y-12">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full bg-primary pulse-glow z-10"></div>

                  {/* Card */}
                  <div className={`w-full md:w-5/12 ml-8 md:ml-0 ${index % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"}`}>
                    <div className="glass-strong rounded-xl p-6 hover-glow-lavender transition-all duration-300 group">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-secondary/10 group-hover:bg-secondary/20 transition-colors">
                          {index === 0 ? (
                            <GraduationCap className="w-6 h-6 text-secondary" />
                          ) : (
                            <Award className="w-6 h-6 text-secondary" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold font-poppins mb-1 group-hover:text-secondary transition-colors">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-foreground/70 mb-2">
                            {edu.institution}
                          </p>
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-foreground/60">{edu.duration}</span>
                            {edu.score && (
                              <span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary font-medium">
                                {edu.score}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
