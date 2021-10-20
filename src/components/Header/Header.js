import React from 'react';
import { Form, Button, Carousel } from 'react-bootstrap';
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

        <div className="header  d-flex align-items-center justify-content-between ">

            <div className='logo'>
                <img className='w-100' src="https://image.freepik.com/free-vector/health-dent-logo-linear-style-icon_126523-338.jpg" alt="" />
            </div>
            <h3>Royal Dental Clinic</h3>
            <div><NavLink to="/home" activeStyle={navStyle}>Home</NavLink>
                <NavLink to="/about" activeStyle={navStyle}>About</NavLink>
                <NavLink to="/appointment" activeStyle={navStyle}>Appointment</NavLink>
                <NavLink to="/register" activeStyle={navStyle}>Register</NavLink>

                {user.email ?
                    <span className='ms-4'>
                        <small >{user.displayName}</small>
                        <button style={{ color: 'blue', border: ' 1px solid blue', borderRadius: ' 5px', marginLeft: '5px' }} onClick={logOut}>Logout</button>
                    </span>
                    : <NavLink to="/login" activeStyle={navStyle}>Log in</NavLink>

                }
            </div>



            <div className="search">
                <Form.Control type="email" placeholder="search" />
                <Button variant="primary">Search</Button>
            </div>


        </div >

    );
};

export default Header;