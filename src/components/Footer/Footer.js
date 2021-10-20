import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div style={{
            backgroundColor: 'darkslategray',
            color: 'white'
        }}>
            <div className='footer '>

                <div className='w-25 '>
                    <h4 className='mb-4'>Royal Dental Clinic</h4>
                    <p>We provide all kind of dental problem.Our practice has been designed with your convenience and comfort in mind; everything we do is completely patient centric</p>
                </div>
                <div className='w-25'>
                    <h5 className='mb-4'>Services</h5>
                    <p><a href="#">Dental Consultation</a></p>
                    <p><a href="#">Tooth Extraction</a></p>
                    <p><a href="#">Root Canal</a></p>
                    <p><a href="#">Removable Partial Denture</a></p>
                    <p><a href="#">Upper and Lower Denture</a></p>
                </div>
                <div className='w-25'>
                    <h5 className='mb-4'>Contact with us</h5>

                    <p>Dhanmondi-A, Dhaka ,Bangladesh</p>
                    <p> Email: royaldentalclinic@gmail.com</p>
                    <p>Helpline : 0199999788(Available : 24 hours/ 7 days)</p>

                </div>

            </div>
            <p className='text-center p-3'>Copyright © 2021 royal-dental-clinic.com</p>
        </div>

    );
};

export default Footer;