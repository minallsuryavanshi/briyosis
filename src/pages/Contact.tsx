import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Globe,
  Users,
  ArrowRight,
  CheckCircle,
  Building,
  Award,
  Zap,
  Shield,
  Building2
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 bg-gradient-to-br from-background via-accent/5 to-secondary/5">
      {/* Hero Section */}
      <section className="relative section-padding bg-gradient-hero text-white overflow-hidden">
  {/* Background overlays */}
  <div className="absolute inset-0 bg-black/20"></div>
  <div className="absolute top-0 left-0 w-full h-full">
    <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl float-delayed-1"></div>
    <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl float-delayed-2"></div>
  </div>

  <div className="container-prose relative z-10 px-6 md:px-12">
    <div className="text-center max-w-4xl mx-auto">
      {/* Small tag */}
      <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
        <MessageSquare className="h-5 w-5 mr-2" />
        <span className="text-sm md:text-base font-medium">Ready to Partner With Us?</span>
      </div>

      {/* Heading */}
      <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight animate-fade-in">
        Get in <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Touch</span>
      </h1>

      {/* Description */}
      <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10 animate-slide-up">
        Experience high-quality, compliant dietary supplements with Briyosis, backed by expert quality assurance and technical support.</p>
      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in mb-12">
        <Button size="xl" variant="glass" className="group flex items-center justify-center px-6 py-3">
          <Phone className="h-5 w-5 mr-2 transition-transform group-hover:rotate-12" />
          Call Now: +91 9876543210
        </Button>
        <Button size="xl" variant="outline" className="border-white/30 text-white hover:bg-white/10 px-6 py-3">
          <Mail className="h-5 w-5 mr-2" />
          Email Us Directly
        </Button>
      </div>
    </div>
  </div>
</section>


      {/* Trust Indicators */}
      <section className="py-16 -mt-8 relative z-10">
        <div className="container-prose">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "500+", label: "Global Clients", color: "text-primary" },
              { icon: Globe, value: "50+", label: "Countries Served", color: "text-gray-500" },
              { icon: Award, value: "25+", label: "Years Experience", color: "text-orange-500" },
              { icon: Shield, value: "100%", label: "Quality Assured", color: "text-green-500" }
            ].map((item, index) => (
              <Card key={index} className="text-center bg-white/70 backdrop-blur-xl border-white/20 hover:bg-white/90">
                <CardContent className="p-8">
                  <item.icon className={`h-12 w-12 mx-auto mb-4 ${item.color}`} />
                  <div className="text-3xl font-bold mb-2">{item.value}</div>
                  <div className="text-sm text-muted-foreground font-medium">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="mb-12 text-center lg:text-left">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Let's Start a Conversation
                </h2>
                <p className="text-lg md:text-xl text-gray-600">
                  Share your requirements and we'll craft a solution tailored to your needs.
                </p>
              </div>

              <Card className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-white" />
                    </div>
                    <span>Contact Us</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="firstName" className="text-base font-semibold">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="h-12 rounded-xl border-2 border-primary/10 focus:border-primary transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="lastName" className="text-base font-semibold">Last Name *</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="h-12 rounded-xl border-2 border-primary/10 focus:border-primary transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-base font-semibold">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@company.com"
                        className="h-12 rounded-xl border-2 border-primary/10 focus:border-primary transition-all duration-300"
                      />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-base font-semibold">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        className="h-12 rounded-xl border-2 border-primary/10 focus:border-primary transition-all duration-300"
                      />
                    </div>
                  </div>


                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-base font-semibold">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please describe your requirements including quantities, timeline, specifications, regulatory needs, and any other important details..."
                      rows={6}
                      className="rounded-xl border-2 border-primary/10 focus:border-primary transition-all duration-300 resize-none"
                    />
                  </div>

                  <Button
                    size="xl"
                    variant="premium"
                    className="w-full flex items-center justify-center group text-black"
                  >
                    <Send className="h-5 w-5 mr-2 transition-transform group-hover:translate-x-1" />
                    Send Message
                    <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>

                </CardContent>
              </Card>
            </div>

            {/* Contact Sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <div className="text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Direct Contact</h3>
                <p className="text-lg text-gray-600">
                  Prefer to reach out directly? Our team is standing by.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone Card */}
                <Card className="group hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2 text-primary">Phone & WhatsApp</h4>
                      <p className="text-gray-600 mb-2 text-sm">Speak directly with our experts</p>
                      <div className="space-y-1">
                        <p className="font-semibold text-primary hover:text-primary/80 cursor-pointer transition-colors">+91 9876543210</p>                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Email Card */}
                <Card className="group hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-secondary to-secondary/70 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                      <Mail className="h-8 w-8 text-gray" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2 text-gray-500">Email Us</h4>
                      <p className="text-gray-700 mb-2 text-sm">For More Detailed Information</p>
                      <div className="space-y-1">
                        <p className="font-semibold text-gray-500 hover:text-gray-700 cursor-pointer transition-colors">
                          info@bryiosis.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>


                {/* Facility Card */}
                <Card className="group hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 rounded-2xl">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                      <Building className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2 text-orange-700">Office Address</h4>
                      <p className="font-medium text-orange-800 leading-relaxed">
                       B-7, Indraprasth Complex, Opp. Vegetable Market, Race-Course Circle, Vadodara – 390 007 Gujarat, India
                      </p>
                    </div>
                  </CardContent>
                </Card>

                {/* Business Hours Card */}
                <Card className="group hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 rounded-2xl">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:rotate-6 transition-transform duration-300">
                      <Building2 className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-2 text-blue-700">Factory Address</h4>
                      <p className="text-blue-600 mb-2 text-sm">Plot No : 176-1-1, Jarod-Rasulabad Road , Opp. LK India Ltd., AT & PO : Jarod, Tal : Waghodia, Dist : Vadodara - 391 510, Gujarat, India</p>
                    </div>
                  </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Map Section */}
      <section className="py-20 bg-gradient-to-r from-accent/20 to-secondary/10">
        <div className="container mx-auto max-w-5xl px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Visit Our Manufacturing Hub
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Compliant dietary supplements worldwide from its state-of-the-art pharmaceutical facility, staffed by expert quality professionals.
            </p>
          </div>

          {/* Map Card */}
          <Card className="overflow-hidden bg-white/90 backdrop-blur-xl rounded-2xl shadow-xl">
            <div className="relative bg-gradient-to-br from-muted/50 to-accent/30 h-96 flex items-center justify-center px-6 md:px-12">
              <div className="text-center">
                <div className="w-28 h-28 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800">
                  Interactive Location Map
                </h3>
                <p className="text-gray-600 text-base md:text-lg max-w-md mx-auto leading-relaxed">
                  Comprehensive map integration showing our exact location, nearby landmarks, and detailed directions.
                </p>
                <Button className="mt-6 flex items-center justify-center mx-auto" variant="outline">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about our manufacturing services.
            </p>
          </div>

          {/* FAQ Cards */}
          <div className="grid gap-8">
            {[
              {
                question: "What is your minimum order quantity?",
                answer:
                  "Our minimum order quantities vary depending on the product type and formulation complexity. For standard formulations, we typically work with orders starting from 10,000 units. For custom formulations, minimums may be higher to ensure cost-effectiveness. Contact us to discuss your specific requirements.",
              },
              {
                question: "How long does the manufacturing process take?",
                answer:
                  "Standard formulations typically require 2-4 weeks from order confirmation to completion. Custom formulations may require 6-8 weeks, including development and testing phases. We provide detailed timelines based on your specific project requirements and can expedite orders when necessary.",
              },
              {
                question: "Do you provide samples for evaluation?",
                answer:
                  "Yes, we provide comprehensive sampling services. For existing formulations, samples are usually available within 3-5 business days. For custom formulations, we provide samples after the development phase for your evaluation and approval before full-scale production.",
              },
              {
                question: "What quality certifications do you maintain?",
                answer:
                  "We maintain ISO 9001:2015, GMP (Good Manufacturing Practice), and FDA registrations. Our facility undergoes regular audits, and we provide complete documentation including Certificates of Analysis (CoA) for all products. We can also accommodate specific regulatory requirements for different markets.",
              },
            ].map((faq, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-300 rounded-xl border border-gray-200"
              >
                <CardContent className="p-6 md:p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-800 group-hover:text-primary transition-colors">
                        {faq.question}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl float-delayed-1"></div>
          <div className="absolute bottom-10 left-20 w-60 h-60 bg-white/5 rounded-full blur-3xl float-delayed-3"></div>
        </div>

        <div className="container-prose relative z-10 text-center py-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl md:max-w-3xl mx-auto mb-10 leading-relaxed">
           Join hundreds of companies worldwide who rely on us for their pharmaceutical manufacturing needs. Contact us to learn more about our products and services.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button
              size="xl"
              variant="glass"
              className="group px-8 py-4 text-lg font-medium"
            >
              <Zap className="h-5 w-5 mr-2 transition-transform group-hover:scale-110" />
              Start Conversation
              <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="px-8 py-4 text-lg font-medium border-white/30 text-white hover:bg-white/10"
            >
              <Phone className="h-5 w-5 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </div>

      </section>
    </div>
  );
};

export default Contact;