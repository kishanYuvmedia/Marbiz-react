import React from "react";
import HeroSection from "../Components/HeroSection";
import Featured from "../Components/Featured";
import { MainListing, ModalListing } from "../Components/MainListing";
import Footer from "../Components/Footer";
import Promotions from "../Components/Promotions";


function HomePage() {
  return (
    <div>
      <HeroSection />
      <Featured />
      <MainListing />
      <ModalListing />
      <Promotions />
      <Footer />
    </div>
  );
}
export default HomePage;
