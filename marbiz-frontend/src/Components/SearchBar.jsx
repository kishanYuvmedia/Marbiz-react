import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import Select from 'react-select'
import { BsSearch } from "react-icons/bs";


const optionsPlatform = [
    { value: 'instagram', label: 'Instagram' },
    { value: 'youtube', label: 'Youtube' },
    { value: 'usergeneratedcontent', label: 'User Generated Content' }
]
const optionsCategory = [
    { value: 'lifestyle', label: 'Life Style' },
    { value: 'fashion', label: 'Fashion' },
    { value: 'travel', label: 'Travel' }
]

const SearchBar = () => {
    return (
        <div>

            {/* Search filters */}
            <Container className='py-3 py-md-5' >
                <Row className='justify-content-center align-items-center' >
                    {/* <form>
                        <div className='d-flex px-2 px-md-4 justify-content-start align-items-center rounded-6' style={{
                            border: "1px solid white",
                        }}>
                            <div className='me-3 desktop-view'>
                                <button type="submit" className='search-btn fs-2 rounded-pill align-items-center d-flex'><BsSearch /></button>
                            </div>
                            <div className="col-sm-12 multi-select-category d-flex">

                                <Select
                                    placeholder="Choose a platform"
                                    name="platform"
                                    id="platform"
                                    className="basic-multi-select "
                                    classNamePrefix="select"
                                    options={optionsPlatform}
                                />
                                <div className="vr py-2 mx-2" style={{
                                    backgroundColor: "#FC6E90",
                                    alignSelf: "center",
                                    height: "50px",
                                }}>

                                </div>
                            </div>

                            <div className="col-sm-12 me-2 multi-select-category">
                                <Select
                                    isMulti
                                    placeholder="Category"
                                    name="category"
                                    id="category"
                                    className="basic-multi-select "
                                    classNamePrefix="select"
                                    options={optionsCategory}

                                />
                            </div>


                        </div>
                    </form> */}

                    <form className=''>
                        <div className="position-relative d-flex flex-column flex-md-row align-items-center rounded-6 border-2 border">
                            <div className="col-md-1 justify-content-center me-3 desktop-view">
                                <button type="submit" className="search-btn fs-2 rounded-pill align-items-center d-flex"><BsSearch /></button>
                            </div>
                            <div className="col-sm-12 col-md-5  multi-select-category">

                                <Select
                                    placeholder="Choose a platform"
                                    name="platform"
                                    id="platform"
                                    className="basic-multi-select d-block"
                                    classNamePrefix="select"
                                    options={optionsPlatform}
                                />
                                </div>
                                <div className="col-md-1 vr py-2 mx-2 desktop-view" style={{
                                    backgroundColor: "#FC6E90",
                                    alignSelf: "center",
                                    height: "50px",
                                }}>
                                </div>
                            
                            <div className="col-sm-12 col-md-5 me-2 multi-select-category">
                                <Select
                                    isMulti
                                    placeholder="Category"
                                    name="category"
                                    id="category"
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                    options={optionsCategory}
                                />
                            </div>
                            <div className="me-3 mobile-view">
                                <button type="submit" className="search-btn fs-2 rounded-pill align-items-center d-flex"><BsSearch /></button>
                            </div>
                        </div>
                    </form>




                </Row>
            </Container></div>
    )
}

export default SearchBar