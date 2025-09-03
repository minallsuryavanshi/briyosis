import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Users, Building2, Award } from "lucide-react";
import { Link } from "react-router-dom";

const MinimalHero = () => {
  const stats = [
    { 
      number: "300M+", 
      label: "Softgels Annually"
    },
    { 
      number: "25+", 
      label: "Countries Served"
    },
    { 
      number: "200+", 
      label: "Satisfied Clients"
    },
    { 
      number: "10K", 
      label: "Sq.ft Facility"
    }
  ];

  return (
    <section className="min-h-screen flex items-center bg-background">
      <div className="container-minimal">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in py-6 px-8">
            <div className="space-y-6">
              <Badge className="badge-primary">
                <Shield className="w-4 h-4 mr-2" />
                WHO-GMP Certified
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-corporate leading-tight">
                Premium Softgel
                <br />
                <span className="text-gradient-corporate">Manufacturing</span>
              </h1>
              
              <p className="text-xl text-muted-corporate max-w-2xl">
                Leading pharmaceutical manufacturer producing high-quality softgel capsules 
                with cutting-edge technology and rigorous quality standards.
              </p>
            </div>

            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">WHO-GMP Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">10K Sq.ft Facility</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="btn-primary">
                <Link to="/products">
                  View Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="btn-outline">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up px-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="card-elevated p-8 text-center hover-lift"
              >
                <div className="text-3xl font-bold text-gradient-corporate mb-2">
                  {stat.number}
                </div>
                <div className="text-sm font-medium text-muted-corporate">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-5 pt-8 border-t border-border">
          <div className="text-center mb-8">
            <p className="text-sm font-medium text-muted-corporate">Trusted by leading pharmaceutical companies worldwide</p>
          </div>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span className="text-sm font-medium">ISO 9001:2008</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm font-medium">WHO-GMP</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5" />
              <span className="text-sm font-medium">FDA Registered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalHero;