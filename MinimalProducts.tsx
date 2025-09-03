import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Pill, 
  Heart, 
  Leaf, 
  Zap, 
  Droplets, 
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const MinimalProducts = () => {
  const productCategories = [
    {
      icon: Pill,
      title: "Vitamins & Minerals",
      description: "Essential nutrients for optimal health and wellness",
      features: ["Bioavailable formulations", "Custom dosages", "Quality tested"]
    },
    {
      icon: Heart,
      title: "Carotenoids",
      description: "Antioxidant-rich compounds for cellular protection",
      features: ["Natural extraction", "Stable formulations", "High potency"]
    },
    {
      icon: Zap,
      title: "CoEnzyme Q10",
      description: "Cellular energy support and cardiovascular health",
      features: ["Enhanced absorption", "Pharmaceutical grade", "Third-party tested"]
    },
    {
      icon: Leaf,
      title: "Herbals & Botanicals",
      description: "Traditional plant-based therapeutic compounds",
      features: ["Standardized extracts", "Sustainable sourcing", "Potency guaranteed"]
    },
    {
      icon: Droplets,
      title: "Natural Oils",
      description: "Premium omega fatty acids and essential oils",
      features: ["Cold-pressed oils", "Molecular distillation", "Purity verified"]
    },
    {
      icon: Star,
      title: "Specialty Formulations",
      description: "Advanced custom formulations for specific health needs",
      features: ["Custom shapes", "Enteric coating", "Targeted delivery"]
    }
  ];

  return (
    <section className="section-corporate">
      <div className="container-minimal">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="badge-primary mb-4">
            <Pill className="w-4 h-4 mr-2" />
            Product Portfolio
          </Badge>
          <h2 className="text-4xl font-bold text-corporate mb-6">
            Comprehensive Softgel Solutions
          </h2>
          <p className="text-xl text-muted-corporate max-w-3xl mx-auto">
            Wide range of high-quality softgel capsules manufactured with precision 
            engineering and stringent quality control standards.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((product, index) => (
            <Card key={index} className="card-elevated hover-lift">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <product.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-corporate">{product.title}</CardTitle>
                <p className="text-muted-corporate leading-relaxed">
                  {product.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-corporate">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full btn-outline"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-corporate rounded-2xl p-12 text-center text-primary-foreground">
          <h3 className="text-3xl font-bold mb-4">
            Custom Formulation Services
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Partner with our experienced R&D team to develop tailored 
            softgel formulations that meet your exact specifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary"
            >
              <Link to="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary"
            >
              <Link to="/contact">
                Get Custom Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalProducts;