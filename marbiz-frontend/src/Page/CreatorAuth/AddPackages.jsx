import React, { useState } from 'react';

const AddPackages = () => {
    const [validated, setValidated] = useState(false);
    const [contentQuantity, setContentQuantity] = useState(1); // Initialize contentQuantity with a default value

    const handleContentQuantityChange = (event) => {
        setContentQuantity(event.target.value);
    };

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            <div>
                <h2>Add Package</h2>

                <form className="" noValidate validated={validated} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="packageName" className="form-label text-white">
                            Give a Name to Your Package
                        </label>
                        <input
                            type="text"
                            className="form-control dark-bg w-50"
                            name="packageName"
                            required
                            data-mdb-showcounter="true"
                            maxLength="20"
                            placeholder='Package name...'
                        />
                        <div className="form-helper"></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="selectPlatform" className="form-label text-white">
                            Select Platform
                        </label>
                        <select
                            className="form-select dark-bg w-50"
                            name="selectPlatform"
                            aria-label="Select Platform"
                            required
                        >
                            <option value="">Select an option</option>
                            <option value="1">Instagram</option>
                            <option value="2">Youtube</option>
                            <option value="3">User Generated Content (UGC)</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contentType" className="form-label text-white">
                            Content Type
                        </label>
                        <select
                            className="form-select dark-bg w-50"
                            name="contentType"
                            aria-label="Content Type"
                            required
                        >
                            <option value="">Select an option</option>
                            <option value="1">Reel</option>
                            <option value="2">Stories</option>
                            <option value="3">Videos</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="customRange3" className="form-label text-white">
                            Content Quantity
                        </label>
                        <div className="range w-50 dark-bg">
                            <div className="d-flex text-secondary">

                                <span>1</span>
                                <input
                                    type="range"
                                    className="form-range px-2 "
                                    min="1"
                                    max="10"
                                    step="1"
                                    id="customRange3"
                                    name="contentQuantity"
                                    value={contentQuantity}
                                    onChange={handleContentQuantityChange}
                                />
                                <span>10</span>
                            </div>

                            <span className='text-secondary me-2'>
                                No. of content:
                            </span>
                            <span className="range-value btn-global px-2">{contentQuantity}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="shortDescription" className="form-label text-white">
                            Package Description
                        </label>
                        <textarea
                            className="form-control dark-bg w-50"
                            placeholder="Leave a comment here"
                            id="shortDescription"
                            name="shortDescription"
                            required
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

export default AddPackages;
