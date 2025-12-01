import { Button } from "@/components/ui/button";
import { Leaf, FlaskConical, Factory, ArrowRight, CheckCircle2 } from "lucide-react";
import aboutTeam from "@/assets/about-team.jpg";
import heroSupplements from "@/assets/hero-supplements.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural Components",
    subtitle: "Nature-Powered Wellness You Can Trust",
    description: "We harness the goodness of nature to create supplements enriched with premium, research-backed superfood extracts. Each formula is carefully crafted to promote overall vitality and deliver proven health benefits. At Health Desk Care, we uphold the highest standards of quality, safety, and regulatory compliance, ensuring every product you choose is both effective and trustworthy.",
  },
  {
    icon: FlaskConical,
    title: "Research-Backed Formulations",
    subtitle: "Formulated with Clinically Tested Ingredients",
    description: "We combine the expertise of our physicians with the latest health data and medical research, ensuring every supplement is thoughtfully formulated for maximum benefit.",
  },
  {
    icon: Factory,
    title: "Eco-Conscious Manufacturing",
    subtitle: "Sustainable from Source to Shelf",
    description: "Our supplements are crafted in certified facilities that meet and exceed industry standards — ensuring exceptional quality while minimizing environmental impact. Through eco-friendly processes and a commitment to reducing our carbon footprint, we create wellness solutions that are as good for the planet as they are for you.",
  },
];

const highlights = [
  "Premium superfood ingredients",
  "FDA-compliant facilities",
  "Third-party tested",
  "Sustainable sourcing",
];

const AboutUs = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Main About Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-sage/20 rounded-3xl blur-3xl opacity-50 scale-95" />
            <img
              src={aboutTeam}
              alt="Health Desk Emporium team"
              className="relative rounded-3xl shadow-elegant w-full object-cover"
            />
            
            {/* Overlay Card */}
            <div className="absolute -bottom-6 -right-6 bg-card rounded-2xl p-6 shadow-elegant border border-border max-w-xs overflow-hidden">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-30">
                <img 
                  src={heroSupplements} 
                  alt="Health and Wellness" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Leaf className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">10+</p>
                    <p className="text-sm text-muted-foreground">Years of Excellence</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-2 flex-1 rounded-full bg-primary/20">
                      <div className="h-full w-4/5 rounded-full bg-primary" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Health Desk Emporium{" "}
              <span className="text-primary">The Future Of Smart Health</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Health Desk Emporium, we are committed to producing supplements that harness 
              the power of all-natural superfoods. Our products help support the body's 
              natural processes, improving our customers' quality of life.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-foreground">{highlight}</span>
                </div>
              ))}
            </div>

            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/shop">
                Learn More
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 stagger-children">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-300"
            >
              {/* Icon */}
              <div className="p-4 rounded-xl bg-primary/10 w-fit mb-6 transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-primary font-medium text-sm mb-4">
                {feature.subtitle}
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                {feature.description}
              </p>

              <Button variant="tealOutline" size="sm" className="group/btn" asChild>
                <Link to="/about">
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
