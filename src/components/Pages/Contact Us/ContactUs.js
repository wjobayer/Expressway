import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Form,Button } from 'react-bootstrap';
import contact from '../../../images/co.png'
import './ContactUs.css'
const ContactUs = () => {
    return (
        <div className="Contact">
            <Container>
                <h1 className="display-4">Contact Us</h1>
                <div className="contactuspage">
                <Form className="m-5 p-5 mx-auto bg-light border rounded-2 left mb-5 p-5 text-primary" id="customw">
                <Form.Label >Name</Form.Label>
                <Form.Control placeholder="Your name" />
                <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="Your Address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label >Email address</Form.Label>
                <Form.Control type="email" placeholder="Your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <>
                <div className="mt-4">
                <Button variant="primary"><FontAwesomeIcon icon={faMobile} /> Call us
                    </Button>{' '}
                <Button variant="secondary"><FontAwesomeIcon icon={faWhatsapp} /> Whatsapp
                    </Button>{' '}
                    
                </div>
                
                </>
                <div className="mt-3" >
                <Button variant="primary">Get Appointment</Button>{' '}
                </div>
</Form>
            <div>
                <img src={contact} alt="" />
            </div>
                </div>
            </Container>
        </div>
    );
};

export default ContactUs;