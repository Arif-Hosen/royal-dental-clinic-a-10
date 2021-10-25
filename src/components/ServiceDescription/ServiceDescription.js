import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDescription = () => {
    // get id from route
    let { id } = useParams();
    const [details, setDetails] = useState([]);
    const [singleDetails, setSingleDetails] = useState({});


    // data load
    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setDetails(data))

    }, [])
    console.log(details);

    // idivitual data check and set a state after details state change
    useEffect(() => {
        const singleService = details.find(service => service.id == id)
        setSingleDetails(singleService);

    }, [details])

    return (
        // specific service page
        <div className=' mt-5'>
            <h2 className='text-center text-primary'>Description</h2>
            <div className='d-flex mt-5'>

                <div className='p-5'>
                    <img src={singleDetails?.img} alt="" />
                </div>
                <div className='p-5 my-auto'>
                    <h3 className=' text-primary'>{singleDetails?.name}</h3>
                    <p>{singleDetails?.description}</p>
                </div>
            </div>

        </div>
    );
};

export default ServiceDescription;