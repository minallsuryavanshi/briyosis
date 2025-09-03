import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target,
  Eye,
  Users,
  Award,
  CheckCircle,
  Factory,
  Shield,
  Globe,
  Clock,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const companyStats = [
    {
      number: "300M+",
      label: "Softgels Annually",
      description: "Manufacturing capacity"
    },
    {
      number: "10K",
      label: "Sq.ft Facility",
      description: "Modern infrastructure"
    },
    {
      number: "25+",
      label: "Countries",
      description: "Global reach"
    },
    {
      number: "200+",
      label: "Satisfied Clients",
      description: "Trust & reliability"
    }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "WHO-GMP certified manufacturing ensuring uncompromising quality standards in every softgel capsule we produce.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Innovation",
      description: "Continuous R&D investment and cutting-edge technology to deliver advanced pharmaceutical solutions.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "24/7 operations and consistent quality delivery, building trust with clients across 25+ countries.",
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      {/* Modern Header */}
      <section className="section-modern bg-gradient-to-br from-primary/80 text-white relative overflow-hidden py-10">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-white/10 text-white border-white/20">
            <Factory className="w-4 h-4 mr-2" />
            About Briyosis Softcaps
          </Badge>
          <h1 className="text-6xl font-bold mb-8 leading-tight">
            <span className="block">Softgel Capsule</span>
            <span className="block">Manufacturing Leaders</span>
          </h1>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed opacity-90 text-gray-500">
            Established pharmaceutical manufacturing company specializing in premium
            softgel capsules, serving clients worldwide with WHO-GMP certified quality
            and innovative solutions since our founding.
          </p>
        </div>
      </section>

      {/* Company Stats */}
      <section className="section-modern bg-gradient-to-br from-secondary/5 to-accent-orange/5 py-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <Card key={index} className="card-modern text-center p-8">
                <CardContent className="p-0">
                  <div className="text-5xl font-bold text-gradient-primary mb-3">
                    {stat.number}
                  </div>
                  <div className="text-xl font-semibold text-foreground mb-2">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-modern py-6 bg-primary/10">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Card className="card-modern p-12">
              <CardContent className="p-0 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent-purple flex items-center justify-center mx-auto mb-8">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gradient-primary">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To manufacture world-class pharmaceutical and nutraceutical softgel
                  solutions using cutting-edge technology, maintaining WHO-GMP standards,
                  and delivering excellence that improves global health outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="card-modern p-16">
              <CardContent className="p-0 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent-orange flex items-center justify-center mx-auto mb-8">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-gradient-secondary">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the globally recognized leader in softgel capsule manufacturing,
                  setting industry benchmarks for quality, innovation, and reliability
                  while serving pharmaceutical companies across all continents.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-modern bg-gradient-innovation text-gray-600 py-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-5xl text-black font-bold mb-8">Our Manufacturing Excellence</h2>
            <div className="text-xl leading-relaxed space-y-6 opacity-90">
              <p>
                Briyosis Softcaps operates from a state-of-the-art 100,000 sq.ft facility
                in Vadodara, Gujarat, producing over 300 million softgel capsules annually.
                Our WHO-GMP certified manufacturing processes ensure the highest quality
                standards in the pharmaceutical industry.
              </p>
              <p>
                With 24/7 operations and dedicated R&D capabilities, we serve over 200
                satisfied clients across 25+ countries. Our expertise spans vitamins &
                minerals, carotenoids, CoEnzyme Q10, herbals & botanicals, natural oils,
                and specialty softgel formulations.
              </p>
              <p>
                Our commitment to innovation and quality has established us as a trusted
                partner for pharmaceutical and nutraceutical companies worldwide, delivering
                consistent excellence in every capsule we manufacture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-modern py-4 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 px-4 py-1 rounded-full text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              Our Values
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              <span className="text-gradient-primary">What Drives</span>
              <br />
              <span className="text-foreground">Our Excellence</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {values.map((value, index) => (
              <Card key={index} className="card-modern p-6 md:p-8 text-center group transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-2xl">
                <CardContent className="p-0">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300`}>
                    <value.icon className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed px-2">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-modern py-12 text-gray-500">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-black">Partner With Industry Leaders</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            Join 200+ satisfied clients who trust Briyosis Softcaps for their
            pharmaceutical manufacturing needs. Experience WHO-GMP quality and 24/7 service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 border-gray-500 text-black"
            >
              <Link to="/contact">
                Contact Our Team
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 border-gray-500 text-black"
            >
              <Link to="/products">View Our Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;