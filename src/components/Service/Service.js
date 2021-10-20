import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const { id, name, img, description } = props.service;
    console.log(name);



    return (
        <div className="">
            {/* <div>
                <img src={img} alt="" />
            </div>
            <h3>{name}</h3>
            <small><p>{description}</p></small> */}

            <Card className="card-container mt-3 ">
                <Card.Img className="card-img img-fluid" variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{description}</Card.Text>
                </Card.Body>
                <Link className='bg-primary text-center' to={`/services/${id}`}>Details</Link>

            </Card>
        </div>


    );
};

export default Service;