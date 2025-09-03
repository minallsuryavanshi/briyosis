import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-pharma.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern pharmaceutical laboratory"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-background/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-background/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-8 py-4 bg-white/90 backdrop-blur-xl rounded-full text-sm font-semibold text-primary mb-12 animate-fade-in border border-primary/30 shadow-2xl hover:shadow-[0_20px_40px_-10px_rgba(1,109,182,0.3)] transition-all duration-500">
            <Award className="h-5 w-5 mr-3 text-primary" />
            Trusted Pharmaceutical Excellence Since 2010
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 animate-slide-up text-balance leading-[0.9] tracking-tight">
            <span className="text-primary bg-clip-text">Premium</span>{" "}
            <span className="text-secondary bg-clip-text">Softgel</span>{" "}
            <span className="text-foreground bg-clip-text">Solutions</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-foreground/80 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up text-balance font-medium bg-white/60 backdrop-blur-sm px-8 py-6 rounded-2xl border border-white/30 shadow-xl">
            Manufacturing high-quality pharmaceutical and nutraceutical softgel 
            capsules with cutting-edge technology and stringent quality standards 
            for global healthcare excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20 animate-slide-up">
            <Button size="lg" className="btn-brand group px-10 py-5 text-lg font-semibold rounded-xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(1,109,182,0.4)] transition-all duration-500">
              Explore Products
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="btn-ghost px-10 py-5 text-lg font-semibold rounded-xl bg-white/10 backdrop-blur-xl border-2 border-white/30 text-foreground hover:bg-white/20 hover:border-white/50 transition-all duration-500">
              Learn About Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in">
            <div className="text-center group hover:scale-105 transition-all duration-500 bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/40 hover:border-primary/50 hover:bg-white/90 shadow-2xl hover:shadow-[0_30px_60px_-12px_rgba(1,109,182,0.3)]">
              <div className="flex items-center justify-center mb-6 w-20 h-20 bg-primary/10 rounded-2xl mx-auto group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <Shield className="h-10 w-10 text-primary" />
              </div>
              <div className="text-5xl font-bold text-primary mb-3 tracking-tight">100%</div>
              <div className="text-lg font-semibold text-foreground/90">Quality Assured</div>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-500 bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/40 hover:border-secondary/50 hover:bg-white/90 shadow-2xl hover:shadow-[0_30px_60px_-12px_rgba(67,160,71,0.3)]">
              <div className="flex items-center justify-center mb-6 w-20 h-20 bg-secondary/10 rounded-2xl mx-auto group-hover:bg-secondary/20 transition-all duration-300 group-hover:scale-110">
                <Users className="h-10 w-10 text-secondary" />
              </div>
              <div className="text-5xl font-bold text-secondary mb-3 tracking-tight">500+</div>
              <div className="text-lg font-semibold text-foreground/90">Happy Clients</div>
            </div>
            <div className="text-center group hover:scale-105 transition-all duration-500 bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-white/40 hover:border-primary/50 hover:bg-white/90 shadow-2xl hover:shadow-[0_30px_60px_-12px_rgba(1,109,182,0.3)]">
              <div className="flex items-center justify-center mb-6 w-20 h-20 bg-primary/10 rounded-2xl mx-auto group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                <Award className="h-10 w-10 text-primary" />
              </div>
              <div className="text-5xl font-bold text-primary mb-3 tracking-tight">13+</div>
              <div className="text-lg font-semibold text-foreground/90">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-primary/30 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/25 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-1/3 left-20 w-28 h-28 bg-secondary/15 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default HeroSection;