import { MapPin, GraduationCap, Mail, Phone } from "lucide-react";

const About = () => {
  const infoCards = [
    {
      icon: MapPin,
      label: "Location",
      value: "Eluru, Andhra Pradesh",
      color: "mint",
    },
    {
      icon: GraduationCap,
      label: "Education",
      value: "B.Tech in Information Technology",
      color: "lavender",
    },
    {
      icon: Mail,
      label: "Email",
      value: "bhavanatammineedi6@gmail.com",
      color: "mint",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9392149463",
      color: "lavender",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Description */}
          <div className="glass-strong rounded-2xl p-8 md:p-12 hover-glow-mint">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed text-center max-w-3xl mx-auto">
              I'm Bhavana, a B.Tech Information Technology student at SVECW, Bhimavaram. 
              I'm passionate about software development, exploring modern web technologies, 
              and creating solutions that make life simpler. My strengths include adaptability, 
              problem-solving, and consistent learning.
            </p>
          </div>

          {/* Info Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {infoCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <div
                  key={index}
                  className={`glass rounded-xl p-6 ${
                    card.color === "mint" ? "hover-glow-mint" : "hover-glow-lavender"
                  } transition-all duration-300 group`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg ${
                        card.color === "mint" ? "bg-primary/10" : "bg-secondary/10"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          card.color === "mint" ? "text-primary" : "text-secondary"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground/60 mb-1">{card.label}</p>
                      <p className="text-base md:text-lg font-medium text-foreground">
                        {card.value}
                      </p>
                    </div>
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

export default About;
