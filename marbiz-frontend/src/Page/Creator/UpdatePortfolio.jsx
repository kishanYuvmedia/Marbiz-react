import { isEmpty, result } from 'lodash';
import React, { useEffect, useState } from 'react';
import Swal from "sweetalert2";
import Imagyoutube from '../../Images/link-image.png';
import { Modal, Button } from "react-bootstrap";
import { getPublicList, UploadImages, getInfluencersProfilebyId } from '../../services/api/api-service';

const UpdatePortfolio = ({ pagetitle }) => {
    const [show, setShow] = useState(false);
    const handleShow = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const [contentTypelist, setContentType] = useState([]);
    const [imagestatus, setImagestatus] = useState(false);
    const [formData, setFormData] = useState({
        src: '',
        original: '',
        caption: '',
        profileId: '',
        status: '',
        mtUserId: '',
        sourceUrl: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    function extractVideoId(url) {
        // Regular expressions to match YouTube URL patterns
        const youtubeShortPattern = /youtu\.be\/([\w-]+)/;
        const youtubeLongPattern = /youtube\.com\/.*[?&]v=([^&]+)/;

        // Try to match the URL with the patterns
        const shortMatch = url.match(youtubeShortPattern);
        const longMatch = url.match(youtubeLongPattern);

        // Extract the video ID from the matched pattern
        if (shortMatch) {
            return shortMatch[1];
        } else if (longMatch) {
            return longMatch[1];
        }

        // If no match is found, return null
        return null;
    }

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            Swal.fire({
                title: "Do you upload this file !",
                width: 600,
                padding: "3em",
                customClass: {
                    title: 'my-swal-title',
                },
                // imageUrl: e.target.result,
                imageUrl: URL.createObjectURL(file),

                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes",
                cancelButtonText: "Cancel",
            }).then((result) => {
                if (result.isConfirmed) {
                    uploadfile(file).then((data) => {
                        console.log(data);
                        if (data.status) {
                            setImagestatus(true)
                            setFormData({
                                ...formData,
                                src: data.imageurl,
                                original: data.imageurl,
                            });
                        }
                        else {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "Something went wrong please Retry uploading Image",
                            })
                        }
                    });
                }
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Check if sourceUrl is not empty before extracting videoId
        if (formData.caption !== null) {
            let videoId1 = "";
            if (formData.caption !== "Image") {
                if (formData.sourceUrl) {
                    videoId1 = extractVideoId(formData.sourceUrl);
                }
                else {
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "Source Url is empty. Please provide a valid URL.",
                    });
                }
                return;
            }
            else {
                videoId1 = formData.sourceUrl;
            }
            const data = [];
            data.push({
                ...formData,
                sourceUrl: videoId1,
            })
            // console.log(data);
            UploadImages(data).then(result => {
                if (!isEmpty(result)) {
                    Swal.fire({
                        icon: "success",
                        title: "Upload Successfully",
                        text: "Image upload successfully uploaded !",
                    })
                    window.location.reload(true)
                }
            })
        } else {
            // Handle the case where sourceUrl is empty
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Content Type is empty. Please provide a valid URL.",
            });
        }
    };

    const uploadfile = async (file) => {

        if (file) {
            const formDataImage = new FormData()
            formDataImage.append("image", file, "compressed-image.jpg")
            try {
                const response = await fetch("https://marbizimages.yuvmedia.in/upload.php", {
                    method: "POST",
                    body: formDataImage,
                })
                const data = await response.json()
                if (data) {
                    return { imageurl: data.imageUrl, status: true }
                } else {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Something went wrong please Retry uploading Image",
                    })
                    return { imageurl: "not", status: false }
                }
            } catch (error) {
                // Handle any errors
                console.error(error)
                return false
            }
        }
        return false // Return false if there's no file to upload
    }

    useEffect(() => {
        if (localStorage.getItem("authUser")) {
            const obj = JSON.parse(localStorage.getItem("authUser"));
            getInfluencersProfilebyId(obj.id)
                .then((result) => {
                    console.log("loginUser", { mtUserId: obj.id, profileId: result.id })
                    setFormData({ mtUserId: obj.id, profileId: result.id });
                })
                .catch((err) => {
                    console.error("Error fetching profile data:", err);
                });
        }
        getPublicList("Content Type").then((result) => {
            setContentType(result);
        });
    }, [])

    return (
        <>
            <div>
                <h2>{pagetitle}</h2>
                <form noValidate onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="packageName" className="form-label text-white">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control dark-bg"
                            name="title"
                            required
                            data-mdb-showcounter="true"
                            maxLength="20"
                            placeholder="Title"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="caption" className="form-label text-white">
                            Content Type
                        </label>
                        <select
                            className="form-select dark-bg"
                            name="caption"
                            aria-label="Content Type"
                            required
                            value={formData.caption}
                            onChange={handleInputChange}
                        >
                            <option value="">Select an option</option>
                            {contentTypelist.map(item =>
                                <option value={item.value}>{item.label}</option>
                            )}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="filepath" className="form-label text-white">
                            Upload {formData.contentType} Image
                        </label>
                        <input
                            type="file"
                            className="form-control dark-bg"
                            name="filepath"
                            accept="image/*"
                            onChange={handleFileUpload}
                        />
                        {/* <label htmlFor="filepath" className="form-label text-white">
                            {imagestatus ? <strong style={{ color: 'red' }}>Upload File:{formData.src}</strong> : ""}
                        </label> */}
                        {imagestatus && (
                            <div className='gallery-container d-grid my-3' style={{
                                width: "fit-content",
                            }}>
                                {/* <strong style={{ color: 'red' }}>Upload File: {formData.src}</strong> */}
                                <small className='text-secondary text-center'>Preview</small>
                                <img src={formData.src} alt="Uploaded Image" className='rounded-3 img-fluid' style={{
                                    height: "250px",
                                    wieght: "250px",
                                }} />
                            </div>
                        )}
                    </div>
                    <div className="mb-3">
                        
                        <label htmlFor="sourceUrl" className="form-label text-white">
                            {formData.caption !== "Image" ? (
                                <span>
                                    Source URL:
                                    <strong className='ms-2'>
                                        User Youtube Video link
                                        <span style={{ cursor: "pointer" }} className='text-danger ms-2' onClick={() => handleShow()}>
                                            Check Demo
                                        </span>
                                    </strong>
                                </span>
                            ) : 'Image Source For reference'}
                        </label>

                        <input
                            type="text"
                            className="form-control dark-bg"
                            name="sourceUrl"
                            placeholder={formData.caption !== "Image" ? 'https://www.youtube.com/watch?v=VIDEO-ID' : 'Image Source'}
                            value={formData.sourceUrl}
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit" className="btn-global px-3">
                        Submit
                    </button>
                </form>
            </div>
            <Modal show={show} onHide={handleClose} centered closeButton size="lg" className="youtube-mobal-box" id="youtube-mobal-box">
                {/* <Modal.Header  /> */}
                <Modal.Body  >
                    <Button variant="danger" className="btn-close px-2" onClick={handleClose}></Button>
                    <div className="ratio ratio-16x9">
                        <img src={Imagyoutube} alt="youtube-url-ref" />
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default UpdatePortfolio;
