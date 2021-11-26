import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Details.css'
import useAuth from '../../Firebase/useAuth';
const Details = () => {
    
    const {id}=useParams()
    const [details,setDetails]= useState([])
    const [specificDetail,setSpecificDetail] = useState({})
   const {user}=useAuth();
   
 useEffect(() =>
      fetch("https://mighty-basin-76183.herokuapp.com/services")
      .then(res => res.json())
      .then(data=>setDetails(data))
    ,[])


useEffect(() =>{
    if(details.length>0){
        const matchedData= details.find(detail=> detail._id==id)
        setSpecificDetail(matchedData);
    }

}

,[details]);


const { register, handleSubmit, reset } = useForm();

const onSubmit = (data) => {
    data.email = user.email;
    data.username  = user.displayName;
    data.imageURL =user.photoURL;
    data.status = "pending";
    data.image = specificDetail?.img;
    data.description =specificDetail.description;


    fetch("https://mighty-basin-76183.herokuapp.com/confirmorder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
            alert('Order successfully');
            // reset();
        }
    });
    // console.log(data);
  };


    return (
       
        
        

    <div>
          <Container>
              <h1 className="mt-5">Delivery Your Product</h1>
          <div className="row mt-5 mb-5">
          <div className="servicedetails col-lg-4  rounded-3 bg-light shadow">
          <img className="w-100 mt-5" src={specificDetail?.img} alt="" />
           <h2 className="mt-5">{specificDetail?.name}</h2>
           <p className="fs-6 fw-lighter">{specificDetail?.description}</p>
           <h5 className="text-primary">$ {specificDetail?.price}</h5>
          </div>
          <div className="order-form col-lg-8  mt-5">
          <form onSubmit={handleSubmit(onSubmit)}>
                <input className="btn btn-outline-primary" defaultValue={specificDetail?.name}{...register("name", { required: true, maxLength: 30 })}  />
                <input className="btn btn-outline-primary" defaultValue={specificDetail?.price} type="number" {...register("price")} />
                <input className="btn btn-outline-primary" defaultValue={specificDetail?._id}{...register("id")}  />
                <textarea className="btn btn-outline-primary" defaultValue="I want to get this amazing service." {...register("comments")}  />
                <input className="btn btn-primary" type="submit" value="Confirm" />
            </form>
          </div>
          </div>
          </Container>
    </div>
           
     
   
  
    );
};

export default Details;