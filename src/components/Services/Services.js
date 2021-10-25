import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    // state declare and fake data load
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='service'>
            <div className='row row-cols-3 m-5 '>
                {/* loop through on services */}

                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}></Service>)
                }

            </div>

        </div>
    );
};

export default Services;