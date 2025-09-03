import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Star,
  CheckCircle,
  Download,
  ArrowRight,
  Microscope,
  Factory
} from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  // Real product categories from briyosissoftcaps.com
  const productCategories = [
    {
      
      title: "Vitamins & Minerals",
      description: "Essential nutrients and micronutrients in bioavailable softgel form",
      gradient: "from-blue-500 to-purple-600",
      features: ["Multi-vitamins", "Mineral complexes", "Targeted nutrition", "Custom formulations"]
    },
    {
      
      title: "Carotenoids", 
      description: "Antioxidant-rich compounds for cellular protection and health",
      gradient: "from-orange-500 to-red-600",
      features: ["Beta-carotene", "Lycopene", "Lutein", "Astaxanthin"]
    },
    {
      
      title: "CoEnzyme Q10",
      description: "Cellular energy support and cardiovascular health formulations",
      gradient: "from-yellow-500 to-orange-600", 
      features: ["Ubiquinol", "Ubiquinone", "Enhanced absorption", "Heart health"]
    },
    {
      
      title: "Herbals & Botanicals",
      description: "Traditional plant-based therapeutic compounds and extracts",
      gradient: "from-green-500 to-teal-600",
      features: ["Standardized extracts", "Herbal blends", "Phytoceuticals", "Botanical oils"]
    },
    {
      
      title: "Natural Oils",
      description: "Premium omega fatty acids and essential oil formulations",
      gradient: "from-teal-500 to-blue-600",
      features: ["Omega-3", "Fish oil", "Flaxseed oil", "Evening primrose"]
    },
    {
      
      title: "Specialty SoftGel",
      description: "Advanced custom formulations for specific therapeutic needs",
      gradient: "from-purple-500 to-pink-600",
      features: ["Custom shapes", "Enteric coating", "Sustained release", "Targeted delivery"]
    }
  ];

  const capabilities = [
    "WHO-GMP Certified Manufacturing",
    "300M+ Annual Production Capacity", 
    "24/7 Operations & Support",
    "Custom Formulation Development",
    "Multiple Gelatin Options",
    "Various Sizes & Colors Available",
    "Third-Party Quality Testing",
    "Global Regulatory Compliance"
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Modern Header */}
      <section className="section-modern bg-gradient-innovation text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">
            <Factory className="w-4 h-4 mr-2" />
            Product Excellence
          </Badge>
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            <span className="block">Premium Softgel</span>
            <span className="block">Product Range</span>
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-90">
            Comprehensive portfolio of high-quality softgel capsules manufactured 
            with WHO-GMP standards, serving pharmaceutical and nutraceutical industries 
            across 25+ countries with 300M+ annual production capacity.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section-modern bg-gradient-to-br from-background via-accent/5 to-primary/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary border-secondary/20">
              <Microscope className="w-4 h-4 mr-2" />
              Product Categories
            </Badge>
            <h2 className="text-5xl font-bold mb-6">
              <span className="text-gradient-primary">Our Manufacturing</span>
              <br />
              <span className="text-foreground">Specialties</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category, index) => (
              <Card key={index} className="card-modern group">
                <CardHeader className="pb-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  </div>
                  <CardTitle className="text-2xl mb-3">{category.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
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
        </div>
      </section>

      {/* Manufacturing Capabilities */}
<section className="section-padding bg-gradient-to-br from-secondary/5 to-accent-orange/5 py-6">
  <div className="container mx-auto px-4">
    <div className="max-w-5xl mx-auto text-center space-y-8">

      <h2 className="text-4xl md:text-5xl font-bold mb-4">
        <span className="text-gradient-secondary">Manufacturing</span>
        <br />
        <span className="text-foreground">Excellence</span>
      </h2>

      <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed px-4 md:px-0">
        State-of-the-art 10,000 sq.ft facility with cutting-edge technology 
        ensuring consistent quality and scalable production.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {capabilities.map((capability, index) => (
          <Card key={index} className="card-modern p-6 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="flex items-center space-x-3 p-2">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="font-medium text-sm">{capability}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </div>
</section>


{/* Custom Formulations CTA */}
<section className="section-padding py-4 bg-accent/10 text-gray-800">
  <div className="container mx-auto px-10">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

      {/* Left Content */}
      <div className="space-y-6 lg:space-y-8">
        <Badge className="inline-flex items-center px-3 py-1 rounded-full bg-gray-200 text-gray-800 text-sm font-medium mb-4">
          <Star className="w-4 h-4 mr-2" />
          Custom Solutions
        </Badge>

        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
          Custom Formulation & Manufacturing Services
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Partner with our experienced R&D team and WHO-GMP certified facility to develop 
          and manufacture custom softgel formulations tailored to your exact specifications 
          and market requirements.
        </p>

        <div className="grid gap-3 md:gap-4">
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span>Formula Development & Optimization</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span>Stability Testing & Documentation</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span>Regulatory Support & Compliance</span>
          </div>
          <div className="flex items-center space-x-3">
            <CheckCircle className="h-5 w-5 text-primary" />
            <span>Scale-up to Commercial Production</span>
          </div>
        </div>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="bg-white/10 border-gray-300 text-gray-800 hover:bg-gray-100 hover:text-primary transition-all duration-300 mt-4"
        >
          <Link to="/contact" className="flex items-center justify-center gap-2">
            Discuss More
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Button>
      </div>

      {/* Right Content */}
      <div className="bg-white/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 space-y-6 lg:space-y-8">
        <h3 className="text-3xl font-bold mb-2">Ready to Get Started?</h3>
        <p className="text-lg text-gray-700 leading-relaxed">
          Download our comprehensive product catalog and capabilities guide 
          to learn more about our manufacturing services and product portfolio.
        </p>

        <div className="space-y-3">
          <Button
            variant="outline"
            className="bg-white/10 border-gray-300 text-gray-800 hover:bg-gray-100 hover:text-primary w-full flex items-center justify-center gap-2 transition-all duration-300"
            size="lg"
          >
            <Download className="h-5 w-5" />
            Download Product Catalog
          </Button>

          <Button
            asChild
            variant="outline"
            className="bg-white/10 border-gray-300 text-gray-800 hover:bg-gray-100 hover:text-primary w-full transition-all duration-300"
            size="lg"
          >
            <Link to="flex items-center justify-center">Request Custom Quote</Link>
          </Button>
        </div>
      </div>

    </div>
  </div>
</section>

    </div>
  );
};

export default Products;