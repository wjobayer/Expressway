import React from 'react';
import { FormControl, InputGroup ,Button } from 'react-bootstrap';
import './Tracking.css'

const Tracking = () => {
    return (
        <div className="tracking-system">
            <h4>Shipment Tracking</h4>
            <p>Track Your Parcel</p>
            <div className="track">
            <InputGroup className="mt-5 mb-3 cw  mx-auto">
            <FormControl
                placeholder="Type Your Tracking Number"
                 aria-label="Recipient's username"
                 aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
            Track Parcel
            </Button>
            </InputGroup>
            </div>
        </div>
    );
};

export default Tracking;