import { Heart, Globe, Users, Leaf } from "lucide-react";

const charityLogos = [
  { name: "Global Health Initiative", icon: Globe },
  { name: "Community Care Foundation", icon: Users },
  { name: "Nature Preservation Trust", icon: Leaf },
  { name: "Health Research Alliance", icon: Heart },
];

const CharitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-4">
              <Heart className="inline h-4 w-4 mr-1 text-accent" />
              Giving Back
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Our Charitable Initiatives{" "}
              <span className="text-primary">Health Desk Emporium Gives Back</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At Health Desk Emporium, a portion of our profits are committed to supporting 
              charities and global health research initiatives. We believe in creating a 
              healthier world, one community at a time.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-background border border-border">
                <p className="text-3xl font-bold text-primary mb-1">₹500K+</p>
                <p className="text-sm text-muted-foreground">Donated</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-background border border-border">
                <p className="text-3xl font-bold text-primary mb-1">50+</p>
                <p className="text-sm text-muted-foreground">Charities</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-background border border-border">
                <p className="text-3xl font-bold text-primary mb-1">100K+</p>
                <p className="text-sm text-muted-foreground">Lives Impacted</p>
              </div>
            </div>
          </div>

          {/* Charity Logos */}
          <div className="grid grid-cols-2 gap-6">
            {charityLogos.map((charity) => (
              <div
                key={charity.name}
                className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-elegant transition-all duration-300"
              >
                <div className="p-4 rounded-full bg-primary/10 mb-4 transition-transform duration-300 group-hover:scale-110">
                  <charity.icon className="h-10 w-10 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground text-center">
                  {charity.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CharitySection;
