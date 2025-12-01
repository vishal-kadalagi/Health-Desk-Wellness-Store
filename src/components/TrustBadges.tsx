import { Leaf, Heart, RefreshCcw, HandHeart, FlaskConical } from "lucide-react";

const badges = [
  {
    icon: Leaf,
    title: "All Natural",
    description: "Pure ingredients from nature",
  },
  {
    icon: Heart,
    title: "Cruelty-Free",
    description: "Never tested on animals",
  },
  {
    icon: RefreshCcw,
    title: "Money-back Guarantee",
    description: "60-day return policy",
  },
  {
    icon: HandHeart,
    title: "Giving Back",
    description: "Supporting global health",
  },
  {
    icon: FlaskConical,
    title: "Non-GMO",
    description: "No genetic modifications",
  },
];

const TrustBadges = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-teal">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
            A Brand That You Can Trust
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Our results-driven supplements are made with premium & safe ingredients
          </p>
        </div>

        {/* Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 stagger-children">
          {badges.map((badge) => (
            <div
              key={badge.title}
              className="group flex flex-col items-center text-center p-6 rounded-2xl bg-primary-foreground/10 backdrop-blur border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-primary-foreground/20 mb-4 transition-transform duration-300 group-hover:scale-110">
                <badge.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-primary-foreground mb-2">
                {badge.title}
              </h3>
              <p className="text-sm text-primary-foreground/70">
                {badge.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
