import React, { useState } from 'react'
import './cardstyle.css';
import image from '../Images/information.png';
import ModelBox from "../Components/ModelBox"
import _, { isEmpty } from "lodash"

export const CardHorizontal = ({ details }) => {
    const [modelValue, modelSetValue] = useState(false);
    const [viewData, setviewdata] = useState({});
    const HandlerView = (data) => {
        console.log("result", data)
        if (!isEmpty(data)) {
            modelSetValue(true)
            setviewdata(data)
        }
    }
    return (
        <>
            <div className='row'>
                {details?.map(item =>
                    <div className='col-md-4'>
                        <div class="card border border-danger newcard">
                            <img src={image} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <div class="text-section">
                                    <h5 class="">{item.name}</h5>
                                    <p class="card-text">{item.occasion}/{item.venueCity}</p>
                                </div>
                                <div class="cta-section">
                                    <button onClick={() => HandlerView(item)} class="btn-global px-2" style={{ fontSize: 12 }}>View more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

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
                            <td>{viewData.occasion}</td>
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
                            <td>{viewData.people}</td>
                        </tr>
                        <tr>
                            <th>name</th>
                            <td>{viewData.name}</td>
                        </tr>
                        <tr>
                            <th>Mobile Number</th>
                            <td>{viewData.mobile}</td>
                        </tr>
                        <tr>
                            <th>Details</th>
                            <td>{viewData.message}</td>
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
                </div>
            </ModelBox>
        </>
    );
}