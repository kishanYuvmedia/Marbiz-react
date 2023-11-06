import { isEmpty, result } from 'lodash';
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import { createPackage, getPublicList, getPackageById  } from '../../services/api/api-service';

const EditPackage = ({ pagetitle, packageId  }) => {

    const [platformlist, setPlatform] = useState([]);
    const [contentTypelist, setContentType] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        platform: '',
        contentType: '',
        contentQuantity: 1,
        Description: '',
        mtUserId: '',
        profileId: '',
        price: '',



    });

    console.log("Initial qty inside form data :", formData);

    const handleContentQuantityChange = (event) => {
        const value = parseInt(event.target.value, 10); // Parse the value as an integer
        console.log("Initial qty inside handleContentQuantityChange:", formData.contentQuantity)
        setFormData({
            ...formData,
            contentQuantity: value, // Ensure it's defined as a number
        });

    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can access the form data in the `formData` state and submit it as needed.
        // console.log(formData);
        createPackage(formData).then(result => {
            if (!isEmpty(result)) {
                Swal.fire(
                    "Congratulations",
                    "Your Package successfully updated !",
                    "success"
                );
                window.location.reload(true);
            }
            else {
                Swal.fire(
                    "Oops !",
                    "Package not uploaded successfully !",
                    "success"
                );
            }
        })
    };

    useEffect(() => {
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser"));
            setFormData({ mtUserId: obj.id, profileId: obj.registerName });
        }
        getPublicList("Platform").then((result) => {
            setPlatform(result);
        });
        getPublicList("Content Type").then((result) => {
            setContentType(result);
        });
    }, [])

    useEffect(() => {
        if (packageId) {
            getPackageById(packageId)
                .then((packageData) => {
                    // Populate the form fields with the retrieved data
                    setFormData({
                        title: packageData.title,
                        platform: packageData.platform,
                        contentType: packageData.contentType,
                        contentQuantity: packageData.contentQuantity,
                        Description: packageData.Description,
                        mtUserId: packageData.mtUserId,
                        profileId: packageData.profileId,
                        price: packageData.price,
                    });
                })
                .catch((error) => {
                    console.error("Error fetching package data:", error);
                    // Handle the error
                });
        }
    }, [packageId]);

    return (
        <>
            <div>
                <h2>{pagetitle}</h2>
                <hr className="hr hr-blurry border border-danger border-2" />
                <form noValidate onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="packageName" className="form-label text-white">
                            Give a Name to Your Package
                        </label>
                        <input
                            type="text"
                            className="form-control dark-bg"
                            name="title"
                            required
                            data-mdb-showcounter="true"
                            maxLength="20"
                            placeholder="Package name..."
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="selectPlatform" className="form-label text-white">
                            Select Platform
                        </label>
                        <select
                            className="form-select dark-bg"
                            name="platform"
                            aria-label="Select Platform"
                            required
                            value={formData.platform}
                            onChange={handleInputChange}
                        >
                            <option value="">Select an option</option>
                            {platformlist.map(item =>
                                <option key={item.value} value={item.value}>{item.label}</option>
                            )}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contentType" className="form-label text-white">
                            Content Type
                        </label>
                        <select
                            className="form-select dark-bg"
                            name="contentType"
                            aria-label="Content Type"
                            required
                            value={formData.contentType}
                            onChange={handleInputChange}
                        >
                            <option value="">Select an option</option>
                            {contentTypelist.map(item =>
                                <option key={item.value} value={item.value}>{item.label}</option>
                            )}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contentQuantity" className="form-label text-white">
                            Content Quantity
                        </label>
                        <div className="range dark-bg">
                            <div className="d-flex text-secondary">
                                <span>1</span>
                                <input
                                    type="range"
                                    className="form-range px-2"
                                    min="1"
                                    max="10"
                                    step="1"
                                    id="contentQuantity"
                                    name="contentQuantity"
                                    value={formData.contentQuantity}
                                    defaultValue={formData.contentQuantity}
                                    onChange={handleContentQuantityChange}
                                />
                                <span>10</span>
                            </div>
                            <span className="text-secondary me-2">No. of content:</span>
                            <span className="range-value btn-global px-2">
                                {formData.contentQuantity}
                            </span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label text-white">
                            Price*
                        </label>
                        <input
                            type="text"
                            className="form-control dark-bg"
                            name="price"
                            required
                            maxLength="20"
                            placeholder="Price"
                            value={formData.price}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="Description" className="form-label text-white">
                            Package Description
                        </label>
                        <textarea
                            className="form-control dark-bg"
                            placeholder="Leave a comment here"
                            id="Description"
                            name="Description"
                            required
                            value={formData.Description}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-global px-3">
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
};

export default EditPackage;
