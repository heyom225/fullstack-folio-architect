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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through various companies and technologies, building scalable solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary"></div>
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 ml-16">
                {/* Timeline dot */}
                <div className="absolute -left-8 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow"></div>
                
                <Card className="hover:shadow-card transition-all duration-300 hover:scale-[1.02] bg-gradient-secondary border-border/50">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div>
                        <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                        <CardDescription className="text-lg text-primary font-semibold">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-accent font-medium">{exp.period}</p>
                        <p className="text-sm text-muted-foreground">{exp.location}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-card-foreground mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
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