// components/MinimalFeatures.jsx
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Factory,
  Clock,
  Users,
  Award,
  Microscope,
  CheckCircle,
  Globe
} from "lucide-react";

const MinimalFeatures = () => {
  const features = [
    {
      icon: Shield,
      title: "WHO-GMP Certified",
      description: "World Health Organization Good Manufacturing Practice compliance ensuring the highest quality standards in pharmaceutical manufacturing."
    },
    {
      icon: Factory,
      title: "Advanced Manufacturing",
      description: "State-of-the-art 10,000 sq.ft facility equipped with cutting-edge technology and automated production systems."
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock production capabilities and customer support ensuring timely delivery and service excellence."
    },
    {
      icon: Users,
      title: "Expert R&D Team",
      description: "Dedicated research and development professionals focused on innovation and custom formulation solutions."
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "Rigorous testing protocols and quality control measures at every stage of the manufacturing process."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving clients across 25+ countries with international quality standards and regulatory compliance."
    }
  ];

  const certifications = [
    "WHO-GMP Approved",
    "ISO 9001:2008",
    "NAFDAC Certified", 
    "FDA Registered",
    "GMP Compliant Facility",
    "Rigorous Quality"
  ];

  return (
    <section className="section-corporate bg-gradient-minimal">
      <div className="container-minimal">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="badge-primary mb-4 flex items-center justify-center gap-2">
            <Microscope className="w-4 h-4" />
            Manufacturing Excellence
          </Badge>
          <h2 className="text-4xl font-bold text-corporate mb-6">
            Why Choose Briyosis Softcaps
          </h2>
          <p className="text-xl text-muted-corporate max-w-3xl mx-auto">
            Industry-leading pharmaceutical manufacturing with uncompromising 
            quality standards and innovative solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="card-elevated hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-corporate">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-muted-corporate leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Capabilities Section */}
        <div className="bg-primary text-primary-foreground rounded-2xl p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Our Manufacturing Capabilities</h3>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Delivering excellence through scale, innovation, and unwavering commitment to quality
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">300M+</div>
              <div className="text-lg font-medium mb-1">Annual Production</div>
              <div className="text-sm opacity-80">Softgel capsules manufactured yearly</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg font-medium mb-1">Global Markets</div>
              <div className="text-sm opacity-80">Countries served worldwide</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">200+</div>
              <div className="text-lg font-medium mb-1">Satisfied Clients</div>
              <div className="text-sm opacity-80">Trust and reliability</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-lg font-medium mb-1">Support</div>
              <div className="text-sm opacity-80">Research & development services</div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-corporate mb-8">
            Certifications & Compliance
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="card-minimal p-4 flex items-center space-x-2 hover-lift"
              >
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium text-corporate">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalFeatures;
