import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Select from "react-select";


const Category = () => {
  return (
    <div>
      <Container className='py-5'>
        <Row className='d-grid align-content-top justify-content-center' >


          <form>
            <div className='d-flex bg-dark p-2 rounded-6'>
              <div className="  ">
                <select class="form-select dark-bg form-select-lg " aria-label="Large select example">
                  <option selected>Open this select menu</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

              </div>
              <div className="ms-3 ">
                <Select
                  isMulti
                  name="category"
                  id="category"
                  className="basic-multi-select "
                  classNamePrefix="select"
                />
              </div>
              <div className='ms-3'>
                <Button type="submit" className='srch-btn'>Submit form</Button>
              </div>

            </div>
          </form>

        </Row>
      </Container>
    </div>
  )
}

export default Category