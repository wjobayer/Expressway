import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const{_id,name,price,description,img}=service;
    console.log(img);
    return (
        <div className="service">
             <img className="w-100 image" src={img} alt="" />
            <div className="details">
            <h2>{name}</h2>
            <p>{description.slice(0,98)}</p>
            <h5>$ {price}</h5>
            <Link to={`/details/${_id}`}>
            <Button className="btn btn-light text-primary">Book Now</Button>
            </Link>
            </div>
           
        </div>
    );
};

export default Service;