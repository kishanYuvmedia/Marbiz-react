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
            <Container className='py-5' >
                <Row className='d-grid align-content-top justify-content-center' >
                    <form>
                        <div className='d-flex bg-dark p-2 align-items-center rounded-6'>

                            <div className="multi-select-category">

                                <Select
                                    placeholder="Platform"
                                    name="platform"
                                    id="platform"
                                    className="basic-multi-select "
                                    classNamePrefix="select"
                                    options={optionsPlatform}
                                />
                            </div>

                            <div className="ms-3 multi-select-category">
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
                            <div className='ms-3'>
                                <Button type="submit" className='srch-btn fs-6 rounded-pill align-items-center d-flex'><BsSearch /></Button>
                            </div>

                        </div>
                    </form>

                </Row>
            </Container></div>
    )
}

export default SearchBar