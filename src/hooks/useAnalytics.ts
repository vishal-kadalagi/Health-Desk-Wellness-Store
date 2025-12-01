import { useCallback } from "react";

interface AnalyticsEvent {
  eventName: string;
  properties?: Record<string, any>;
}

export const useAnalytics = () => {
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    // In a real application, this would send data to an analytics service
    console.log("Analytics Event:", event);
    
    // Store in localStorage for demo purposes
    const events = JSON.parse(localStorage.getItem("analyticsEvents") || "[]");
    events.push({
      ...event,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem("analyticsEvents", JSON.stringify(events));
  }, []);

  const getProductViewEvent = (productName: string) => ({
    eventName: "Product Viewed",
    properties: {
      productName,
      category: "Supplements"
    }
  });

  const getAddToCartEvent = (productName: string, price: number) => ({
    eventName: "Added to Cart",
    properties: {
      productName,
      price,
      currency: "INR"
    }
  });

  const getPurchaseEvent = (items: {name: string, price: number}[], total: number) => ({
    eventName: "Purchase Completed",
    properties: {
      items,
      total,
      currency: "INR"
    }
  });

  return {
    trackEvent,
    getProductViewEvent,
    getAddToCartEvent,
    getPurchaseEvent
  };
};