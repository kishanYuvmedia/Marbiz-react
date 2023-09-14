import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import * as mdb from 'mdb-ui-kit';
import $ from 'jquery';
import Popper from 'popper.js';
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css"; 
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Page/HomePage";
import Signin from "./Page/CreatorAuth/Signup";
import Footer from "./Components/Footer";
import CelebProfile from "./Page/CelebProfile";
import 'bs5-lightbox';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/celebprofile" element={<CelebProfile />} />
          <Route path="/creator" element={<Signin />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
