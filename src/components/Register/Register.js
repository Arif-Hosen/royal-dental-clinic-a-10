import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Register = () => {


    const { signInUsingGoogle, handleEmailChange, handlePasswordChange, handleRegistration, error } = useAuth();


    return (
        <div className="login d-flex justify-content-center">
            <div>
                <h2>Create Account</h2>
                <Form onSubmit={handleRegistration}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your Name" raquired />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email address</Form.Label>
                        <Form.Control onBlur={handleEmailChange} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePasswordChange} type="password" placeholder="Password" required />
                    </Form.Group>

                    <p>{error}</p>

                    <Button variant="primary" type="submit">
                        Register
                    </Button>
                </Form>

                <small>New to Royal Dental Clinic?</small>
                <Link to="/login">Log In</Link>
                <div>----------or----------</div>
                <Button onClick={signInUsingGoogle} variant="warning">Google Sign In</Button>
            </div>

        </div>
    );
};

export default Register;