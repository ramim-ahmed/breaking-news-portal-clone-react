import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Navbars = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">BBC</Navbar.Brand>
            <Nav className="ml-auto">
            <Nav.Link href="#home">News</Nav.Link>
            <Nav.Link href="#features">Sports</Nav.Link>
            <Nav.Link href="#pricing">More</Nav.Link>
            </Nav>

            </Navbar>
        </div>
    );
};

export default Navbars;