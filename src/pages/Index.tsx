import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import BestSellers from "@/components/BestSellers";
import TrustBadges from "@/components/TrustBadges";
import AboutUs from "@/components/AboutUs";
import CharitySection from "@/components/CharitySection";
import Footer from "@/components/Footer";
import HealthTips from "@/components/HealthTips";
import NewsletterSignup from "@/components/NewsletterSignup";
import { useEffect } from "react";

const Index = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <div className="py-8">
          <HealthTips />
        </div>
        <Categories />
        <BestSellers />
        <TrustBadges />
        <AboutUs />
        <CharitySection />
        <div className="py-16">
          <NewsletterSignup />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
