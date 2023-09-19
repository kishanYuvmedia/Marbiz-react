import React from "react";
import HeroSection from "../Components/HeroSection";
import Featured from "../Components/Featured";
import { MainListing, ModalListing } from "../Components/MainListing";
import Promotions from "../Components/Promotions";
import "../App.css"

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Featured
        title="Featured"
        subtitle="Hire top influencer across all platforms - See All"
      />
      <Featured
        title="Celebrities & Influencer"
        subtitle="Hire top Celebrities & Influencer all platforms see All"
      />
      <Featured
        title="Spokesperson & Models"
        subtitle="Hire top Spokesperson & Models all platforms see All"
      />
      <Promotions />
    </div>
  );
}
export default HomePage;
