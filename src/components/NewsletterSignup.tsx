import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAnalytics } from "@/hooks/useAnalytics";
import { Link } from "react-router-dom";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { trackEvent } = useAnalytics();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email) {
      // In a real app, this would send to a backend service
      console.log("Subscribing email:", email);
      
      // Track the subscription event
      trackEvent({
        eventName: "Newsletter Subscribed",
        properties: {
          email,
          source: "Footer"
        }
      });
      
      setIsSubscribed(true);
      setEmail("");
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8 max-w-3xl mx-auto">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Stay Updated</h3>
        <p className="text-gray-600 mb-6">
          Get the latest health tips, product updates, and exclusive offers delivered to your inbox.
        </p>
        
        {isSubscribed ? (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg max-w-md mx-auto">
            <p className="font-medium">Thank you for subscribing!</p>
            <p className="text-sm mt-1">You'll receive our next newsletter.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              required
            />
            <Button type="submit" variant="hero">
              Subscribe
            </Button>
          </form>
        )}
        
        <p className="text-xs text-gray-500 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
};

export default NewsletterSignup;