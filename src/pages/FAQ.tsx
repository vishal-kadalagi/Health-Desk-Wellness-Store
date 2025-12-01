import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to see results from your supplements?",
      answer: "Most customers begin to notice improvements within 2-4 weeks of consistent use. However, individual results may vary based on factors such as diet, lifestyle, and overall health. For best results, we recommend using our supplements for at least 60 days."
    },
    {
      question: "Are your products suitable for vegetarians and vegans?",
      answer: "Yes, all of our supplements are 100% vegetarian and vegan-friendly. We use plant-based capsules and ensure all ingredients are sourced ethically without animal products."
    },
    {
      question: "Can I take multiple supplements together?",
      answer: "Many of our customers take multiple supplements, and our formulations are designed to be safe when combined. However, we always recommend consulting with your healthcare provider before starting any new supplement regimen, especially if you're taking medications."
    },
    {
      question: "Do your supplements have any side effects?",
      answer: "Our supplements are made with natural ingredients and are generally well-tolerated. Some individuals may experience mild digestive discomfort when first starting. If you experience any adverse reactions, discontinue use and consult your healthcare provider."
    },
    {
      question: "How should I store my supplements?",
      answer: "Store your supplements in a cool, dry place away from direct sunlight. Keep the bottles tightly closed and avoid storing in bathrooms or other humid environments. Most products have a shelf life of 2 years when stored properly."
    },
    {
      question: "Are your products FDA approved?",
      answer: "Dietary supplements are not required to undergo FDA approval before being sold. However, our manufacturing facilities are FDA registered and follow Good Manufacturing Practices (GMP). All our products are third-party tested for purity and potency."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
          <h1 className="text-3xl font-bold text-foreground">Frequently Asked Questions</h1>
        </div>

        <div className="bg-card rounded-2xl p-8 border border-border">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Everything You Need to Know
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about our products, shipping, returns, and more.
              Can't find what you're looking for? <Link to="/contact" className="text-primary hover:underline">Contact our support team</Link>.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border py-6">
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-lg font-semibold text-foreground">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-5 w-5 text-muted-foreground transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                {openIndex === index && (
                  <div className="mt-4 text-muted-foreground">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our customer support team is here to help you with any inquiries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/shop">Browse Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;