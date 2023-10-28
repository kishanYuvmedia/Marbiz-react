import React, { useEffect, useState } from "react";
import { Container, Row ,Spinner} from "react-bootstrap";
import CelebGallery from "../Components/CelebGalleries";
import { getInfluencersAll } from "../services/api/api-service";
import SearchBar from "../Components/SearchBar";
import { isEmpty } from "lodash";
import HeroBgGradient from "../Components/HeroBgGradient";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Explore = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(document.location.search);
  const [list, setList] = useState([]);
  const [getPlatform, setPlatform] = useState(null);
  const [getCategory, setCategory] = useState([]);
  function getlist(p,c) {
      getInfluencersAll(p,c)
      .then((result) => {
        if (Array.isArray(result) && result.length > 0) {
          setList(result);
          console.log("list",result)
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
  }
  const searchhandler = () => {
    if(getPlatform){
      navigate(`/explore?p=${getPlatform}&c=${getCategory.join("-")}`, {
        replace: false,
      });
      window.location.reload(true);
    }else{
      Swal.fire({
        title: "Value not valid !",
        width: 600,
        padding: "3em",
        color: "#fff",
        border: "1px solid red",
        background: "#6824b4",
      });
    }
  };
  useEffect(() => {
    if (searchParams.size > 0) {
      const cParam = searchParams.get("c");
      setPlatform(searchParams.get("p"));
      const cDataArray = cParam.split("-").map(item => item.trim());
      setCategory(cDataArray);
      getlist(searchParams.get("p"),cDataArray)
    }else{
      getlist(null,[])
    }
  }, []);
  return (
    <div>
      {/* BG Gradient */}
      <HeroBgGradient />
      <SearchBar  setPlatform={setPlatform}
        setCategory={setCategory}
        handlerSearch={searchhandler} />
      {/* Celeb Gallery */}
      <Container className="mb-5">
        <Row>
        {isEmpty(list) && (
        <>
          <Spinner
          color="primary"
          style={{
            height: '3rem',
            width: '3rem',
            color:"#fff",
            margin:'0 auto'
          }}
        >
        </Spinner>
        <h4 style={{textAlign:'center',marginTop:10}}>Data Not found</h4></>
        )}
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
