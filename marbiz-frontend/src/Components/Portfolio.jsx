import React, { useEffect, useState } from "react";
import Flicking from '@egjs/react-flicking'
import { isEmpty, result } from "lodash";
import { getImagesList,getPublicList,getImagesListType } from "../services/api/api-service"
const Portfolio = ({ userId }) => {
    const flikingOption = {
        // defaultIndex: 1,
        // bound: true,
        deceleration: 0.0005,
        circular: true,
        align: "prev",
        // renderOnlyVisible: true,
        // duration: 500,
        inputType: ["touch", "mouse", "pointer"],
        // moveType: 'freeScroll',
        // moveType: "snap",
        panelsPerView: 4,
        resizeOnContentsReady: true,
        preventDefaultOnDrag: true,
        bounce: "20%"
    }
    const [list, setList] = useState([]);
    const [Category, setCategory] = useState(null);
    const [user, setUser] = useState(userId);
    const [contenttype, setContentType] = useState(null);
    useEffect(() => {
        getPackage(Category)
    }, [Category])
    useEffect(() => {
        getPublicList("Content Type").then((result) => {
            setContentType(result);
        });
    }, [])
    function getPackage(type) {
        setList([]);
        if (type == null) {
            getImagesList(user).then(result => {
                if (!isEmpty(result)) {
                    setList(result);
                }
            }).catch((e) => {
                setList([]);
            })
        }
        else{
            getImagesListType(user,type).then(result => {
                if (!isEmpty(result)) {
                    setList(result);
                }
            }).catch((e) => {
                setList([]);
            })
        }
    }
    return (
        <>
            {/* <!-- Tabs navs --> */}
            <ul className="nav package-navigation nav-tabs mb-3" id="ex-with-icons" role="tablist">
                {contenttype?.map((item, index) =>
                    <li className="nav-item" key={index}>
                        <button
                            className={`nav-link px-2 ${Category == item.value ? 'active' : ''}`}
                            id={`all-${item.value}`}
                            onClick={() => setCategory(item.value )}
                        >
                          { item.value}
                        </button>
                    </li>
                )}
            </ul>
            <div className="tab-content" id="ex-with-icons-content">
                <div
                    className="tab-pane fade show active"
                    id="all-posts"
                    role="tabpanel"
                    aria-labelledby="all-post"
                >
                    {/* <LightBoxGallery images={props.images} /> */}

                    <div className="container-fluid ">
                        <div className="row py-3">
                            <div className="col-md-12 ">
                                <h2>{Category}</h2>
                                <Flicking
                                    {...flikingOption}
                                >
                                    {list.map((item, index) =>
                                        <div className='p-3' key={index}>
                                            <img src={item.src} alt={item.caption} className="rounded-3 img-fluid" />
                                        </div>
                                    )}

                                </Flicking>
                            </div>

                        </div>


                    </div>
                </div>
            </div>
            {/* <!-- Tabs content --> */}

        </>
    )
}

export default Portfolio