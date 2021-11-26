import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../Firebase/useAuth';

const MyOrder = () => {
    const {user}=useAuth();
  const [delivery, setDelivery] = useState([]);

  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`https://mighty-basin-76183.herokuapp.com/myorders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setDelivery(data));
  }, [control]);
  console.log(delivery);

  const handleDelete = (id) => {
    fetch(`https://mighty-basin-76183.herokuapp.com/deleteorder/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          window.confirm("Do you really want to Delete?");
          setControl(!control);
         
        }
      });
    console.log(id);
  };


    return (
        <div>
           <Container>
           <h1 className="my-5">My Orders Here</h1>
      <div className="services">
        <div className="row">
          {delivery?.map((pd) => (
            <div className="col-md-4">
              <div className="service border border p-3">
                <div className="services-img ">
                  <img className="w-100 mb-3" src={pd?.image} alt="" />
                </div>

                <h4>{pd?.name}</h4>
                <p>{pd?.description}</p>
                <div className="d-flex justify-content-evenly">
                <h3 className="text-light">$ {pd?.price}</h3>

                <button
                  onClick={() => handleDelete(pd?._id)}
                  className="btn btn-light"
                >
                  Cancel
                </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
           </Container>
        </div>
    );
};

export default MyOrder;