import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Users, Building2, Clock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const ModernHero = () => {
  const stats = [
    { 
      number: "300M+", 
      label: "Softgels Annually",
      description: "Manufacturing capacity"
    },
    { 
      number: "25+", 
      label: "Countries Served",
      description: "Global reach"
    },
    { 
      number: "200+", 
      label: "Satisfied Clients",
      description: "Trust & reliability"
    },
    { 
      number: "10K", 
      label: "Sq.ft Facility",
      description: "Modern infrastructure"
    }
  ];

  const highlights = [
    { icon: Shield, text: "WHO-GMP Certified" },
    { icon: Clock, text: "24/7 Services" },
    { icon: Building2, text: "State-of-art Facility" },
    { icon: Users, text: "Expert R&D Team" }
  ];

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary/5 via-accent-purple/5 to-secondary/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-accent-purple/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm font-semibold">
                <Shield className="w-4 h-4 mr-2" />
                WHO-GMP Certified Manufacturing
              </Badge>
              
              <h1 className="text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-gradient-primary">Softgel Capsule</span>
                <br />
                <span className="text-gradient-secondary">Manufacturing</span>
                <br />
                <span className="text-foreground">Leaders</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Premium pharmaceutical and nutraceutical softgel solutions with 
                cutting-edge technology, producing over 300 million capsules annually 
                for clients across 25+ countries.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/10">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-gradient-primary hover:shadow-glow text-lg px-8 py-6 rounded-xl">
                <Link to="/products">
                  Explore Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 rounded-xl border-2 hover:bg-primary/5">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="card-modern p-8 text-center group hover:scale-105 transition-all duration-500"
              >
                <div className="text-4xl font-bold text-gradient-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" className="w-full h-24">
          <path 
            d="M0,60 C300,20 600,100 900,60 C1050,30 1150,80 1200,60 L1200,120 L0,120 Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default ModernHero;