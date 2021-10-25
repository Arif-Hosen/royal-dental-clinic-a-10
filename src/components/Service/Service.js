import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    // destructure from props
    const { id, name, img, description } = props.service;

    return (

        // react-bootstrap responsive card
        <Col lg={4} sm={12}>
            <Card className="card-container mt-5 ">
                <Card.Img className="card-img img-fluid" variant="top" src={img} />
                <Card.Body>
                    <Card.Title className='title'>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Link className='bg-primary text-center' to={`/services/${id}`}>Details</Link>

            </Card>
        </Col>


    );
};

export default Service;