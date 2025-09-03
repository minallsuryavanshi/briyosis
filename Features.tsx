import { Microscope, Shield, Award, Zap, Globe, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Microscope,
      title: "Advanced Technology",
      description: "State-of-the-art manufacturing equipment with precision engineering for consistent quality.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      hoverColor: "hover:bg-primary/20"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Rigorous testing protocols and ISO-certified manufacturing processes ensure product excellence.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      hoverColor: "hover:bg-secondary/20"
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Multiple awards and certifications from leading pharmaceutical and healthcare organizations.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      hoverColor: "hover:bg-primary/20"
    },
    {
      icon: Zap,
      title: "Fast Production",
      description: "Optimized manufacturing processes ensuring quick turnaround times without compromising quality.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      hoverColor: "hover:bg-secondary/20"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving customers worldwide with international shipping and regulatory compliance.",
      color: "text-primary",
      bgColor: "bg-primary/10",
      hoverColor: "hover:bg-primary/20"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced professionals with decades of expertise in pharmaceutical manufacturing.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      hoverColor: "hover:bg-secondary/20"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-background to-accent/5">
      <div className="container-prose">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-semibold text-primary mb-6">
            Why Choose Briyosis
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Excellence in Every <span className="text-primary">Capsule</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Discover what makes Briyosis Soft Caps the preferred choice for pharmaceutical 
            and nutraceutical companies worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group p-8 rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm card-hover animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 ${feature.bgColor} ${feature.hoverColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300`}>
                  <Icon className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;