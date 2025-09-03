import MinimalHero from "@/components/MinimalHero";
import MinimalProducts from "@/components/MinimalProducts";
import MinimalFeatures from "@/components/MinimalFeatures";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight,
  Star,
  Phone,
  Mail,
  MapPin,
  Clock
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "PharmaCorp Industries", 
      quote: "Briyosis Softcaps has been our trusted manufacturing partner for over 5 years. Their quality, reliability, and customer service are truly exceptional.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "NutriHealth Solutions",
      quote: "The WHO-GMP certification and consistent quality make them our preferred choice for all softgel manufacturing needs.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Minimal Hero Section */}
      <MinimalHero />

      {/* Products Section */}
      <MinimalProducts />

      {/* Features Section */}
      <MinimalFeatures />

      {/* Testimonials */}
      <section className="section-corporate bg-gradient-minimal">
        <div className="container-minimal">
          <div className="text-center mb-16">
            <Badge className="badge-primary mb-4">
              <Star className="w-4 h-4 mr-2" />
              Client Testimonials
            </Badge>
            <h2 className="text-4xl font-bold text-corporate mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-corporate max-w-2xl mx-auto">
              Trusted by leading pharmaceutical companies worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elevated hover-lift">
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-muted-corporate mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-lg text-corporate">{testimonial.name}</div>
                    <div className="text-primary font-medium">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-corporate bg-primary text-primary-foreground">
        <div className="container-minimal text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto opacity-90">
            Contact our team to discuss your pharmaceutical manufacturing requirements 
            and discover how we can support your business growth.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Phone className="h-6 w-6 mx-auto mb-3" />
              <div className="text-sm opacity-80 mb-1">Phone</div>
              <div className="font-medium">+91-265-2334455</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Mail className="h-6 w-6 mx-auto mb-3" />
              <div className="text-sm opacity-80 mb-1">Email</div>
              <div className="font-medium">info@briyosissoftcaps.com</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <MapPin className="h-6 w-6 mx-auto mb-3" />
              <div className="text-sm opacity-80 mb-1">Location</div>
              <div className="font-medium">Vadodara, Gujarat</div>
            </div>
            <div className="bg-white/10 rounded-xl p-6 border border-white/20">
              <Clock className="h-6 w-6 mx-auto mb-3" />
              <div className="text-sm opacity-80 mb-1">Support</div>
              <div className="font-medium">24/7 Available</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary"
            >
              <Link to="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white hover:text-primary"
            >
              <Link to="/products">View Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;