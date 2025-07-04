import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "technologies", label: "Tech Stack" },
    { id: "opensource", label: "Open Source" },
    { id: "3d-modeling", label: "3D Design" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? "bg-background/70 backdrop-blur-glass border-b border-primary/20 shadow-neon" 
        : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-xl font-bold text-gradient glow-effect animate-pulse-glow">
            &lt;Developer /&gt;
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`transition-all duration-500 hover:scale-105 ${
                  activeSection === item.id
                    ? "bg-gradient-primary text-primary-foreground shadow-glow border-gradient"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10 hover:shadow-glow-accent backdrop-blur-glass"
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* CTA Button */}
          <Button 
            variant="default" 
            size="sm" 
            className="bg-gradient-neon hover:shadow-neon transition-all duration-500 hover:scale-105 glow-effect animate-pulse-glow"
            onClick={() => scrollToSection("contact")}
          >
            Hire Me
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden bg-background/95 backdrop-blur-lg border-t border-border/50">
        <div className="flex overflow-x-auto py-2 px-4 space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              onClick={() => scrollToSection(item.id)}
              className={`whitespace-nowrap transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-primary/10 text-primary border border-primary/20"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;