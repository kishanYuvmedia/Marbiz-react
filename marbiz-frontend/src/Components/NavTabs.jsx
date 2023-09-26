import React from "react";
import { VideoGallery } from "./Gallery";
import LightBoxGallery from "./LightBoxGallery";

const NavTabs = (props) => {
  return (
    <div>
      {/* <!-- Tabs navs --> */}
      <ul className="nav nav-tabs mb-3" id="ex-with-icons" role="tablist">
        <li
          className="nav-item"
          role="presentation"
          style={{
            backgroundColor: "matteblack", // Change to your dark background color
            borderColor: "purple", // Purple border
            color: "orange", // Orange text color
            borderRadius: "5px",
          }}
        >
          <a
            className="nav-link fw-bold active"
            id="ex-with-icons-tab-1"
            data-mdb-toggle="tab"
            href="#ex-with-icons-tabs-1"
            role="tab"
            aria-controls="ex-with-icons-tabs-1"
            aria-selected="true"
          >
            <i className="fas fa-chart-pie fa-fw me-2"></i>Gallery
          </a>
        </li>
        <li
          className="nav-item mx-3"
          role="presentation"
          style={{
            backgroundColor: "matteblack", // Change to your dark background color
            borderColor: "purple", // Purple border
            color: "orange", // Orange text color
            borderRadius: "5px",
          }}
        >
          <a
            className="nav-link fw-bold"
            id="ex-with-icons-tab-2"
            data-mdb-toggle="tab"
            href="#ex-with-icons-tabs-2"
            role="tab"
            aria-controls="ex-with-icons-tabs-2"
            aria-selected="false"
          >
            <i className="fas fa-chart-line fa-fw me-2"></i>Video
          </a>
        </li>
      </ul>
      <div className="tab-content" id="ex-with-icons-content">
        <div
          className="tab-pane fade show active"
          id="ex-with-icons-tabs-1"
          role="tabpanel"
          aria-labelledby="ex-with-icons-tab-1"
        >
          {/* <Gallery /> */}
          <LightBoxGallery images={props.images} />
        </div>
        <div
          className="tab-pane fade"
          id="ex-with-icons-tabs-2"
          role="tabpanel"
          aria-labelledby="ex-with-icons-tab-2"
        >
          <VideoGallery />
        </div>
      </div>
      {/* <!-- Tabs content --> */}
    </div>
  );
};

export default NavTabs;
