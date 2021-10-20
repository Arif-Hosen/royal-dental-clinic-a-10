import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services';
import './Home.css'

const Home = () => {
    return (
        <div className="home">

            <Carousel fade className="carosel-container ">
                <Carousel.Item>
                    <img
                        className="d-block w-100 img"
                        src="https://image.freepik.com/free-photo/dentist-examining-female-patient-with-tools_107420-74189.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-dark fw-bold'>
                        <h3 >Upper and Lower Denture</h3>
                        <p>If you are in need of replacing an entire arch of teeth, a full arch denture is going to be the most affordable tooth-replacement option.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img"
                        src="https://image.freepik.com/free-photo/male-dentist-medical-mask-explaining-artificial-teeth-smiling-patient-clinic_158595-7725.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption className='text-dark fw-bold'>
                        <h3>Removable Partial Denture</h3>
                        <p>Removable partial dentures usually consist of replacement teeth attached to pink or gum-colored plastic bases.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 img"
                        src="https://image.freepik.com/free-photo/happy-girl-her-dad-during-dental-appointment_329181-17718.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption className='text-dark fw-bold'>
                        <h3>Dental Consultation</h3>
                        <p>The dental consultation is where your dentist will discuss your oral and overall health.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Services></Services>

        </div>
    );
};

export default Home;