import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const downloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Place your resume PDF in the public folder
    link.download = 'Bhavana_Tammineedi_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: "2s"
      }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-poppins">
              <span className="gradient-text">Bhavana Tammineedi</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-medium text-glow-mint">
              Full Stack Developer | Passionate About Building and Learning
            </p>
          </div>

          {/* Introduction */}
          <p className="text-base md:text-lg text-foreground/85 max-w-2xl mx-auto leading-relaxed">
            I'm an aspiring full-stack developer who loves turning ideas into digital solutions. 
            I enjoy learning, experimenting, and exploring both front-end and back-end technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button onClick={scrollToProjects} size="lg" className="glass hover-glow-mint text-foreground border border-primary/30 px-8 py-6 text-base group bg-[#040405]">
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button onClick={downloadResume} size="lg" variant="outline" className="glass-strong hover-glow-lavender border-secondary/30 px-8 py-6 text-base">
              <Download className="mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;