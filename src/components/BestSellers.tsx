import { Button } from "@/components/ui/button";
import { Star, ShoppingCart, Leaf, FlaskConical, BadgeCheck, Heart } from "lucide-react";
import productDentPure from "@/assets/product-dentpure.jpg";
import productTrueFem from "@/assets/product-truefem.jpg";
import productVitaRenew from "@/assets/product-vitarenew.jpg";
import productProstaZen from "@/assets/product-prostazen.jpg";
import productNerveFreedom from "@/assets/product-nervefreedom.jpg";
import { useAnalytics } from "@/hooks/useAnalytics";
import { useCart } from "@/context/CartContext";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const features = [
  { label: "Results-Driven", icon: BadgeCheck },
  { label: "All-Natural", icon: Leaf },
  { label: "Non-GMO", icon: FlaskConical },
  { label: "Cruelty-Free", icon: Heart },
];

const products = [
  {
    name: "Dent Pure",
    tagline: "Complete Dental Support",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.9,
    reviews: 324,
    image: productDentPure,
    badge: "Best Seller"
  },
  {
    name: "True Fem",
    tagline: "Women's Wellness Formula",
    price: 64.99,
    originalPrice: 84.99,
    rating: 4.8,
    reviews: 256,
    image: productTrueFem,
    badge: "Popular"
  },
  {
    name: "Vita Renew",
    tagline: "Daily Vitality Boost",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.9,
    reviews: 412,
    image: productVitaRenew,
    badge: "New"
  },
  {
    name: "ProstaZen",
    tagline: "Men's Prostate Health",
    price: 54.99,
    originalPrice: 74.99,
    rating: 4.7,
    reviews: 189,
    image: productProstaZen,
    badge: null
  },
  {
    name: "Nerve Freedom",
    tagline: "Nerve Support Complex",
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.8,
    reviews: 278,
    image: productNerveFreedom,
    badge: "Top Rated"
  },
];

const BestSellers = () => {
  const { trackEvent, getAddToCartEvent, getProductViewEvent } = useAnalytics();
  const { addToCart } = useCart();
  
  const handleAddToCart = (product: typeof products[0]) => {
    trackEvent(getAddToCartEvent(product.name, product.price));
    addToCart({
      id: products.findIndex(p => p.name === product.name) + 1,
      name: product.name,
      price: product.price,
      image: product.image
    });
    alert(`${product.name} added to cart!`);
  };

  useEffect(() => {
    // Track view of all products when component mounts
    products.forEach(product => {
      trackEvent(getProductViewEvent(product.name));
    });
  }, [trackEvent, getProductViewEvent]);

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Featured Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Best Sellers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Formulated with science-backed all-natural ingredients, our unique supplements 
            support holistic health, healing & wellness.
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap justify-center gap-3">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-border"
              >
                <feature.icon className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 stagger-children">
          {products.map((product) => (
            <div
              key={product.name}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elegant hover:border-primary/30 transition-all duration-300"
            >
              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                  {product.badge}
                </span>
              )}

              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur hover:bg-background transition-colors">
                <Heart className="h-4 w-4 text-muted-foreground hover:text-destructive transition-colors" />
              </button>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <Link to={`/shop/${product.name.toLowerCase().replace(/\s+/g, '-')}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "text-accent fill-accent"
                          : "text-border"
                      }`}
                    />
                  ))}
                  <span className="text-xs text-muted-foreground ml-1">
                    ({product.reviews})
                  </span>
                </div>

                {/* Name & Tagline */}
                <h3 className="text-lg font-serif font-semibold text-foreground mb-1">
                  <Link to={`/shop/${product.name.toLowerCase().replace(/\s+/g, '-')}`} className="hover:text-primary transition-colors">
                    {product.name}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{product.tagline}</p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-primary">₹{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                </div>

                {/* Button */}
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="w-full group/btn"
                  onClick={() => handleAddToCart(product)}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Shop Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
