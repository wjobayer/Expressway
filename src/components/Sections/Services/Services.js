import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {

    const [service , setService]=useState([]);
    useEffect(()=>{
        fetch('https://mighty-basin-76183.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    console.log(service);
    return (
        <div>
           <Container className="my-5">
           <h1 className=" display-5">Our Services</h1>
            <p className=" mb-5">
            A courier service is a premium, all-inclusive service which collects and delivers shipments in the shortest possible time frame.

            </p>

            <div className="service-collection">{
            service.map(service =><Service
            
                key={service.key}
                service={service}

            >   
            </Service>
            )
        }
        </div>
           </Container>
        </div>
    );
};
export default Services;