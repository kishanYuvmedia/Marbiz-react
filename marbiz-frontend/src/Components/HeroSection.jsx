import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

const HeroSection = () => {
	return (
		<>
			<div
				className="m-3 d-grid justify-content-center align-items-center rounded-3"
				style={{
					backgroundColor: "black",
					height: "600px",
				}}
			>
				<div>
					<h1 className="text-white">Influencer Marketing Made Easy</h1>
					<h6 className="text-white mb-5">
						Find and hire top Instagram, TikTok, YouTube, and UGC influencer to
						create unique content for your brand
					</h6>

					<InputGroup className="mb-3">
						<Form.Control
							placeholder="Search"
							aria-label="Search"
							aria-describedby="basic-addon2"
						/>
						<Button variant="outline-secondary" id="button-addon2">
							Search
						</Button>
					</InputGroup>

					{/* categories */}
					<div className="d-flex justify-content-center align-items-center">
						<button className="btn text-white btn-sm category-btn" type="button">Category</button>
					</div>
				</div>
			</div>

			<div className="my-3 d-grid justify-content-center align-items-center py-3 text-white gradient_background" style={{}}>
				<div
					className="fw-bold"
					style={{
						fontSize: "30px",
					}}
				>
					Connecting Brands and Influencer Effortlessly.
				</div>
			</div>

		</>
	);
};

export default HeroSection;
