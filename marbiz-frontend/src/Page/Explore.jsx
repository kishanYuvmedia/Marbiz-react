import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import CelebGallery from "../Components/CelebGalleries";
import { getInfluencersAll } from "../services/api/api-service";
import SearchBar from "../Components/SearchBar";
import { isEmpty } from "lodash";
const Explore = () => {
  const [list, setList] = useState([]);
  const [getPlatform, setPlatform] = useState(null);
  const [getCategory, setCategory] = useState([]);
  useEffect(() => {
    getInfluencersAll(getPlatform, getCategory)
      .then((result) => {
        if (Array.isArray(result) && result.length > 0) {
          setList(result);
        } else {
          console.error("API response is empty or invalid:", result);
          setTimeout(() => {
            setList([]);
          }, 1000);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  }, [getPlatform, getCategory]);
  return (
    <div>
      <SearchBar setPlatform={setPlatform} setCategory={setCategory} />
      {/* Celeb Gallery */}
      <Container className="mb-5">
        <Row>
          {!isEmpty(list) && (
            <CelebGallery
              title="Influencer"
              subtitle="Hire top influencer across all platforms"
              list={list}
            />
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Explore;
