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
  CheckCircle,
  Microscope
} from "lucide-react";
import { Link } from "react-router-dom";

const ModernProducts = () => {
  const productCategories = [
    {
      icon: Pill,
      title: "Vitamins & Minerals",
      description: "Essential nutrients for optimal health and wellness",
      gradient: "from-blue-500 to-purple-600",
      features: ["Bioavailable formulations", "Custom dosages", "Quality tested"]
    },
    {
      icon: Heart,
      title: "Carotenoids",
      description: "Antioxidant-rich compounds for cellular protection",
      gradient: "from-orange-500 to-red-600",
      features: ["Natural extraction", "Stable formulations", "High potency"]
    },
    {
      icon: Zap,
      title: "CoEnzyme Q10",
      description: "Cellular energy support and cardiovascular health",
      gradient: "from-yellow-500 to-orange-600",
      features: ["Enhanced absorption", "Pharmaceutical grade", "Third-party tested"]
    },
    {
      icon: Leaf,
      title: "Herbals & Botanicals",
      description: "Traditional plant-based therapeutic compounds",
      gradient: "from-green-500 to-teal-600",
      features: ["Standardized extracts", "Sustainable sourcing", "Potency guaranteed"]
    },
    {
      icon: Droplets,
      title: "Natural Oils",
      description: "Premium omega fatty acids and essential oils",
      gradient: "from-teal-500 to-blue-600",
      features: ["Cold-pressed oils", "Molecular distillation", "Purity verified"]
    },
    {
      icon: Star,
      title: "Specialty SoftGels",
      description: "Advanced formulations for specific health needs",
      gradient: "from-purple-500 to-pink-600",
      features: ["Custom shapes", "Enteric coating", "Targeted delivery"]
    }
  ];

  return (
    <section className="section-modern bg-gradient-to-br from-background via-accent/5 to-primary/5">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
            <Microscope className="w-4 h-4 mr-2" />
            Product Excellence
          </Badge>
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Premium Softgel</span>
            <br />
            <span className="text-foreground">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive range of high-quality softgel capsules manufactured 
            with cutting-edge technology and rigorous quality standards.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {productCategories.map((product, index) => (
            <Card key={index} className="card-modern group overflow-hidden">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <product.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{product.title}</CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="outline" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-innovation rounded-3xl p-12 text-white">
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
                className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-foreground"
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
                className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-foreground"
              >
                <Link to="/contact">
                  Discuss Your Project
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModernProducts;