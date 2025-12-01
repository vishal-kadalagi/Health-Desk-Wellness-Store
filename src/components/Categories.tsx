import { Button } from "@/components/ui/button";
import { 
  User, 
  Dumbbell, 
  Heart, 
  Droplets, 
  Eye, 
  Sparkles, 
  Apple,
  Scale,
  Zap,
  Flower2,
  Users,
  Smile,
  Brain,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

import categoryWeightLoss from "@/assets/category-weightloss.jpg";
import categoryNervePain from "@/assets/category-nervepain.jpg";
import categorySkincare from "@/assets/category-skincare.jpg";
import categoryMensHealth from "@/assets/category-menshealth.jpg";
import categoryWomensHealth from "@/assets/category-womenshealth.jpg";
import categoryDental from "@/assets/category-dental.jpg";
import categoryMemory from "@/assets/category-memory.jpg";

const mainCategories = [
  { name: "Male Health", icon: User, color: "bg-teal-dark/10 text-teal-dark" },
  { name: "Diet & Fitness", icon: Dumbbell, color: "bg-sage/10 text-sage" },
  { name: "Pain Relief", icon: Zap, color: "bg-accent/10 text-accent" },
  { name: "Blood & Heart", icon: Heart, color: "bg-destructive/10 text-destructive" },
  { name: "Eyes & Ears", icon: Eye, color: "bg-primary/10 text-primary" },
  { name: "General Wellness", icon: Sparkles, color: "bg-secondary/10 text-secondary" },
  { name: "Gut Health", icon: Apple, color: "bg-sage/10 text-sage" },
];

const subCategories = [
  {
    name: "Weight Loss",
    description: "Shop trusted weight loss products that help boost metabolism and support your journey to a healthier you",
    icon: Scale,
    image: categoryWeightLoss
  },
  {
    name: "Nerve Pain",
    description: "Find relief with nerve pain products formulated to soothe discomfort and support healthy nerve function",
    icon: Zap,
    image: categoryNervePain
  },
  {
    name: "Skin Care",
    description: "Explore premium skincare products that nourish, protect, and enhance your natural glow",
    icon: Flower2,
    image: categorySkincare
  },
  {
    name: "Men's Health",
    description: "Discover men's health products designed to boost energy, strength, and overall well-being",
    icon: User,
    image: categoryMensHealth
  },
  {
    name: "Women's Health",
    description: "Explore women's health products that support hormonal balance, vitality, and overall wellness",
    icon: Users,
    image: categoryWomensHealth
  },
  {
    name: "Dental",
    description: "Shop dental care products that keep your smile bright, healthy, and confident",
    icon: Smile,
    image: categoryDental
  },
  {
    name: "Memory",
    description: "Discover memory support products that help enhance focus, clarity, and cognitive performance",
    icon: Brain,
    image: categoryMemory
  },
];

const Categories = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Nutrition Solutions for Your{" "}
            <span className="text-primary">Complete Well-Being</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your premier destination for all-natural, organic health supplements designed to optimize your wellness journey
          </p>
        </div>

        {/* Main Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-12">
          {mainCategories.map((category) => (
            <button
              key={category.name}
              className="group flex flex-col items-center gap-3 p-4 rounded-2xl bg-card hover:bg-muted border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elegant"
            >
              <div className={`p-3 rounded-xl ${category.color} transition-transform duration-300 group-hover:scale-110`}>
                <category.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Subcategories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 stagger-children">
          {subCategories.map((category) => (
            <div
              key={category.name}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elegant"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 text-primary-foreground">
                    <category.icon className="h-5 w-5" />
                    <h3 className="text-lg font-serif font-semibold">{category.name}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {category.description}
                </p>
                <Button 
                  variant="tealOutline" 
                  size="sm" 
                  className="w-full group/btn" 
                  asChild
                >
                  <Link to={`/shop?category=${encodeURIComponent(category.name)}`}>
                    Buy Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
