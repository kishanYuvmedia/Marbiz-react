import React, { useState, useEffect } from 'react'
import { Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { UpdateMtUser } from '../../services/api/api-service';
import { isEmpty } from 'lodash';
import Swal from "sweetalert2";

const BrandProfile = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // console.log(formData)
    const data = [];
    data.push({

    })
    UpdateMtUser(formData).then(result => {
      if (!isEmpty(result)) {
        Swal.fire(
          "Successfully",
          "Your Profile Update Successfully",
          "success"
        );
      }
    })
  };

  useEffect(() => {
    if (localStorage.getItem("authUser")) {
      const obj = JSON.parse(localStorage.getItem("authUser"));
      setFormData(obj);
    }
  }, [])

  return (
    <div className="container-fluid">
      <div className="row">
        <div className='d-inline-flex justify-content-between my-2'>
          <h1 className="text-center">My Profile</h1>
        </div>
        <hr className="hr hr-blurry border border-danger border-2" />
      </div>
      <div>
        <form>
          <Row>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleName" style={{ color: 'white' }}>
                  Contact Name:
                </Label>
                <Input
                  type="text"
                  id="contactName"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleChange}
                  className='form-control dark-bg'
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleCity" style={{ color: 'white' }}>
                  City:
                </Label>
                <Input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className='form-control dark-bg'

                />
              </FormGroup>

            </Col>
            <Col md={4}>

              <FormGroup>
                <Label for="State" style={{ color: 'white' }}>
                  State:
                </Label>
                <Input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className='form-control dark-bg'

                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="Country" style={{ color: 'white' }}>
                  Country:
                </Label>
                <Input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className='form-control dark-bg'

                />
              </FormGroup>

            </Col>
            <Col md={12}>
              <button onClick={handleSubmit} className='btn-global px-3 my-3'>
                Update Profile
              </button>
            </Col>
          </Row>
        </form>
      </div>

    </div>
  )
}

export default BrandProfile