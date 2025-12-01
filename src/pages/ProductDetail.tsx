import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Star, Shield, Leaf, Truck } from "lucide-react";
import productDentPure from "@/assets/product-dentpure.jpg";
import productTrueFem from "@/assets/product-truefem.jpg";
import productVitaRenew from "@/assets/product-vitarenew.jpg";
import productProstaZen from "@/assets/product-prostazen.jpg";
import productNerveFreedom from "@/assets/product-nervefreedom.jpg";
import heroSupplements from "@/assets/hero-supplements.jpg";
import categoryDental from "@/assets/category-dental.jpg";
import categoryWomensHealth from "@/assets/category-womenshealth.jpg";
import categoryWeightLoss from "@/assets/category-weightloss.jpg";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const productId = id || "1";
  const { addToCart } = useCart();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Mock product data - in a real app, this would come from an API
  const products = [
    {
      id: "1",
      name: "Dent Pure",
      tagline: "Complete Dental Support",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.9,
      reviews: 324,
      image: productDentPure,
      images: [productDentPure, categoryDental, heroSupplements],
      badge: "Best Seller",
      category: "Dental",
      description: "Dent Pure is our premium dental health supplement designed to support gum health, strengthen teeth, and freshen breath naturally. Formulated with clinically-proven ingredients including coenzyme Q10, xylitol, and herbal extracts known for their oral health benefits.",
      benefits: [
        "Strengthens tooth enamel",
        "Reduces plaque formation",
        "Supports healthy gums",
        "Freshens breath naturally",
        "Reduces tooth sensitivity"
      ],
      ingredients: [
        "Coenzyme Q10 (100mg)",
        "Xylitol (2g)",
        "Green Tea Extract (250mg)",
        "Neem Extract (150mg)",
        "Peppermint Oil (50mg)"
      ]
    },
    {
      id: "2",
      name: "True Fem",
      tagline: "Women's Wellness Formula",
      price: 64.99,
      originalPrice: 84.99,
      rating: 4.8,
      reviews: 256,
      image: productTrueFem,
      images: [productTrueFem, categoryWomensHealth, heroSupplements],
      badge: "Popular",
      category: "Women's Health",
      description: "True Fem is our specialized women's wellness formula designed to support hormonal balance, bone health, and overall vitality. Formulated with clinically-proven ingredients including evening primrose oil, calcium, and vitamin D3.",
      benefits: [
        "Supports hormonal balance",
        "Promotes bone health",
        "Enhances energy levels",
        "Supports reproductive health",
        "Reduces menstrual discomfort"
      ],
      ingredients: [
        "Evening Primrose Oil (1000mg)",
        "Calcium (500mg)",
        "Vitamin D3 (1000 IU)",
        "Magnesium (200mg)",
        "Boron (3mg)"
      ]
    },
    {
      id: "3",
      name: "Vita Renew",
      tagline: "Daily Vitality Boost",
      price: 49.99,
      originalPrice: 69.99,
      rating: 4.9,
      reviews: 412,
      image: productVitaRenew,
      images: [productVitaRenew, heroSupplements, categoryWomensHealth],
      badge: "New",
      category: "General Wellness",
      description: "Vita Renew is our comprehensive daily vitality supplement designed to boost energy, support immune function, and enhance overall well-being. Formulated with a blend of essential vitamins, minerals, and superfood extracts.",
      benefits: [
        "Boosts daily energy levels",
        "Supports immune system function",
        "Enhances mental clarity",
        "Promotes healthy aging",
        "Supports cellular health"
      ],
      ingredients: [
        "Vitamin C (500mg)",
        "Vitamin B Complex (100mg)",
        "Zinc (15mg)",
        "Ashwagandha Extract (250mg)",
        "Green Tea Extract (200mg)"
      ]
    },
    {
      id: "4",
      name: "ProstaZen",
      tagline: "Men's Prostate Health",
      price: 54.99,
      originalPrice: 74.99,
      rating: 4.7,
      reviews: 189,
      image: productProstaZen,
      images: [productProstaZen, categoryDental, heroSupplements],
      badge: null,
      category: "Men's Health",
      description: "ProstaZen is our targeted men's prostate health supplement designed to support urinary function, prostate health, and overall male vitality. Formulated with clinically-proven ingredients including saw palmetto and beta-sitosterol.",
      benefits: [
        "Supports prostate health",
        "Improves urinary flow",
        "Enhances male vitality",
        "Supports hormonal balance",
        "Promotes healthy aging"
      ],
      ingredients: [
        "Saw Palmetto (320mg)",
        "Beta-Sitosterol (100mg)",
        "Zinc (30mg)",
        "Selenium (200mcg)",
        "Pygeum Bark Extract (100mg)"
      ]
    },
    {
      id: "5",
      name: "Nerve Freedom",
      tagline: "Nerve Support Complex",
      price: 69.99,
      originalPrice: 89.99,
      rating: 4.8,
      reviews: 278,
      image: productNerveFreedom,
      images: [productNerveFreedom, heroSupplements, categoryWomensHealth],
      badge: "Top Rated",
      category: "Nerve Health",
      description: "Nerve Freedom is our specialized nerve support complex designed to soothe nerve discomfort, support healthy nerve function, and promote overall neurological health. Formulated with clinically-proven ingredients including alpha-lipoic acid and B vitamins.",
      benefits: [
        "Soothes nerve discomfort",
        "Supports healthy nerve function",
        "Promotes neurological health",
        "Reduces inflammation",
        "Enhances nerve regeneration"
      ],
      ingredients: [
        "Alpha-Lipoic Acid (300mg)",
        "Vitamin B Complex (100mg)",
        "Magnesium (200mg)",
        "Turmeric Extract (250mg)",
        "Acetyl-L-Carnitine (150mg)"
      ]
    },
    {
      id: "13",
      name: "SlimTrim",
      tagline: "Metabolism Boosting Formula",
      price: 59.99,
      originalPrice: 79.99,
      rating: 4.5,
      reviews: 189,
      image: categoryWeightLoss,
      images: [categoryWeightLoss, heroSupplements, categoryWomensHealth],
      badge: "Popular",
      category: "Weight Loss",
      description: "SlimTrim is our advanced weight management supplement designed to boost metabolism and support healthy weight loss. Formulated with natural ingredients that help burn fat and suppress appetite.",
      benefits: [
        "Boosts metabolism",
        "Suppresses appetite",
        "Supports fat burning",
        "Enhances energy levels",
        "Promotes healthy weight management"
      ],
      ingredients: [
        "Green Coffee Bean Extract (300mg)",
        "Garcinia Cambogia (200mg)",
        "Green Tea Extract (150mg)",
        "Cayenne Pepper (100mg)",
        "L-Carnitine (100mg)"
      ]
    },
    {
      id: "14",
      name: "BurnMax",
      tagline: "Fat Burning Accelerator",
      price: 64.99,
      originalPrice: 84.99,
      rating: 4.3,
      reviews: 156,
      image: categoryWeightLoss,
      images: [categoryWeightLoss, heroSupplements, categoryDental],
      badge: null,
      category: "Weight Loss",
      description: "BurnMax is our powerful fat burning formula designed to accelerate weight loss by increasing thermogenesis and fat oxidation. Perfect for those serious about achieving their weight loss goals.",
      benefits: [
        "Accelerates fat burning",
        "Increases thermogenesis",
        "Supports lean muscle retention",
        "Enhances workout performance",
        "Promotes healthy metabolism"
      ],
      ingredients: [
        "Caffeine Anhydrous (200mg)",
        "Yohimbine HCL (5mg)",
        "Synephrine (10mg)",
        "Green Tea Extract (100mg)",
        "Cayenne Pepper (50mg)"
      ]
    }
  ];
  
  const product = products.find(p => p.id == id) || products[0];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/shop">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shop
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-foreground">Product Details</h1>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="flex flex-col">
              <div className="bg-muted rounded-2xl aspect-square flex items-center justify-center mb-6">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="max-h-96 object-contain"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-4">
                {product.images && product.images.map((image, index) => (
                  <div 
                    key={index} 
                    className="bg-muted rounded-lg aspect-square cursor-pointer border-2 border-transparent hover:border-primary transition-colors"
                    onClick={() => {
                      // In a real app, this would update the main image
                      console.log(`Selected image ${index}`);
                    }}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} ${index + 1}`} 
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                    {product.category}
                  </span>
                  <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
                  <p className="text-muted-foreground">{product.tagline}</p>
                </div>
                {product.badge && (
                  <span className="px-3 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                    {product.badge}
                  </span>
                )}
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? "text-accent fill-accent"
                          : "text-border"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              
              {/* Price */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-primary">₹{product.price}</span>
                <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice}</span>
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">
                  Save ₹{product.originalPrice - product.price}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-muted-foreground mb-6">
                {product.description}
              </p>
              
              {/* Benefits */}
              <div className="mb-8">
                <h3 className="font-semibold text-foreground mb-3">Key Benefits</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center">
                      <Leaf className="h-4 w-4 text-primary mr-2" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="flex-1"
                  onClick={() => {
                    const product = products.find(p => p.id === productId);
                    if (product) {
                      addToCart({
                        id: parseInt(productId),
                        name: product.name,
                        price: product.price,
                        image: product.image
                      });
                      alert(`${product.name} added to cart!`);
                    }
                  }}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  Buy Now
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-border">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">FDA Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Leaf className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">100% Natural</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-sm text-muted-foreground">Free Shipping</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 pt-8 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Product Information</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-foreground mb-3">Ingredients</h3>
                <ul className="space-y-2">
                  {product.ingredients.map((ingredient, index) => (
                    <li key={index} className="flex items-center">
                      <Leaf className="h-4 w-4 text-primary mr-2" />
                      <span className="text-muted-foreground">{ingredient}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-3">Directions for Use</h3>
                <p className="text-muted-foreground mb-4">
                  Take one capsule daily with meals, or as directed by your healthcare professional. 
                  For best results, use consistently for at least 30 days.
                </p>
                
                <h3 className="font-semibold text-foreground mb-3">Caution</h3>
                <p className="text-muted-foreground">
                  Consult your healthcare provider before use if you are pregnant, nursing, 
                  taking medication, or have a medical condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;