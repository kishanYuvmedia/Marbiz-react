import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "mdb-ui-kit/css/mdb.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "mdb-ui-kit/js/mdb.min.js";
import * as mdb from "mdb-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import "../src/Page/CreatorAuth/style.css";
import "./responsive.css";
import "bs5-lightbox";
// import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// public routes
import NavBar from "./Components/NavBar";
import Home from "./Page/HomePage";
import Footer from "./Components/Footer";
import InquiryForm from "./Page/InquiryForm";
import CelebProfile from "./Page/CelebProfile";
import GlobalLogin from "./Page/Login/GlobalLogin";
import AboutUs from "./Page/AboutUs";
import Explore from "./Page/Explore";
import Celebrity from "./Page/Celebrity";

// Creator routes
import Creator from "./Page/CreatorAuth/Creator";
import UploadImage from "./Page/CreatorAuth/UploadImage";
import Verify from "./Page/CreatorAuth/Verify";
// Brand routes
import Brand from "./Page/Brand/Brand";
import BrandSignup from "./Page/Brand/BrandSignup";
import BrandDashboard from "./Page/Brand/BrandDashboard";
import BrandHome from "./Components/BrandHome";
import BrandBooking from "./Components/BrandBooking";
import BrandWishlist from "./Components/BrandWishlist";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="/inquiryform" element={<InquiryForm />} />
          <Route path="/:regName" element={<CelebProfile />} />
          <Route path="/login" element={<GlobalLogin />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/celebrity" element={<Celebrity />} />

          {/* Creator Routes */}
          <Route path="/creator" element={<Creator />} />
          <Route path="/emailverify" element={<Verify />} />
          <Route path="/UploadImage" element={<UploadImage />} />
          <Route path="/inquiryform/:regName" element={<InquiryForm />} />
          {/* Brand Routes*/}
          <Route path="/brand" element={<Brand />} />
          <Route path="/brand-signup" element={<BrandSignup />} />
          <Route path="/brand-dashboard" element={<BrandDashboard />}>
            <Route path="brandHome" element={<BrandHome />} />
            <Route path="brandBooking" element={<BrandBooking />} />
            <Route path="brandWishlist" element={<BrandWishlist />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
