import React, { useState, useEffect } from 'react'
import { Button } from 'reactstrap'
import Swal from 'sweetalert2'
import TableData from "../../Components/table-data"
import ModelBox from "../../Components/ModelBox"
import {
    getUserBooking, deleteEnquiry
} from "../../services/api/api-service"
import _, { isEmpty, result } from "lodash"
const BrandBooking = () => {
    const [data, setData] = useState({})
    const [modelValue, modelSetValue] = useState(false);
    const [viewData, setviewdata] = useState({});
    const [useId, setuserId] = useState(null);
    const viewEnquiryHandler = data => {
        console.log(data)
        if (!isEmpty(data)) {
            modelSetValue(true)
            setviewdata(data)
        }
    }
    function getdata(id) {
        getUserBooking(id)
        .then((result) => {
          if (!isEmpty(result)) {
            console.log("result list", result);
            const dataList = result.map(list=> ({
              name: list.name,
              status: list.status==="P"?"Pending":"View",
              action: (
                <>
                  <Button
                    className="btn btn-danger m-1"
                    onClick={() => deleteEnquiryhandler(list.id)}
                  >
                    <i className='fa fa-trash'></i>
                  </Button>
                  <Button
                    className="btn btn-info m-1"
                    onClick={() => viewEnquiryHandler(list)}
                  >
                     <i className='fa fa-eye'></i>
                  </Button>
                </>
              ),
            }));
            const columns = [
              {
                label: "Full Name",
                field: "name"
              },
              {
                label: "Status",
                field: "status"
              },
              {
                label: "Action",
                field: "action"
              }
            ];
            setData({
              columns,
              rows: dataList,
            });
          }
        })
        .catch((error) => {
          // Handle any errors that occurred during the request
          console.error("Error fetching user bookings:", error);
        });
    }
    const deleteEnquiryhandler = id => {
        deleteEnquiry(id).then(result => {
            Swal.fire(
                "Delete successfully",
                "Enquiry details successfully",
                "success"
            )
            getdata()
        })
    }
    useEffect(() => {
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser"));
            setuserId(obj.username);
            getdata(obj.username);
            console.log(obj.username);
        }
    }, [])
    return (
        <div>
            {!isEmpty(data) &&
                <TableData tabledata={data} />
            }
            {isEmpty(data) &&
                <h1 style={{ textAlign: 'center', padding: 10, border: 1, borderStyle: 'dotted', borderColor: '#ddd' }}>Not Record Found</h1>
            }
            <ModelBox
                modelValue={modelValue}
                sizeValue={"lg"}
                modelSetValue={modelSetValue}
                titleLabel="Enquiry view"
            >
                <div className="table-responsive">
                    <table className="table table-hover mb-0">
                        <tr>
                            <th>Occasion</th>
                            <td>{viewData.regName}</td>
                        </tr>
                        <tr>
                            <th>EventDate</th>
                            <td>{viewData.eventDate}</td>
                        </tr>
                        <tr>
                            <th>Venue City</th>
                            <td>{viewData.venueCity}</td>
                        </tr>
                        <tr>
                            <th>Budget</th>
                            <td>{viewData.budget}</td>
                        </tr>
                        <tr>
                            <th>People Attend</th>
                            <td>{viewData.peopleAttend}</td>
                        </tr>
                        <tr>
                            <th>name</th>
                            <td>{viewData.name}</td>
                        </tr>
                        <tr>
                            <th>Mobile Number</th>
                            <td>{viewData.mobileNumber}</td>
                        </tr>
                        <tr>
                            <th>Details</th>
                            <td>{viewData.details}</td>
                        </tr>
                        <tr>
                            <th>More Options Budget</th>
                            <td>{viewData.moreOptionsBudget}</td>
                        </tr>
                        <tr>
                            <th>Send WhatsApp</th>
                            <td>{viewData.sendWhatsApp}</td>
                        </tr>
                    </table>
                    <hr />
                    <Button
                        onClick={() => deleteEnquiryhandler(viewData.id)}
                        className="btn btn-danger mt-3"
                    >
                        Delete
                    </Button>
                </div>
            </ModelBox>
        </div>
    )
}

export default BrandBooking;