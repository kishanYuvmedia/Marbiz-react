import React, { useState } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import HoverVideoPlayer from 'react-hover-video-player';

const CelebHoverSlider = () => {

  const videoData = [
    {
      index: 0,
      id: "swwapnil-joshi",
      title: "Swwapnil Joshi",
      poster: "https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE_001.jpg?tr=q-80",
      src: "https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_02_.mp4"
    },
    {
      index: 1,
      id: "Krushna-Abhishek",
      title: "Krushna Abhishek",
      poster: "https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE_14.jpg?tr=q-80",
      src: "https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_14.mp4"
    },
    {
      index: 2,
      id: "rajpal-yadav",
      title: "Rajpal Yadav",
      poster: "https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE_16th.jpg?tr=q-80",
      src: "https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_16.mp4"
    },
    {
      index: 3,
      id: "vivek-oberoi",
      title: "Vivek Oberoi",
      poster: "https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE__01.jpg?tr=q-80",
      src: "https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_01.mp4"
    },
    {
      index: 4,
      id: "karishma-tanna",
      title: "Karishma Tanna",
      poster: "https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE_08.jpg?tr=q-80",
      src: "https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_08.mp4"
    },
    {
      index: 5,
      id: "ronit-boss-roy",
      title: "Ronit Boss Roy",
      poster: "https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE_15_.jpg?tr=q-80",
      src: "https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_15.mp4"
    },
    {
      index: 6,
      id: "vishal-malhotra",
      title: "Vishal Malhotra",
      poster: "https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE_10.jpg?tr=q-80",
      src: "https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_10.mp4"
    },
    {
      index: 7,
      id: "archana-singh",
      title: "Archana Singh",
      poster: "https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE_16.jpg?tr=q-80",
      src: "https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_17.mp4"
    },
    {
      index: 8,
      id: "sunil-grover",
      title: "Sunil Grover",
      poster: "https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE__04.jpg?tr=q-80",
      src: "https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_04.mp4"
    },
    {
      index: 9,
      id: "manoj-joshi",
      title: "Manoj Joshi",
      poster: "https://ik.imagekit.io/j83rchiauw/personlized-gift/B2B_WEBPAGE__05.jpg?tr=q-80",
      src: "https://ik.imagekit.io/j83rchiauw/personlized-gift/new-brand-video/B2B_WEBPAGE_05.mp4"
    }
  ];

  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const settings = {
    dots: false,
    infinite: false,
    draggable: true,
    arrows: false,
    centerMode: true,
  };

  const handleVideoHover = (index) => {
    setActiveVideoIndex(index);
  };

  return (
    <>

      <Slider className='video-slider' {...settings}>
        {videoData.map((video, index) => (
          <div
            key={video.index}
            className={`vd-box m${video.index + 1}`}

            // ontouchstart={() => handleVideoHover(index)}
            // ontouchend={() => handleVideoHover(null)}
            onMouseEnter={() => handleVideoHover(index)}
            onMouseLeave={() => handleVideoHover(null)}
          >
            <HoverVideoPlayer
              id={`video-${index}`}
              className="clip"
              type="video/mp4"
              videoSrc={video.src}
              poster={video.poster}
              style={{
                width: '100%',
                transition: 'width 0.8s ease',
                width: activeVideoIndex === index ? '180px' : '80px',
              }}
            />
          </div>
        ))}
      </Slider>

      {videoData.map((video, index) => (
        <div
          key={video.id}
          className={`celebrity-name ${video.id}`}
          style={{ display: activeVideoIndex === index ? "block" : "none" }}
        >
          <h3 className="text-danger">{video.title}</h3>
        </div>
      ))}

      <div className="celebrity-name celeb-list"
        style={{ display: activeVideoIndex === null ? "block" : "none" }}
      >
        <div className="celeb-nm">1000+ brands <span>•</span> 850 mn+ reach</div>
      </div>

    </>
  )
}

export default CelebHoverSlider