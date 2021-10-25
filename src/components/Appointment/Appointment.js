import React from 'react';
import { Form, Button } from 'react-bootstrap';
import './Appointment.css'

const Appointment = () => {
    return (
        <div className='appointment'>
            <h5 style={{ backgroundColor: 'lightgray', color: 'red', textAlign: 'center', padding: '20px' }}>Please fillup appointment fields to get appoinment..</h5>
            <div className='w-50 mx-auto mt-5 pb-5'>

                {/* react-bootstrap form */}

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your email</Form.Label>
                        <Form.Control type="email" placeholder="Your email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Your name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="text" placeholder="your age" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Doctors</Form.Label>
                        <Form.Control type="text" placeholder="Doctors Name" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Appointment;