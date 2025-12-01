import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Power of Natural Supplements in Daily Wellness",
      excerpt: "Discover how incorporating natural supplements into your daily routine can boost your overall health and wellbeing.",
      date: "May 15, 2024",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Understanding Immune System Support Through Nutrition",
      excerpt: "Learn about the key nutrients and supplements that can help strengthen your body's natural defenses.",
      date: "April 28, 2024",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "5 Essential Vitamins Everyone Should Consider",
      excerpt: "A comprehensive guide to the most important vitamins and why your body needs them.",
      date: "April 12, 2024",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "The Science Behind Herbal Wellness Solutions",
      excerpt: "Exploring the research behind traditional herbal remedies and their modern applications.",
      date: "March 30, 2024",
      readTime: "8 min read"
    }
  ];

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
          <h1 className="text-3xl font-bold text-foreground">Health & Wellness Blog</h1>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border mb-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Latest Articles on Natural Health
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay informed with our expert insights on nutrition, wellness trends, 
              and the science behind natural health solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="border border-border rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-center text-sm text-muted-foreground mb-3">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{post.title}</h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button variant="ghost" className="p-0 text-primary hover:text-primary/90">
                  Read More →
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg">
            View All Articles
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blog;