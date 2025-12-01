import { useState, useEffect } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search, Filter, ShoppingCart, Star, ArrowLeft } from "lucide-react";
import productDentPure from "@/assets/product-dentpure.jpg";
import productTrueFem from "@/assets/product-truefem.jpg";
import productVitaRenew from "@/assets/product-vitarenew.jpg";
import productProstaZen from "@/assets/product-prostazen.jpg";
import productNerveFreedom from "@/assets/product-nervefreedom.jpg";
import categoryWeightLoss from "@/assets/category-weightloss.jpg";
import { useCart } from "@/context/CartContext";

const mockProducts = [
  // Dental Products
  {
    id: 1,
    name: "Dent Pure",
    tagline: "Complete Dental Support",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.9,
    reviews: 324,
    image: productDentPure,
    badge: "Best Seller",
    category: "Dental"
  },
  {
    id: 2,
    name: "Bright Smile",
    tagline: "Advanced Teeth Whitening",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.7,
    reviews: 198,
    image: productDentPure,
    badge: "New",
    category: "Dental"
  },
  
  // Women's Health Products
  {
    id: 3,
    name: "True Fem",
    tagline: "Women's Wellness Formula",
    price: 64.99,
    originalPrice: 84.99,
    rating: 4.8,
    reviews: 256,
    image: productTrueFem,
    badge: "Popular",
    category: "Women's Health"
  },
  {
    id: 4,
    name: "Hormone Harmony",
    tagline: "Balanced Hormone Support",
    price: 54.99,
    originalPrice: 74.99,
    rating: 4.6,
    reviews: 187,
    image: productTrueFem,
    badge: null,
    category: "Women's Health"
  },
  
  // General Wellness Products
  {
    id: 5,
    name: "Vita Renew",
    tagline: "Daily Vitality Boost",
    price: 49.99,
    originalPrice: 69.99,
    rating: 4.9,
    reviews: 412,
    image: productVitaRenew,
    badge: "New",
    category: "General Wellness"
  },
  {
    id: 6,
    name: "Energy Boost",
    tagline: "Natural Energy Enhancer",
    price: 39.99,
    originalPrice: 59.99,
    rating: 4.5,
    reviews: 234,
    image: productVitaRenew,
    badge: null,
    category: "General Wellness"
  },
  
  // Men's Health Products
  {
    id: 7,
    name: "ProstaZen",
    tagline: "Men's Prostate Health",
    price: 54.99,
    originalPrice: 74.99,
    rating: 4.7,
    reviews: 189,
    image: productProstaZen,
    badge: null,
    category: "Men's Health"
  },
  {
    id: 8,
    name: "TestoBoost",
    tagline: "Natural Testosterone Support",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.6,
    reviews: 156,
    image: productProstaZen,
    badge: "Popular",
    category: "Men's Health"
  },
  
  // Nerve Health Products
  {
    id: 9,
    name: "Nerve Freedom",
    tagline: "Nerve Support Complex",
    price: 69.99,
    originalPrice: 89.99,
    rating: 4.8,
    reviews: 278,
    image: productNerveFreedom,
    badge: "Top Rated",
    category: "Nerve Health"
  },
  {
    id: 10,
    name: "Calm Nerves",
    tagline: "Stress Relief Formula",
    price: 44.99,
    originalPrice: 59.99,
    rating: 4.4,
    reviews: 142,
    image: productNerveFreedom,
    badge: null,
    category: "Nerve Health"
  },
  
  // Immune Support Products
  {
    id: 11,
    name: "Immune Shield",
    tagline: "Immune System Support",
    price: 44.99,
    originalPrice: 59.99,
    rating: 4.6,
    reviews: 312,
    image: "/placeholder.svg",
    badge: "New",
    category: "Immune Support"
  },
  {
    id: 12,
    name: "Defense Plus",
    tagline: "Advanced Immunity Booster",
    price: 54.99,
    originalPrice: 69.99,
    rating: 4.7,
    reviews: 267,
    image: "/placeholder.svg",
    badge: null,
    category: "Immune Support"
  },
  
  // Weight Loss Products
  {
    id: 13,
    name: "SlimTrim",
    tagline: "Metabolism Boosting Formula",
    price: 59.99,
    originalPrice: 79.99,
    rating: 4.5,
    reviews: 189,
    image: categoryWeightLoss,
    badge: "Popular",
    category: "Weight Loss"
  },
  {
    id: 14,
    name: "BurnMax",
    tagline: "Fat Burning Accelerator",
    price: 64.99,
    originalPrice: 84.99,
    rating: 4.3,
    reviews: 156,
    image: categoryWeightLoss,
    badge: null,
    category: "Weight Loss"
  },
  
  // Heart Health Products
  {
    id: 15,
    name: "CardioCare",
    tagline: "Heart Health Support",
    price: 54.99,
    originalPrice: 69.99,
    rating: 4.7,
    reviews: 234,
    image: "/placeholder.svg",
    badge: "Top Rated",
    category: "Heart Health"
  },
  {
    id: 16,
    name: "Cholesterol Balance",
    tagline: "Cholesterol Management",
    price: 49.99,
    originalPrice: 64.99,
    rating: 4.4,
    reviews: 178,
    image: "/placeholder.svg",
    badge: null,
    category: "Heart Health"
  }
];

const categories = [
  "All Categories",
  "Dental",
  "Women's Health",
  "General Wellness",
  "Men's Health",
  "Nerve Health",
  "Immune Support",
  "Weight Loss",
  "Heart Health"
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("featured");
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { addToCart } = useCart();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Check for category filter in URL params
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams]);

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
    alert(`${product.name} added to cart!`);
  };

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.tagline.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
          <h1 className="text-3xl font-bold text-foreground">Our Products</h1>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-2xl p-6 mb-8 border border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-elegant hover:border-primary/30 transition-all duration-300"
            >
              {/* Badge */}
              {product.badge && (
                <span className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                  {product.badge}
                </span>
              )}

              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
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
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">{product.tagline}</p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold text-primary">₹{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through">
                    ₹{product.originalPrice}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2">
                  <Button 
                    variant="hero" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/shop/${product.id}`}>
                      Details
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;