import React from "react";

const Gallery = () => {
  return (
    <div>
      {/* <div className="row">
                <div className='col-sm-12 col-md-4 '>
                    <img
                        className="rounded-3 ratio ratio-16x9"
                        src={"https://source.unsplash.com/600x900/?tech,street"}
                        alt="qwerty"
                        style={{
                            height: "350px",
                            width: "350px",
                        }}
                    />
                </div>
                <div className='col-sm-12 col-md-4 '>
                    <img
                        className="rounded-3 ratio ratio-16x9"
                        src={"https://source.unsplash.com/600x900/?tech,street"}
                        alt="qwerty"
                        style={{
                            height: "350px",
                            width: "350px",
                        }}
                    />
                </div>
                <div className='col-sm-12 col-md-4 '>
                    <img
                        className="rounded-3 ratio ratio-16x9"
                        src={"https://source.unsplash.com/600x900/?tech,street"}
                        alt="qwerty"
                        style={{
                            height: "350px",
                            width: "350px",
                        }}
                    />
                </div>

            </div> */}
    </div>
  );
};

const VideoGallery = (props) => {
  return (
    <div>
      <div className="row">
        {props.vedio.map((data) => {
          <div className="col-sm-12 col-md-4">
            <div className="ratio ratio-16x9">
              <iframe
                src={data.url}
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export { Gallery, VideoGallery };
