import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "mdb-ui-kit/css/mdb.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "mdb-ui-kit/js/mdb.min.js";
import * as mdb from "mdb-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Page/HomePage";
import Signin from "./Page/CreatorAuth/Signup";
import Verify from "./Page/CreatorAuth/Verify";
import UploadImage from "./Page/CreatorAuth/UploadImage";
import Footer from "./Components/Footer";
import CelebProfile from "./Page/CelebProfile";
import "bs5-lightbox";
import InquiryForm from "./Page/InquiryForm";
import Brand from "./Page/Brand/Brand";
import BrandSignup from "./Page/Brand/BrandSignup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/creator" element={<Signin />} />
          <Route path="/brand" element={<Brand />} />
          <Route path="/brand-signup" element={<BrandSignup />} />
          <Route path="/emailverify" element={<Verify />} />
          <Route path="/UploadImage" element={<UploadImage />} />
          <Route path="/profile/:regName" element={<CelebProfile />} />
          <Route path="/inquiryform/:regName" element={<InquiryForm />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
