import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import Select from "react-select";
import { BsSearch } from "react-icons/bs";
import { getPublicList } from "../services/api/api-service";
const SearchBar = (props) => {
  const [getPlatform, setPlatform] = useState([]);
  const [getCategory, setCategory1] = useState([]);
  useEffect(() => {
    getPublicList("Platform").then((result) => {
      setPlatform(result);
    });
    getPublicList("Category").then((result) => {
      setCategory1(result);
    });
  }, []);
  function handleMulti(selectedMulti) {
    const filter = [];
    selectedMulti.map((list) => {
      filter.push(list.label);
    });
    props.setCategory(filter);
  }
  return (
    <div>
      {/* Search filters */}
      <Container className="py-3 py-md-5">
        <Row className="justify-content-center align-items-center">
          <form className="position-relative">
            <div className="d-flex flex-column flex-md-row align-items-center rounded-6 border-2 border">
              <div className="me-3 desktop-view">
                <button
                  type="submit"
                  className="search-btn fs-2 rounded-pill align-items-center d-flex"
                >
                  <BsSearch />
                </button>
              </div>
              <div className="col-sm-12 col-md-6 d-flex multi-select-category">
                <Select
                  placeholder="Choose a platform"
                  name="platform"
                  id="platform"
                  className="basic-multi-select d-block"
                  classNamePrefix="select"
                  options={getPlatform}
                  onChange={(e) => props.setPlatform(e.label)}
                />
                <div
                  className="vr py-2 mx-2 desktop-view"
                  style={{
                    backgroundColor: "#FC6E90",
                    alignSelf: "center",
                    height: "50px",
                  }}
                ></div>
              </div>
              <div className="col-sm-12 col-md-6 me-2 multi-select-category">
                <Select
                  isMulti
                  placeholder="Category"
                  name="category"
                  id="category"
                  className="basic-multi-select"
                  classNamePrefix="select"
                  options={getCategory}
                  onChange={(e) => handleMulti(e)}
                />
              </div>
              <div className="me-3 mobile-view">
                <button
                  type="submit"
                  className="search-btn fs-2 rounded-pill align-items-center d-flex"
                >
                  <BsSearch />
                </button>
              </div>
            </div>
          </form>
        </Row>
      </Container>
    </div>
  );
};

export default SearchBar;
