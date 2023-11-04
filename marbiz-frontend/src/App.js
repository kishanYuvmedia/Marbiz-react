import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "mdb-ui-kit/css/mdb.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "mdb-ui-kit/js/mdb.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
import "../src/Page/CreatorAuth/style.css";
import "./responsive.css";
import "bs5-lightbox";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// public routes
import NavBar from "./Components/NavBar";
import Home from "./Page/HomePage";
import Footer from "./Components/Footer";
import InquiryForm from "./Page/InquiryForm";
import CelebProfile from "./Page/CelebProfile";
import GlobalLogin from "./Page/Login/GlobalLogin";
import ForgetPassword from "./Page/Login/forget-password"
import ChangePassword from "./Page/Login/change-password";
import AboutUs from "./Page/AboutUs";
import Explore from "./Page/Explore";
import Celebrity from "./Page/Celebrity";
// Creator routes
import Creator from "./Page/CreatorAuth/Creator";
import UploadImage from "./Page/CreatorAuth/UploadImage";
import Verify from "./Page/CreatorAuth/Verify";
import CreatorNavigation from "./Page/CreatorAuth/CreatorNavigation";
import CreatorMyProfile from "./Page/CreatorAuth/CreatorMyProfile";
import CreatorPackages from "./Page/CreatorAuth/CreatorPackages";
import CreatorEnquiries from "./Page/CreatorAuth/CreatorEnquiries";
import CreatorPassword from "./Page/CreatorAuth/CreatorPassword";
import AddPackages from "./Page/CreatorAuth/AddPackages";
import CreatorUpload from "./Page/CreatorAuth/CreatorUpload";
import PortfolioList from "./Page/CreatorAuth/PortfolioList";
// Brand routes
import Brand from "./Page/Brand/Brand";
import BrandSignup from "./Page/Brand/BrandSignup";
import BrandNavigation from "./Page/Brand/BrandNavigation";
import BrandHome from "./Page/Brand/BrandHome";
import BrandBooking from "./Page/Brand/BrandBooking";
import BrandWishlist from "./Page/Brand/BrandWishlist";
import BrandPassword from "./Page/Brand/BrandPassword";
import BrandProfile from "./Page/Brand/BrandProfile";
import ScrollToTop from "./Components/ScrollToTop";

  

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          {/* Public Routes */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/inquiryform" element={<InquiryForm />} />
          <Route path="/:regName" element={<CelebProfile />} />
          <Route path="/login" element={<GlobalLogin />} />
          <Route path="/forgetpassword" element={<ForgetPassword />} />
          <Route path="/ChangePassword/:id" element={<ChangePassword/>}/>
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/celebrity" element={<Celebrity />} />
          {/* Creator Routes */}
          <Route path="/creator" element={<Creator />} />
          <Route path="/emailverify" element={<Verify />} />
          <Route path="/UploadImage" element={<UploadImage />} />
          <Route path="/inquiryform/:regName" element={<InquiryForm />} />

          <Route path="/CreatorDashboard" element={<CreatorNavigation pagetitle="Dashboard" />} >
            <Route path="CreatorMyProfile" element={<CreatorMyProfile pagetitle="My Profile" />} />
            <Route path="CreatorPackages" element={<CreatorPackages pagetitle="My Packages" />} />
            <Route path="AddPackages" element={<AddPackages pagetitle="My Packages" />} />
            <Route path="CreatorEnquiries" element={<CreatorEnquiries pagetitle="My Enquiries" />} />
            <Route path="CreatorPassword" element={<CreatorPassword pagetitle="Update Password" />} />
            <Route path="CreatorPassword" element={<CreatorPassword pagetitle="Update Password" />} />
            <Route path="CreatorUpload" element={<CreatorUpload pagetitle="Add Portfolio" />} />
            <Route path="PortfolioList" element={<PortfolioList pagetitle="Portfolio List"/>}/>
          </Route>
          {/* Brand Routes*/}
          <Route path="/brand" element={<Brand />} />
          <Route path="/brand-signup" element={<BrandSignup />} />
          
          <Route path="/brand-dashboard" element={<BrandNavigation />}>
            <Route path="brandHome" element={<BrandHome />} />
            <Route path="brandBooking" element={<BrandBooking />} />
            <Route path="brandWishlist" element={<BrandWishlist />} />
            <Route path="brandProfile" element={<BrandProfile />} />
            <Route path="brandPassword" element={<BrandPassword />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
      <ScrollToTop />
    </BrowserRouter>
  );
}
export default App;
