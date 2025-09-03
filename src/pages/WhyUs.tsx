import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Award,
  Clock,
  Users,
  Microscope,
  Globe,
  TrendingUp,
  CheckCircle2,
  Star
} from "lucide-react";

const WhyUs = () => {
  const advantages = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO 9001:2008 certified with comprehensive quality management systems",
      stats: "100% Quality Guaranteed",
      color: "bg-indigo-300 text-primary"
    },
    {
      icon: Award,
      title: "Industry Experience",
      description: "Over 13 years of expertise in pharmaceutical manufacturing",
      stats: "13+ Years Experience",
      color: "bg-yellow-300 text-secondary"
    },
    {
      icon: Clock,
      title: "Fast Turnaround",
      description: "Efficient production processes ensuring timely delivery",
      stats: "2-4 Week Delivery",
      color: "bg-orange-300 text-orange-600"
    },
    {
      icon: Users,
      title: "Client Satisfaction",
      description: "Trusted by 500+ clients worldwide with 98% satisfaction rate",
      stats: "500+ Happy Clients",
      color: "bg-blue-300 text-blue-600"
    },
    {
      icon: Microscope,
      title: "R&D Excellence",
      description: "State-of-the-art research facility with experienced scientists",
      stats: "24/7 R&D Support",
      color: "bg-purple-300 text-purple-600"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "International shipping and regulatory compliance worldwide",
      stats: "50+ Countries Served",
      color: "bg-green-300 text-green-600"
    }
  ];

  const certifications = [
    "ISO 9001:2008 Certified",
    "GMP Compliant Facility",
    "FDA Registered",
    "NAFDAC Certified",
    "WHO-GMP Approved",
    "Rigorous Quality"
  ];

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      company: "PharmaCorp Industries",
      quote: "Briyosis Softcaps has been our trusted partner for 5 years. Their quality and reliability are unmatched.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "NutriHealth Solutions",
      quote: "Exceptional customer service and product quality. They always deliver on time and exceed expectations.",
      rating: 5
    },
    {
      name: "Dr. Emily Rodriguez",
      company: "Global Wellness Inc.",
      quote: "Their custom formulation services helped us launch 3 successful products. Highly recommended!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Header */}
      <section className="section-padding bg-gradient-brand text-gray-500">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-black">
            Why Choose Us?
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-slide-up">
            Discover what makes Briyosis Softcaps the preferred choice for
            pharmaceutical and nutraceutical companies worldwide.
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="section-padding py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Competitive Advantages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {advantages.map((advantage, index) => (
              <Card
                key={index}
                className="card-hover rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-20 h-20 rounded-full ${advantage.color} flex items-center justify-center mx-auto mb-6 text-white text-2xl`}
                  >
                    <advantage.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{advantage.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {advantage.description}
                  </p>
                  {advantage.stats && (
                    <Badge
                      variant="secondary"
                      className="bg-secondary text-gray-400 px-4 py-1 rounded-full"
                    >
                      {advantage.stats}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Process Excellence */}
      <section className="section-padding bg-accent/30 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Manufacturing Excellence</h2>
            <p className="text-xl text-muted-foreground mb-16">
              Our streamlined process ensures consistent quality and timely delivery.
            </p>

            <div className="grid md:grid-cols-4 gap-10">
              <div className="text-center px-4">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold mb-2">Consultation</h4>
                <p className="text-sm text-muted-foreground">
                  Understanding your requirements and specifications
                </p>
              </div>

              <div className="text-center px-4">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold mb-2">Development</h4>
                <p className="text-sm text-muted-foreground">
                  Formula optimization and sample preparation
                </p>
              </div>

              <div className="text-center px-4">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold mb-2">Production</h4>
                <p className="text-sm text-muted-foreground">
                  Scaled manufacturing with quality control
                </p>
              </div>

              <div className="text-center px-4">
                <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h4 className="font-semibold mb-2">Delivery</h4>
                <p className="text-sm text-muted-foreground">
                  Secure packaging and timely shipping
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Certifications */}
      <section className="section-padding py-14">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Certifications & Compliance
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Maintaining the highest standards through rigorous certifications and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-semibold text-gray-800">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="section-padding bg-accent/30 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover bg-white/80 backdrop-blur-md rounded-2xl shadow-lg transition-transform hover:scale-105 duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="section-padding bg-gradient-secondary py-12">
        <div className="container mx-auto text-center px-6 md:px-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-gray-500 text-gray-400">
            Join hundreds of satisfied clients who trust Briyosis Softcaps for their pharmaceutical manufacturing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="outline" className="btn-ghost px-8 py-3">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="btn-ghost px-8 py-3">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default WhyUs;