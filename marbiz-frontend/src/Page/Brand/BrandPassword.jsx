
import React, { useState, useEffect } from 'react'
import { Card, CardTitle, Row, Button, CardHeader, CardBody, Col, FormGroup, Label, Input } from 'reactstrap';
import { UpdateMtUser ,loginOut} from '../../services/api/api-service';
import { isEmpty } from 'lodash';
import Swal from "sweetalert2";
const BrandPassword = ({pagetitle}) => {
  const [errorPassword, seterrorPassword] = useState(null)
  const [formData, setFormData] = useState({});
  const [formDatanew, setFormDataNew] = useState({cpassword:"",password:""});
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
    if(formDatanew.password ===formDatanew.cpassword){
      const updatedFormData = { ...formData, password: formDatanew.password };
      console.log("datapassword",updatedFormData)
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
              Swal.fire("Successfully","Password Update successfully", "success");
            }
          })
          .catch((error) => {
            Swal.fire("Successfully", error.message, "success");
          });
          
        }
      });
     
    }else{
      Swal.fire("Warning", "Your Password Not Match", "sarning");
    }
    
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
        <h1 className="text-center">{pagetitle}</h1>
      </div>
      <hr className="hr hr-blurry border border-danger border-2" />
    </div>
    <form>
      <Row>
        <Col md={4}>
          <FormGroup>
            <Label for="exampleName" style={{ color: 'white' }}>
              Password:
            </Label>
            <Input
              type="text"
              id="password"
              name="password"
              placeholder='New Password'
              value={formDatanew.password}
              onChange={handleChange}
            />
          </FormGroup>
        </Col><Col md={4}>
          <FormGroup>
            <Label for="cpassword" style={{ color: 'white' }}>
              Confirm Password:
            </Label>
            <Input
              type="text"
              id="cpassword"
              name="cpassword"
              placeholder='Confirm Password'
              value={formDatanew.cpassword}
              onChange={handleChange}
            />
          </FormGroup>
          <label style={{ color: 'red' }}>{errorPassword}</label>
        </Col><Col md={12}>
          <Button onClick={handleSubmit} className='btn-global px-3 my-3'>
            Update Password
          </Button> </Col>
      </Row>
    </form>
  </div>
  )
}

export default BrandPassword