import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-supplements.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-16 md:py-24 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-sage/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Leaf className="h-4 w-4" />
              100% All Natural Supplements
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Health Desk Emporium: <span className="text-primary">All Natural Supplements</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl lg:max-w-none">
              Health Desk Emporium is the premier choice for those seeking wellness through wholesome, 
              superfood-enriched formulas that actually work. Our all-natural, organic health 
              supplements are designed to give your body what it needs to thrive and optimize 
              your health each day!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button variant="hero" size="xl" className="group" asChild>
                <Link to="/shop">
                  Shop Now
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="tealOutline" size="xl" asChild>
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>FDA Compliant</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Award className="h-5 w-5 text-primary" />
                <span>Lab Tested</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Leaf className="h-5 w-5 text-primary" />
                <span>Non-GMO</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-teal rounded-3xl blur-3xl opacity-20 scale-90" />
              <img
                src={heroImage}
                alt="Natural health supplements and herbs"
                className="relative rounded-3xl shadow-elegant w-full max-w-md lg:max-w-lg object-cover"
              />
              
              {/* Floating badges */}
              <div className="absolute -left-4 top-1/4 bg-background rounded-2xl p-4 shadow-elegant animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-sage-light flex items-center justify-center">
                    <Leaf className="h-5 w-5 text-sage" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">100%</p>
                    <p className="text-xs text-muted-foreground">Organic</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 bottom-1/4 bg-background rounded-2xl p-4 shadow-elegant animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gold-light flex items-center justify-center">
                    <Award className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">50K+</p>
                    <p className="text-xs text-muted-foreground">Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
