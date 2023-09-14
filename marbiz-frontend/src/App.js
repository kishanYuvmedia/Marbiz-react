import "mdb-react-ui-kit/dist/css/mdb.min.css";
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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="/creator" element={<Signin />} />
          <Route path="/emailverify" element={<Verify />} />
          <Route path="/UploadImage" element={<UploadImage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
