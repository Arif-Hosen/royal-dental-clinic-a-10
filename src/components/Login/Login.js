import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Login.css'

import useAuth from '../../hooks/useAuth';



const Login = () => {
    const { signInUsingGoogle, handleLogin, handleEmailChange, handlePasswordChange } = useAuth();
    const location = useLocation();


    return (
        <div className="log d-flex justify-content-center">
            <div className="login">
                <h2 className="text-primary">Log In</h2>
                <Form onSubmit={handleLogin
                }>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button className="mb-5" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

                <small className="me-4 ">New to Royal Dental Clinic?</small>
                <Link to="/register">Register Now</Link>
                <div className="mt-3 mb-3">---------------------or---------------------</div>
                <Button onClick={signInUsingGoogle} variant="warning">Google Sign In</Button>
            </div>

        </div>
    );
};

export default Login;