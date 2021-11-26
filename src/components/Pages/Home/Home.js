import React from 'react';
import Banner from '../../Sections/Banner/Banner';
import Services from '../../Sections/Services/Services';
import Tracking from '../../Sections/Tracking/Tracking';
import ContactUs from '../Contact Us/ContactUs';

const Home = () => {
    return (
        <div>
            
            <Banner></Banner>
            <Tracking></Tracking>
            <Services></Services>
            <ContactUs></ContactUs>
            
        </div>
    );
};

export default Home;