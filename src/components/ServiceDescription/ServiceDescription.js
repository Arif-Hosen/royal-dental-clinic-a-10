import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDescription = () => {
    let { id } = useParams();
    const [details, setDetails] = useState([]);
    const [singleDetails, setSingleDetails] = useState({});




    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setDetails(data))

    }, [])
    console.log(details);


    useEffect(() => {
        const singleService = details.find(service => service.id == id)
        setSingleDetails(singleService);

    }, [details])

    return (
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