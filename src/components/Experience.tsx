import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "TechCorp Inc.",
    period: "2022 - Present",
    location: "San Francisco, CA",
    description: "Led development of microservices architecture serving 1M+ users. Built scalable React applications with Node.js backends.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
  },
  {
    title: "Full Stack Developer",
    company: "StartupXYZ",
    period: "2020 - 2022",
    location: "New York, NY", 
    description: "Developed MVP from concept to launch. Implemented real-time features and optimized database performance.",
    technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "GCP"]
  },
  {
    title: "Frontend Developer",
    company: "Digital Agency Pro",
    period: "2019 - 2020",
    location: "Remote",
    description: "Created responsive web applications for various clients. Collaborated with design teams to implement pixel-perfect UIs.",
    technologies: ["React", "SASS", "WordPress", "PHP", "MySQL"]
  },
  {
    title: "Junior Developer",
    company: "CodeBootcamp Graduate",
    period: "2018 - 2019",
    location: "Boston, MA",
    description: "Started my development journey building CRUD applications and learning software engineering fundamentals.",
    technologies: ["JavaScript", "HTML/CSS", "Bootstrap", "jQuery", "Git"]
  }
];

const Experience = () => {
  return (
    <section className="py-20 bg-background" id="experience">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient glow-effect animate-slide-up">
            Experience
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto animate-fade-in-delay">
            A journey through various companies and technologies, building scalable solutions for the future
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Futuristic timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-primary rounded-full shadow-glow animate-pulse-glow"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 ml-20 animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                {/* Enhanced timeline dot */}
                <div className="absolute -left-12 top-8 w-6 h-6 bg-gradient-primary rounded-full border-2 border-background shadow-neon animate-pulse-glow"></div>
                
                <Card className="hover:shadow-neon transition-all duration-500 hover:scale-[1.03] bg-gradient-card border-primary/20 backdrop-blur-glass group">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-foreground group-hover:text-gradient transition-all duration-500">{exp.title}</CardTitle>
                        <CardDescription className="text-lg text-primary font-semibold group-hover:glow-effect transition-all duration-500">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-accent font-medium group-hover:text-primary transition-colors duration-500">{exp.period}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground mb-6 group-hover:text-foreground transition-colors duration-500">{exp.description}</p>
                    <div className="flex flex-wrap gap-3">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-2 bg-gradient-primary/10 text-primary rounded-full text-sm border border-primary/30 hover:bg-gradient-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105 backdrop-blur-glass"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;