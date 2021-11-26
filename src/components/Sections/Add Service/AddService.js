import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import image from '../../../images/Untitled design (28).png'
import './AddService.css';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://mighty-basin-76183.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className="add-service">
            <img className="w-50" src={image} alt="" />
            <div>
            <h1 className="my-5">Please Add a Service</h1>
            <form className="mb-5" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 30 })} placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="price" />
                <input {...register("img")} placeholder="image url" />
                <input className="btn btn-primary" type="submit" value="Post" />
            </form>
            </div>
        </div>
    );
};

export default AddService;