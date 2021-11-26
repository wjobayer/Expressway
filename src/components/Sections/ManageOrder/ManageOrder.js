import React, { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import useAuth from '../../Firebase/useAuth';

const ManageOrder = () => {
  const {user}=useAuth();
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState("");
  
    const handleStatus = (e) => {
      setStatus(e.target.value);
    };
    console.log(status);
    useEffect(() => {
      fetch("https://mighty-basin-76183.herokuapp.com/allorders")
        .then((res) => res.json())
        .then((data) => setOrders(data));
    }, []);
  
      // const status = "apporved";
    const handleUpdate = (id) => {
      fetch(`https://mighty-basin-76183.herokuapp.com/updatestatus/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ status }),
      });
  
      console.log(id);
    };

    return (
        <div className="my-5 w-100">
           <Container>
           <h1>Manage All Delivery</h1>
            <div className="container">
      <h5>Orders Queue {orders.length}</h5>

      <div>
      <Table striped bordered hover className="custom-size">
        <thead>
          <tr className="bg-primary">
            <th>S.N</th>
            <th>Service</th>
            <th>Image</th>
            <th>User Information</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders?.map((pd, index) => (
          <tbody>
            <tr>
              <td>{index}</td>
              <td>{pd.name}</td>
              <td> <img width="150px" src={pd.image} alt="" /> </td>
              <td className="fw-lighter">

                <h6>{pd.username}</h6>
                <h6>{pd.email}</h6>
                <img width="50px" className="rounded-circle" src={pd.imageURL} alt="" />
              </td>
              
              <td>
                <input
                  onChange={handleStatus}
                  type="text"
                  defaultValue={pd.status}
                />
              </td>
              <div className="d-flex my-3">
              <button className="btn bg-danger p-2">Delete</button>
              <button
                onClick={() => handleUpdate(pd._id)}
                className="btn bg-success p-2"
              >
                Update
              </button>
              </div>
            </tr>
          </tbody>
        ))}
      </Table>
      </div>
    </div>
           </Container>
        </div>
    );
};

export default ManageOrder;