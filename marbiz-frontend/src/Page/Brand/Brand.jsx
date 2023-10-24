import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
// images
import artist_1 from "../../Images/artist_1.webp";
import artist_2 from "../../Images/artist_2.webp";
import artist_3 from "../../Images/artist_3.webp";
import artist_4 from "../../Images/artist_4.webp";
import InfoCardOne from "../../Components/InfoCardOne";
import InfoCardTwo from "../../Components/InfoCardTwo";
import PopularCategories from "../../Components/PopularCategories";
import HeroBgGradient from "../../Components/HeroBgGradient";

const Brand = () => {
  return (
    <div>
      <Container className="py-5">
        {/* BG Gradient */}

        <HeroBgGradient />

        <Row className="d-grid align-content-center justify-content-center">
          <div className="d-flex justify-content-center flex-column align-items-center">
            <div className="typeWriterText text-center mb-2">
              The Easy Way to Generate
            </div>
            <Typewriter
              options={{
                strings: [
                  "Video Ads",
                  "Sponsored photo",
                  "Testimonials",
                  "Product Photos",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "typeWriterTextMove",
              }}
            />

            <p className="text-secondary text-center fs-4 text-capitalize my-3">
              Find influencer, run campaigns, and get unique content for your
              brand in seconds
            </p>
          </div>

          <div className="d-flex justify-content-center">
            <div className="me-3">
              <Link to="/brand-signup">
                <button className="btn-global px-4 py-2">
                  Start For Free
                </button>

              </Link>
            </div>
            <div className="desktop-view">
              <Link to="/brand-dashboard/brandHome">
                <button className="btn-global px-4 py-2">
                  Dashboard
                </button>

              </Link>
            </div>
          </div>
        </Row>
      </Container>

      <InfoCardOne
        title={"Find and Hire Influencers in Seconds on the Marketplace"}
        image={artist_2}
        infoboxHeadingOne={"Search Influencers"}
        infoboxSubtitleOne={
          "Search thousands of vetted Instagram, UGC, and YouTube influencers."
        }
        infoboxHeadingTwo={"Purchase Securely"}
        infoboxSubtitleTwo={
          "Safely purchase through Marbiz. We hold your payment until the work is completed."
        }
        infoboxHeadingThree={"Receive Quality Content"}
        infoboxSubtitleThree={
          "Receive your high-quality content from influencers directly through the platform."
        }
      />

      <InfoCardTwo
        title={"Save Hours With Campaigns and Work With Influencers at Scale"}
        image={artist_4}
        infoboxHeadingOne={"Create Campaigns"}
        infoboxSubtitleOne={
          "Centralize your images, requirements, content examples, and more in a campaign brief."
        }
        infoboxHeadingTwo={"Get Brand Deals"}
        infoboxSubtitleTwo={
          "Get discovered by thousands of brands on our marketplace looking to work with you."
        }
        infoboxHeadingThree={"Get Brand Deals"}
        infoboxSubtitleThree={
          "Get discovered by thousands of brands on our marketplace looking to work with you."
        }
      />

      <InfoCardOne
        title={"Put Your Influencer Marketing on Autopilot"}
        image={artist_2}
        infoboxHeadingOne={"Post Campaigns"}
        infoboxSubtitleOne={
          "Centralize your images, requirements, content examples, and more in a campaign brief."
        }
        infoboxHeadingTwo={"Set Targeting"}
        infoboxSubtitleTwo={
          "Specify demographics including niche, location and following size of the influencers you want to target."
        }
        infoboxHeadingThree={"Influencers Apply"}
        infoboxSubtitleThree={
          "Targeted influencers apply with their pricing and you can choose who to work with."
        }
      />

      <InfoCardTwo
        title={"One Place for All of Your Content Needs"}
        image={artist_4}
        infoboxHeadingOne={"Sponsored Posts"}
        infoboxSubtitleOne={
          "Purchase sponsored content on Instagram, TikTok, and YouTube."
        }
        infoboxHeadingTwo={"Product Tutorials"}
        infoboxSubtitleTwo={
          "Use influencers to create high-quality product tutorials."
        }
        infoboxHeadingThree={"Testimonials"}
        infoboxSubtitleThree={
          "Get influencers to generate testimonials for your product or business."
        }
      />

      <div className="container">
        <div className="row">
          <PopularCategories title={"Over 100,000 Creators for Your Brand"} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
