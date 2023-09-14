import React from 'react'
import  { VideoGallery, Gallery } from './Gallery'
import LightBoxGallery from './LightBoxGallery'

const NavTabs = () => {
    return (
        <div>
            {/* <!-- Tabs navs --> */}
            <ul class="nav nav-tabs mb-3" id="ex-with-icons" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="ex-with-icons-tab-1" data-mdb-toggle="tab" href="#ex-with-icons-tabs-1" role="tab"
                        aria-controls="ex-with-icons-tabs-1" aria-selected="true"><i class="fas fa-chart-pie fa-fw me-2"></i>Gallery</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="ex-with-icons-tab-2" data-mdb-toggle="tab" href="#ex-with-icons-tabs-2" role="tab"
                        aria-controls="ex-with-icons-tabs-2" aria-selected="false"><i class="fas fa-chart-line fa-fw me-2"></i>Video</a>
                </li>
                
            </ul>
            {/* <!-- Tabs navs --> */}

            {/* <!-- Tabs content --> */}
            <div class="tab-content" id="ex-with-icons-content">
                <div class="tab-pane fade show active" id="ex-with-icons-tabs-1" role="tabpanel" aria-labelledby="ex-with-icons-tab-1">
                    {/* <Gallery /> */}
                    <LightBoxGallery />
                </div>
                <div class="tab-pane fade" id="ex-with-icons-tabs-2" role="tabpanel" aria-labelledby="ex-with-icons-tab-2">
                    <VideoGallery />
                </div>
                
            </div>
            {/* <!-- Tabs content --> */}
        </div>
    )
}

export default NavTabs