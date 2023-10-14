import React, { useEffect, useState } from "react";
import HeroSection from "../Components/HeroSection";
import SliderList from "../Components/SliderList";
// import { MainListing, ModalListing } from "../Components/MainListing";
import Promotions from "../Components/Promotions";
import "../App.css";
import PopularCategories from "../Components/PopularCategories";
import {
  getInfluencersFeturedList,
  getInfluencersList,
} from "../services/api/api-service";
import SearchBar from "../Components/SearchBar";


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
  
  const [list, setList] = useState([]);
  const [Influencerlist, setInfluencerlistList] = useState([]);
  const [celebritylist, setcelebritylistList] = useState([]);


  useEffect(() => {

    getInfluencersFeturedList(6, "LinkedIn")
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

    getInfluencersList(6, "Youtube")
      .then((result) => {
        
        if (Array.isArray(result) && result.length > 0) {
          setTimeout(() => {
            setInfluencerlistList(result); 
          }, 1000);
        } else {
          
          console.error("API response is empty or invalid:", result);
          setTimeout(() => {
            setInfluencerlistList(placeholderData); 
          }, 1000);
          
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
        
      });

    getInfluencersList(6, "LinkedIn")
      .then((result) => {
        
        if (Array.isArray(result) && result.length > 0) {
          setTimeout(() => {
            setcelebritylistList(result); 
          }, 1000);
        } else {
          
          console.error("API response is empty or invalid:", result);
          setTimeout(() => {
            setcelebritylistList(placeholderData); 
          }, 1000);
          
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
        
      });

    
  }, []);

  return (
    <div>
      <HeroSection  list={list} />

      <SearchBar />

      <PopularCategories title={"Popular Categories to explore"} />

      <SliderList
        title="Top Influencer"
        subtitle="Hire top influencer across all platforms - See All"
        list={list}
      />
      
      <SliderList
        title="Instgram"
        subtitle="Hire top Celebrities & Influencer all platforms see All"
        list={celebritylist}
      />
      <SliderList
        title="Youtube"
        subtitle="Hire top Spokesperson & Models all platforms see All"
        list={Influencerlist}
      />
      <SliderList
        title="UGC"
        subtitle="Hire top Spokesperson & Models all platforms see All"
        list={Influencerlist}
        marginbottom="50px"
      />


      
    </div>
  );
}
export default HomePage;