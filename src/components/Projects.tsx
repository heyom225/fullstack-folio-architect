import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built for scalability with microservices architecture.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Docker"],
    github: "https://github.com/example/ecommerce",
    demo: "https://ecommerce-demo.com",
    featured: true
  },
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, file sharing, and team analytics. Progressive Web App with offline capabilities.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "PWA"],
    github: "https://github.com/example/taskapp",
    demo: "https://taskapp-demo.com",
    featured: true
  },
  {
    title: "AI Chat Interface",
    description: "Modern chat application with AI integration, real-time messaging, and smart responses. Built with modern React patterns and WebSocket connections.",
    image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "OpenAI API", "WebSocket", "TailwindCSS"],
    github: "https://github.com/example/ai-chat",
    demo: "https://ai-chat-demo.com",
    featured: false
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for data analytics with real-time charts, filtering, and export capabilities. Handles large datasets efficiently.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis"],
    github: "https://github.com/example/dashboard",
    demo: "https://dashboard-demo.com",
    featured: false
  },
  {
    title: "Social Media Platform",
    description: "Full-featured social platform with posts, comments, likes, and real-time notifications. Includes image upload and processing.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    technologies: ["Next.js", "GraphQL", "Prisma", "AWS S3", "Cloudinary"],
    github: "https://github.com/example/social",
    demo: "https://social-demo.com",
    featured: false
  },
  {
    title: "DevOps Monitoring Tool",
    description: "Comprehensive monitoring solution for microservices with alerting, logging, and performance metrics visualization.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop",
    technologies: ["React", "Go", "Prometheus", "Grafana", "Kubernetes"],
    github: "https://github.com/example/monitoring",
    demo: "https://monitoring-demo.com",
    featured: false
  }
];

const Projects = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="py-20 bg-secondary/50" id="projects">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work, from concept to deployment
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden bg-gradient-secondary border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl text-foreground">{project.title}</CardTitle>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">Featured</Badge>
                </div>
                <CardDescription className="text-card-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-accent/10 text-accent rounded text-sm border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button variant="default" size="sm" className="bg-gradient-primary hover:shadow-glow">
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <Card key={index} className="group bg-gradient-secondary border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-foreground">{project.title}</CardTitle>
                <CardDescription className="text-sm text-card-foreground line-clamp-3">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-muted-foreground text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1 text-xs border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    Demo
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 text-xs border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
