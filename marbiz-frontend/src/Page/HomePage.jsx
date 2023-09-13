import React from "react";
import HeroSection from "../Components/HeroSection";
import Featured from "../Components/Featured";
import { MainListing, ModalListing } from "../Components/MainListing";
import Promotions from "../Components/Promotions";


function HomePage() {
  return (
    <div>
      <HeroSection />
      <Featured />
      <MainListing />
      <ModalListing />
      <Promotions />
      
    </div>
  );
}
export default HomePage;
