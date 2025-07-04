import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const contactMethods = [
  {
    icon: "📧",
    title: "Email",
    description: "Let's discuss your project",
    value: "hello@developer.com",
    action: "Send Email"
  },
  {
    icon: "💼",
    title: "LinkedIn", 
    description: "Connect professionally",
    value: "/in/full-stack-developer",
    action: "Connect"
  },
  {
    icon: "🐱",
    title: "GitHub",
    description: "Check out my code",
    value: "/full-stack-developer",
    action: "Follow"
  },
  {
    icon: "🐦", 
    title: "Twitter",
    description: "Follow my journey",
    value: "@fullstackdev",
    action: "Follow"
  }
];

const Contact = () => {
  return (
    <section className="py-20 bg-secondary/50" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's collaborate and build something amazing together
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-gradient-secondary border-border/50 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
              <CardDescription className="text-card-foreground">
                Tell me about your project and let's start the conversation
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe"
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-foreground">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Project Collaboration"
                    className="bg-background border-border focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    className="bg-background border-border focus:border-primary min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Let's Connect
              </h3>
              <p className="text-muted-foreground">
                Choose your preferred way to reach out. I'm always excited to discuss new opportunities and interesting projects.
              </p>
            </div>

            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <Card key={index} className="group bg-gradient-secondary border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02]">
                  <CardContent className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                        {method.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{method.title}</h4>
                        <p className="text-sm text-muted-foreground">{method.description}</p>
                        <p className="text-sm text-primary font-medium">{method.value}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      {method.action}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Availability Status */}
            <Card className="bg-gradient-secondary border-border/50">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for New Projects</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Currently accepting new client work and interesting collaborations
                </p>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-gradient-secondary border-border/50">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-3">⚡ Quick Response</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>📧 Email: Within 24 hours</p>
                  <p>💼 LinkedIn: Within 12 hours</p>
                  <p>📱 Urgent projects: Same day</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you need a full-stack web application, mobile app, or custom solution, 
            I'm here to help bring your vision to reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
              Schedule a Call
            </Button>
            <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              View Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;