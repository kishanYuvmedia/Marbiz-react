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
];

function HomePage() {
  const [list, setList] = useState([]);
  const [Influencerlist, setInfluencerlistList] = useState([]);
  const [celebritylist, setcelebritylistList] = useState([]);
  useEffect(() => {
    getInfluencersFeturedList(6, "Influencers")
      .then((result) => {
        // Check if the result is an array and not empty
        if (Array.isArray(result) && result.length > 0) {
          setTimeout(() => {
            setList(result); // Use placeholder data
          }, 1000);
        } else {
          // Handle the case where the API call returns an empty or invalid response
          console.error("API response is empty or invalid:", result);
          setTimeout(() => {
            setList(placeholderData); // Use placeholder data
          }, 1000);
          // You can set a default state here if needed
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
        // Handle the error state here if needed
        // You can set a default state here if needed
      });
    getInfluencersList(6, "Influencers")
      .then((result) => {
        // Check if the result is an array and not empty
        if (Array.isArray(result) && result.length > 0) {
          setTimeout(() => {
            setInfluencerlistList(result); // Use placeholder data
          }, 1000);
        } else {
          // Handle the case where the API call returns an empty or invalid response
          console.error("API response is empty or invalid:", result);
          setTimeout(() => {
            setInfluencerlistList(placeholderData); // Use placeholder data
          }, 1000);
          // You can set a default state here if needed
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
        // Handle the error state here if needed
        // You can set a default state here if needed
      });
    getInfluencersList(6, "celebrity")
      .then((result) => {
        // Check if the result is an array and not empty
        if (Array.isArray(result) && result.length > 0) {
          setTimeout(() => {
            setcelebritylistList(result); // Use placeholder data
          }, 1000);
        } else {
          // Handle the case where the API call returns an empty or invalid response
          console.error("API response is empty or invalid:", result);
          setTimeout(() => {
            setcelebritylistList(placeholderData); // Use placeholder data
          }, 1000);
          // You can set a default state here if needed
        }
      })
      .catch((error) => {
        console.error("Error fetching data from the API:", error);
        // Handle the error state here if needed
        // You can set a default state here if needed
      });
  }, []);
  return (
    <div>
      <HeroSection />
      <SliderList
        title="Featured"
        subtitle="Hire top influencer across all platforms - See All"
        list={list}
      />
      <PopularCategories />
      <SliderList
        title="Celebrities"
        subtitle="Hire top Celebrities & Influencer all platforms see All"
        list={celebritylist}
      />
      <SliderList
        title="Influencer"
        subtitle="Hire top Spokesperson & Models all platforms see All"
        list={Influencerlist}
      />
      <Promotions />
    </div>
  );
}
export default HomePage;
