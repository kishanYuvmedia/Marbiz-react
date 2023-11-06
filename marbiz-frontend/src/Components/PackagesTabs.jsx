import React, { useEffect, useState } from "react";

import { BsInstagram, BsYoutube } from "react-icons/bs";
import PackageCard from "./PackageCard";
import ugcIcon from "../Images/ugc_icon.png"
import instaIcon from "../Images/youtube_icon.png"
import youtubeIcon from "../Images/insta_icon.png"
import LinkedIcon from "../Images/link.png"
import { PackageById, PackageByIdAndType } from "../services/api/api-service"
import { isEmpty, result } from "lodash";

const PackagesTabs = ({ userId, regName }) => {

  const [list, setList] = useState([]);
  const [Category, setCategory] = useState(null);
  const [user, setUser] = useState(userId);

  useEffect(() => {
    getPackage(Category)
  }, [Category])

  function getPackage(type) {
    setList([]);
    if (type == null) {
      PackageById(user).then(result => {
        if (!isEmpty(result)) {
          setList(result);
          // console.log("package by id", result)
        }
      }).catch((e) => {
        setList([]);
      })
    } else {
      PackageByIdAndType(type, user).then(result => {
        if (!isEmpty(result)) {
          setList(result);
        }
      }).catch((e) => {
        setList([]);
      })
    }
  }

  return (
    <div>
      <ul className="nav package-navigation nav-tabs mb-3" id="ex-with-icons" role="tablist">

        <li className="nav-item">
          <button
            className={`nav-link ${Category == null ? 'active' : ''}`}
            id="all-package"
            onClick={() => setCategory(null)}
          >
            All
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${Category == 'Instagram' ? 'active' : ''}`}
            id="instagram-package"
            onClick={() => setCategory("Instagram")}
          >
            Instagram
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${Category == 'Youtube' ? 'active' : ''}`}
            id="youtube-package"
            onClick={() => setCategory("Youtube")}
          >
            Youtube
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${Category == 'User Generated Content' ? 'active' : ''}`}
            id="ugc-packages"
            onClick={() => setCategory("User Generated Content")}
          >
            UGC
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${Category == 'LinkedIn' ? 'active' : ''}`}
            id="ugc-packages"
            onClick={() => setCategory("LinkedIn")}
          >
            LinkedIn
          </button>
        </li>
      </ul>
      <div className="tab-content" id="ex-with-icons-content">
        <div className="tab-pane fade show active" id="all-packages" role="tabpanel" aria-labelledby="all-package">
          <div className="container-fluid">
            <div className="row py-3">
              {list.map((item, index) =>
                <div className="col-md-6" key={index}>
                  <PackageCard
                    regName={regName}
                    title={item.title}
                    cost={item.price}
                    details={item.Description}
                    packageId={item.id}
                    icon={item.platform === "Instagram" ? instaIcon : item.platform === "LinkedIn" ? LinkedIcon : item.platform === "Youtube" ? youtubeIcon : ugcIcon} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackagesTabs;
