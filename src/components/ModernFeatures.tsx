import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Award,
  Clock,
  Users,
  Globe,
  Microscope,
  Factory,
  CheckCircle2,
  Zap
} from "lucide-react";

const ModernFeatures = () => {
  const mainFeatures = [
    {
      icon: Shield,
      title: "WHO-GMP Certified",
      description: "World Health Organization Good Manufacturing Practice compliance ensuring the highest quality standards.",
      gradient: "from-blue-500 to-blue-600",
      stats: "100% Compliant"
    },
    {
      icon: Factory,
      title: "Advanced Manufacturing",
      description: "State-of-the-art 10,000 sq.ft facility with cutting-edge technology and automated processes.",
      gradient: "from-purple-500 to-purple-600",
      stats: "10K Sq.ft Facility"
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock production and customer support ensuring timely delivery and service excellence.",
      gradient: "from-orange-500 to-orange-600",
      stats: "24x7 Services"
    }
  ];

  const certifications = [
    { name: "WHO-GMP Approved", icon: Shield },
    { name: "ISO 9001:2015", icon: Award },
    { name: "HACCP Certified", icon: CheckCircle2 },
    { name: "FDA Registered", icon: Zap },
    { name: "Halal & Kosher", icon: Users },
    { name: "Global Standards", icon: Globe }
  ];

  const capabilities = [
    {
      number: "300M+",
      label: "Annual Production",
      description: "Softgel capsules manufactured yearly"
    },
    {
      number: "25+",
      label: "Global Markets",
      description: "Countries served worldwide"
    },
    {
      number: "200+",
      label: "Satisfied Clients",
      description: "Trust and reliability"
    },
    {
      number: "24/7",
      label: "R&D Support",
      description: "Research & development services"
    }
  ];

  return (
    <section className="section-modern bg-gradient-to-br from-accent/5 to-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            <Microscope className="w-4 h-4 mr-2" />
            Manufacturing Excellence
          </Badge>
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Why Choose</span>
            <br />
            <span className="text-foreground">Briyosis Softcaps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-leading pharmaceutical manufacturing with uncompromising 
            quality standards and innovative solutions.
          </p>
        </div>

        {/* Main Features */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className="card-modern group">
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                  {feature.stats}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities Stats */}
        <div className="bg-gradient-medical rounded-3xl p-12 text-white mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Capabilities</h3>
            <p className="text-xl opacity-90">
              Delivering excellence through scale, innovation, and dedication
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {capabilities.map((cap, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold mb-3">{cap.number}</div>
                <div className="text-xl font-semibold mb-2">{cap.label}</div>
                <div className="text-sm opacity-80">{cap.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">Certifications & Standards</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="card-modern p-6 text-center group">
                <cert.icon className="h-8 w-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-sm font-medium">{cert.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernFeatures;