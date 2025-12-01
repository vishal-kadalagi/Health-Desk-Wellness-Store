import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Leaf, FlaskConical, Factory, Users, Award } from "lucide-react";
import heroSupplements from "@/assets/hero-supplements.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">About Us</h1>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border mb-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Our Mission: <span className="text-primary">Natural Wellness for All</span>
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Health Desk Emporium, we're committed to providing premium, all-natural health supplements 
                that harness the power of superfoods and scientifically-backed ingredients. Our mission is to 
                make wellness accessible to everyone through safe, effective, and sustainable products.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Founded in 2014, we've spent over a decade perfecting formulations that support your body's 
                natural processes and enhance your quality of life. Every product in our collection is crafted 
                with care, following the highest standards of quality and safety.
              </p>
              <Button variant="hero" size="lg">
                Our Products
              </Button>
            </div>
            <div className="relative">
              <div className="bg-muted rounded-2xl h-96 w-full overflow-hidden">
                <img 
                  src={heroSupplements} 
                  alt="Health Desk Emporium Products" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-primary rounded-2xl p-6 w-2/3">
                <p className="text-primary-foreground text-4xl font-bold">10+</p>
                <p className="text-primary-foreground/80">Years of Excellence</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-muted">
              <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
              <p className="text-muted-foreground">
                All our supplements are made with pure, natural ingredients sourced from trusted suppliers.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-muted">
              <FlaskConical className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Scientifically Formulated</h3>
              <p className="text-muted-foreground">
                Our products are developed with input from healthcare professionals and backed by research.
              </p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-muted">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">
                Every batch is rigorously tested to ensure safety, purity, and potency.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border">
          <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
            Our <span className="text-primary">Commitment</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Factory className="h-5 w-5 text-primary mr-2" />
                Sustainable Manufacturing
              </h3>
              <p className="text-muted-foreground mb-4">
                We're committed to eco-conscious manufacturing processes that minimize our environmental 
                impact while maintaining the highest quality standards.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  Carbon-neutral shipping
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  Recyclable packaging
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  Renewable energy facilities
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="h-5 w-5 text-primary mr-2" />
                Community Impact
              </h3>
              <p className="text-muted-foreground mb-4">
                We believe in giving back to the community through health education and charitable initiatives.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  Health education programs
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  Support for local health clinics
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-primary rounded-full mr-2"></span>
                  Research funding for natural medicine
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;