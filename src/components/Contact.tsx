import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Code2, ChevronUp } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/BhavanaTammineedi",
      color: "mint",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/bhavana-tammineedi-330937258",
      color: "lavender",
    },
    {
      name: "HackerRank",
      icon: Code2,
      url: "https://www.hackerrank.com/profile/22b01a420",
      color: "mint",
    },
    {
      name: "CodeChef",
      icon: Code2,
      url: "https://www.codechef.com/users/bhavana1503",
      color: "lavender",
    },
    {
      name: "LeetCode",
      icon: Code2,
      url: "https://leetcode.com/u/Bhavana1503/",
      color: "mint",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-background-secondary/50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Title */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold font-poppins gradient-text">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>

          {/* Contact Form */}
          <div className="glass-strong rounded-2xl p-8 md:p-12 hover-glow-mint">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="glass border-primary/30 focus:border-primary h-12"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="glass border-primary/30 focus:border-primary h-12"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="glass border-primary/30 focus:border-primary min-h-[150px] resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full glass hover-glow-mint border border-primary/30 h-12 text-base"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Social Links */}
          <div className="space-y-6">
            <p className="text-center text-foreground/70">Or connect with me on:</p>
            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`glass p-4 rounded-xl ${
                      social.color === "mint" ? "hover-glow-mint" : "hover-glow-lavender"
                    } transition-all duration-300 group hover:scale-110`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        social.color === "mint" ? "text-primary" : "text-secondary"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 glass-strong hover-glow-lavender rounded-full transition-all duration-300 hover:scale-110 z-40"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 text-secondary" />
      </button>
    </section>
  );
};

export default Contact;
