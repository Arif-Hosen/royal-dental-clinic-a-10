import React from 'react';
import { Form, Button, Carousel, Navbar, Container, Nav, NavDropdown, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'


const Header = () => {
    const { user, logOut } = useAuth();
    const navStyle = {
        fontWeight: "bold",
        color: "cornflowerblue"
    };
    return (

        // header
        <div className='header mt-0'>






            < Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <i className="fas fa-tooth"></i>
                    <Navbar.Brand className='name' as={NavLink} to="/home">Royal Dental Clinic</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto nav">
                            <Nav.Link as={NavLink} to="/home">Home  </Nav.Link>

                            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                            <Nav.Link as={NavLink} to="/appointment">Appointment</Nav.Link>
                            <Nav.Link as={NavLink} to="/register">Register</Nav.Link>

                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={NavLink} to="/home">Home</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/about">About</NavDropdown.Item>
                                <NavDropdown.Item as={NavLink} to="/appointment">Appointment</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={NavLink} to="/register">Register</NavDropdown.Item>
                            </NavDropdown>

                            {user.email ?
                                <span className='ms-4'>
                                    <small >{user.displayName}</small>
                                    <button style={{ color: 'blue', border: ' 1px solid blue', borderRadius: ' 5px', marginLeft: '5px' }} onClick={logOut}>Logout</button>
                                </span>
                                : <Nav.Link style={{ color: 'white' }} as={NavLink} to="/login" >Log in</Nav.Link>

                            }
                        </Nav>

                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success text-light">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </div >

    );
};

export default Header;