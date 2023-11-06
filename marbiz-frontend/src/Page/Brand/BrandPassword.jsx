
import React, { useState, useEffect } from 'react'
import { Card, CardTitle, Row, Button, CardHeader, CardBody, Col, FormGroup, Label, Input } from 'reactstrap';
import { UpdateMtUser, loginOut } from '../../services/api/api-service';
import { isEmpty } from 'lodash';
import Swal from "sweetalert2";

import { BsEye, BsEyeSlash } from "react-icons/bs";

const BrandPassword = ({ pagetitle }) => {

  const [errorPassword, seterrorPassword] = useState(null)
  const [formData, setFormData] = useState({});
  const [formDatanew, setFormDataNew] = useState({ cpassword: "", password: "" });
  const [type, setType] = useState('password');
  const [confirmType, setConfirmType] = useState('password');
  const [icon, setIcon] = useState(<BsEyeSlash />);
  const [confirmIcon, setConfirmIcon] = useState(<BsEyeSlash />);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataNew({
      ...formDatanew,
      [name]: value,
    });

    if (name === 'password' || name === 'cpassword') {
      if (formDatanew.password === formDatanew.cpassword) {
        // Passwords match
        seterrorPassword();
      } else {
        // Passwords do not match
        seterrorPassword('Passwords do not match');
      }
    }
  };

  const handleSubmit = () => {
    if (formDatanew.password === formDatanew.cpassword) {
      const updatedFormData = { ...formData, password: formDatanew.password };
      console.log("datapassword", updatedFormData)
      Swal.fire({
        title: "Logout Your account",
        width: 600,
        padding: "3em",
        customClass: {
          title: 'my-swal-title',
        },
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, logout",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          UpdateMtUser(updatedFormData)
            .then((result) => {
              if (!isEmpty(result)) {
                loginOut()
                Swal.fire("Successfully", "Password Update successfully", "success");
              }
            })
            .catch((error) => {
              Swal.fire("Successfully", error.message, "success");
            });

        }
      });
    } else {
      Swal.fire("Warning", "Your Password Not Match", "sarning");
    }
  };

  const handleToggle = () => {
    if (type === 'password') {
      setIcon(<BsEye />);
      setType('text')
    } else {
      setIcon(<BsEyeSlash />)
      setType('password')
    }
  }
  const handleConfirmToggle = () => {
    if (confirmType === 'password') {
      setConfirmIcon(<BsEye />);
      setConfirmType('text')
    } else {
      setConfirmIcon(<BsEyeSlash />)
      setConfirmType('password')
    }
  }

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
          <h1 className="text-center">Update Password</h1>
        </div>
        <hr className="hr hr-blurry border border-danger border-2" />
      </div>
      <div>
        <form>
          <Row>
            <Col md={4}>
              <FormGroup className='position-relative'>
                <Label for="exampleName" style={{ color: 'white' }}>
                  Password:
                </Label>
                <Input
                  type={type}
                  id="password"
                  name="password"
                  placeholder='New Password'
                  value={formDatanew.password}
                  onChange={handleChange}
                  className='form-control dark-bg'

                />
                <span className='text-white fs-4' onClick={handleToggle} style={{
                  position: "absolute",
                  top: "40px",
                  right: "20px",
                }}>
                  {icon}
                </span>
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup className='position-relative'>
                <Label for="cpassword" style={{ color: 'white' }}>
                  Confirm Password:
                </Label>
                <Input
                  type={confirmType}
                  id="cpassword"
                  name="cpassword"
                  placeholder='Retype New Password'
                  value={formDatanew.cpassword}
                  onChange={handleChange}
                  className='form-control dark-bg'

                />
                <span className='text-white fs-4' onClick={handleConfirmToggle} style={{
                  position: "absolute",
                  top: "40px",
                  right: "20px",
                }}>
                  {confirmIcon}
                </span>
              </FormGroup>
              <label style={{ color: 'red' }}>{errorPassword}</label>
            </Col>
            <Col md={12}>
              <Button onClick={handleSubmit} className='btn-global px-3 my-3'>
                Update Password
              </Button>
            </Col>
          </Row>
        </form>
      </div>
    </div>
  )
}

export default BrandPassword