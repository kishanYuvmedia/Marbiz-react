import React, { useEffect, useState } from "react";
import HeroSection from "../Components/HeroSection";
import SliderList from "../Components/SliderList";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import PopularCategories from "../Components/PopularCategories";
import {
  getInfluencersFetured,
  getInfluencersList,
  getInfluencersAll,
} from "../services/api/api-service";
import SearchBar from "../Components/SearchBar";
import Howitworks from "../Components/Howitworks";
import Swal from "sweetalert2";

// Placeholder data (example)
const placeholderData = [
  {
    id: 1,
    fullName: "Kiku Sharda",
    coverImage:
      "https://ik.imagekit.io/j83rchiauw/tr:w-200,h-300,fo-auto/tring/202208161306_zZXQp5Fugove8q8U.png",
    category: [{ label: "Actor" }],
  },
  {
    id: 2,
    fullName: "Mohit Malhotra",
    coverImage:
      "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/RT4rfplg008IPj89.jpeg",
    category: [{ label: "Actor" }],
  },
  {
    id: 3,
    fullName: "Salim Merchant",
    coverImage:
      "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/202208181923_LDNA4pou48pkmtXD.jpeg",
    category: [{ label: "Singer" }],
  },
  {
    id: 4,
    fullName: "Salim Merchant",
    coverImage:
      "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/202208181923_LDNA4pou48pkmtXD.jpeg",
    category: [{ label: "Singer" }],
  },
  {
    id: 5,
    fullName: "Salim Merchant",
    coverImage:
      "https://ik.imagekit.io/j83rchiauw/tring/tr:w-350,h-350,fo-auto,q-100/202208181923_LDNA4pou48pkmtXD.jpeg",
    category: [{ label: "Singer" }],
  },
];

function HomePage() {
  const navigate = useNavigate();
  const [list, setList] = useState([]);
  const [instagramlist, setInstagramlist] = useState([]);
  const [ugclist, setugclist] = useState([]);
  const [Youtubelist, setYoutubeList] = useState([]);
  const [getPlatform, setPlatform] = useState(null);
  const [getCategory, setCategory] = useState([]);
  useEffect(() => {
    getInfluencersFetured(8)
      .then((result) => {
        if (Array.isArray(result) && result.length > 0) {
          setTimeout(() => {
            setList(result);
          }, 1000);
        } else {
          console.error("API response is empty or invalid:", result);
          setTimeout(() => {
            setList(placeholderData);
          }, 1000);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
    getlist("User Generated Content", setugclist);
    getlist("Instagram", setInstagramlist);
    getlist("Youtube", setYoutubeList);
  }, []);
  const searchhandler = () => {
    if(getPlatform){
      navigate(`/explore?p=${getPlatform}&c=${getCategory.join("-")}`, {
        replace: false,
      });
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
  function getlist(type, valueSetter) {
    getInfluencersList(6, type)
      .then((result) => {
        if (Array.isArray(result) && result.length > 0) {
          setTimeout(() => {
            valueSetter(result);
          }, 1000);
        } else {
          console.error("API response is empty or invalid:", result);
          setTimeout(() => {
            valueSetter(placeholderData);
          }, 1000);
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
      });
  }
  return (
    <div>
      <HeroSection />

      <SearchBar
        setPlatform={setPlatform}
        setCategory={setCategory}
        handlerSearch={searchhandler}
      />

      <PopularCategories title={"Popular Categories to explore"} />

      <SliderList
        title="Top Influencer"
        subtitle="Hire top influencer across all platforms - See All"
        list={list ? list : placeholderData}
      />
      <SliderList
        title="Instgram"
        subtitle="Hire top Celebrities & Influencer all platforms see All"
        list={instagramlist ? instagramlist : placeholderData}
      />
      <SliderList
        title="Youtube"
        subtitle="Hire top Spokesperson & Models all platforms see All"
        list={Youtubelist ? Youtubelist : placeholderData}
      />
      <SliderList
        title="UGC"
        subtitle="Hire top Spokesperson & Models all platforms see All"
        list={ugclist ? ugclist : placeholderData}
        marginbottom="50px"
      />

      <Howitworks />
    </div>
  );
}
export default HomePage;
