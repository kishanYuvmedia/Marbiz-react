import React from "react";
import HeroSection from "../Components/HeroSection";
import Featured from "../Components/Featured";
import { MainListing, ModalListing } from "../Components/MainListing";
import Footer from "../Components/Footer";
import logo from "../Images/marbiz-logo.png";


function HomePage() {
  return (
    <div>
      <HeroSection />
      <Featured />
      <MainListing />
      <ModalListing />
      <Footer />
    </div>
  );
}
export default HomePage;
