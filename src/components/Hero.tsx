import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/50"></div>
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-primary opacity-20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-neon opacity-15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-accent/30 rotate-45 blur-2xl animate-pulse-glow"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(280 100% 70%) 1px, transparent 0)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Main title with enhanced animation */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 text-gradient animate-slide-up glow-effect">
            Full Stack Developer
          </h1>
          
          {/* Subtitle with glass effect */}
          <div className="relative max-w-3xl mx-auto mb-12 animate-fade-in-delay">
            <div className="absolute inset-0 bg-gradient-card rounded-2xl backdrop-blur-glass border border-primary/20"></div>
            <p className="relative text-xl md:text-2xl text-foreground/90 p-6 leading-relaxed">
              Crafting futuristic digital experiences with cutting-edge technologies and innovative solutions
            </p>
          </div>
          
          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-2">
            <Button 
              variant="default" 
              size="lg" 
              className="bg-gradient-primary hover:shadow-neon transition-all duration-500 hover:scale-105 group border-gradient"
            >
              <span className="relative z-10 group-hover:text-glow">View My Work</span>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground hover:shadow-glow-accent transition-all duration-500 hover:scale-105 backdrop-blur-glass"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-accent rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Hero;