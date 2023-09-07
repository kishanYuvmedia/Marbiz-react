import React from "react";
import Container from "react-bootstrap/Container";
import logo from "../Images/marbiz-logo.png";
import { Button, Nav, Navbar  } from "react-bootstrap";


function NavBar() {
	return (
		<Navbar
		collapseOnSelect
		expand="lg"
		className="bg-body-tertiary"
		bg="dark"
		data-bs-theme="dark"
		>
			<Container>
				<Navbar.Brand href="#home">
				<img src={logo} alt="" />
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
				
				{/* center menu  items*/}
					<Nav className="m-auto">
						<Nav.Link href="#features">Explore</Nav.Link>
						<Nav.Link href="#pricing">How it Works</Nav.Link>
						<Nav.Link href="#pricing">Category</Nav.Link>

					</Nav>

					{/* last menu items */}
					<Nav>
						<Nav.Link href="#deets">Join As Brand</Nav.Link>
						<Nav.Link eventKey={2} href="#memes">
						Join as creator
						</Nav.Link>
						<Button>Login</Button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default NavBar;
