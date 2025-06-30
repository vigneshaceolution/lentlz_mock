import React from "react";
import Header from "./Header";
import WhyLentlz from "./WhyLentlzSection";
import FoodPresentationSection from "./FoodCard";
import MealSubscriptionPlans from "./SubscriptionPlans";
import PromoSection from "./PromoSection";
import NewsletterSection from "./NewsletterSection";
import Footer from "./Footer";
import HomeSection from "./HomeSection";
import backgroundImage from "../assets/main-bg.png";

const HeroSection: React.FC = () => {
  return (
<div className="relative w-full min-h-screen">
  {/* Background image */}
  <img
    src={backgroundImage}
    alt="Background"
    className="hidden lg:block absolute inset-0 w-full h-full object-cover z-0"
  />

  {/* Foreground content */}
  <div className="relative z-10">
    <Header />
    <HomeSection />
    <WhyLentlz />
    <FoodPresentationSection />
    <MealSubscriptionPlans />
    <PromoSection />
    <NewsletterSection />
    <Footer />
  </div>
</div>

  );
};

export default HeroSection;
