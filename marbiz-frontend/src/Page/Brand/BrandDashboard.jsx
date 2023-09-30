import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';


const BrandDashboard = () => {
    return (
        <div>
            {/* dashboard navigation */}
            <Container>
                <div className='m-3 p-2 dashboard-nav rounded-3'>
                    <Nav variant="underline">
                        <Nav.Item>
                            <Link to="/brand-dashboard/brandHome" className="nav-link">Home</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/brand-dashboard/brandBooking" className="nav-link">Booking</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/brand-dashboard/brandWishlist" className="nav-link">WishLists</Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </Container>

            {/* Render nested routes */}
            <Container fluid={true} className='py-3 mb-5' style={{ height: "60vh", }}>
                <Outlet />
            </Container>

        </div>
    );
}

export default BrandDashboard;
