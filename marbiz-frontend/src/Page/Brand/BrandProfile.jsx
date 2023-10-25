import React,{useState,useEffect} from 'react'
import { Card,CardTitle,Row,Button, CardHeader, CardBody,Col, FormGroup,Label,Input} from 'reactstrap';
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
    console.log(formData)
    const data=[];
    data.push({
      
    })
    UpdateMtUser(formData).then(result=>{
      if(!isEmpty(result))
      {
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
    <Card
    body
    className="my-2"
    style={{
      width: '18rem',backgroundColor:'#000',
    }}
  >
    <CardHeader>
    <CardTitle tag="h4">
     My Profile
    </CardTitle>
    </CardHeader>
    <CardBody>
    <form>
        <Row>

      <Col md={4}>
      <FormGroup>
         <Label for="exampleName" style={{color:'white'}}>
         Contact Name:
        </Label>
        <Input
         type="text"
         id="contactName"
         name="contactName"
         value={formData.contactName}
         onChange={handleChange}
        />
        </FormGroup>
</Col><Col md={4}>
<FormGroup>
         <Label for="exampleCity" style={{color:'white'}}>
         City:
        </Label>
        <Input
           type="text"
           id="city"
           name="city"
           value={formData.city}
           onChange={handleChange}
        />
        </FormGroup>
        
</Col><Col md={4}>
       
        <FormGroup>
         <Label for="State" style={{color:'white'}}>
         State:
        </Label>
        <Input
            type="text"
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
        />
        </FormGroup>
</Col><Col md={4}>
<FormGroup>
         <Label for="Country" style={{color:'white'}}>
         Country:
        </Label>
        <Input
           type="text"
           id="country"
           name="country"
           value={formData.country}
           onChange={handleChange}
        />
        </FormGroup>
       
        </Col><Col md={12}>
        <Button onClick={handleSubmit} className='btn-global px-3 my-3'>
    Update Profile
    </Button> </Col>
    </Row>
      </form>
    </CardBody>
    
  </Card>
  )
}

export default BrandProfile