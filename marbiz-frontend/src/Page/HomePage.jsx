import React from "react";
import HeroSection from "../Components/HeroSection";
import Featured from "../Components/Featured";
// import { MainListing, ModalListing } from "../Components/MainListing";
import Promotions from "../Components/Promotions";
import "../App.css"
import PopularCategories from "../Components/PopularCategories";

function HomePage() {
  return (
    <div>
      <HeroSection />
      <Featured
        title="Featured"
        subtitle="Hire top influencer across all platforms "
      />
      <PopularCategories />
      <Featured
        title="Influencer"
        subtitle="Hire top Influencer all platforms "
      />
      <Featured
        title="Celebrities"
        subtitle="Hire top Celebrities all platforms"
      />
      <Featured
        title="Spokesperson & Models"
        subtitle="Hire top Spokesperson & Models all platforms"
      />
      <Promotions />
    </div>
  );
}
export default HomePage;
