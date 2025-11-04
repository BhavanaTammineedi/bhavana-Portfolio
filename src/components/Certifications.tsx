import { Award, CheckCircle } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Hands-on Supervised Machine Learning with Python",
      issuer: "Infosys Springboard",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco",
    },
    {
      title: "ORACLE Database Foundations",
      issuer: "Oracle",
    },
    {
      title: "Machine Learning Course",
      issuer: "SkillDzire",
    },
  ];

  return (
    <section id="certifications" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text">
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`glass-strong rounded-xl p-6 ${
                  index % 2 === 0 ? "hover-glow-mint" : "hover-glow-lavender"
                } transition-all duration-300 group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      index % 2 === 0 ? "bg-primary/10" : "bg-secondary/10"
                    } group-hover:scale-110 transition-transform`}
                  >
                    <Award
                      className={`w-6 h-6 ${
                        index % 2 === 0 ? "text-primary" : "text-secondary"
                      }`}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold font-poppins mb-2 group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
