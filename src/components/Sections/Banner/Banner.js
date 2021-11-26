import React from 'react';
import { Carousel } from 'react-bootstrap';
import imageone from '../../../images/3.png'
import imagetwo from '../../../images/9.png'
import imagethree from '../../../images/14.png'
import imagefour from '../../../images/a.png'
import imagefive from '../../../images/b.png'
import './Banner.css'
const Banner = () => {
    return (
        <div>
    <Carousel fade>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagefour}
      alt="First slide"
    />
    <Carousel.Caption className="custom-margin">
      <h3>We provide Best Courier & Parcel Service</h3>
      <p>Welcome To Expressway</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagetwo}
      alt="Second slide"
    />

    <Carousel.Caption className="custom-margin">
    <h3>We provide Best Courier & Parcel Service</h3>
      <p>Welcome To Expressway</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={imageone}
      alt="Third slide"
    />

    <Carousel.Caption className="custom-margin">
    <h3>We provide Best Courier & Parcel Service</h3>
      <p>Welcome To Expressway</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagethree}
      alt="Third slide"
    />

    <Carousel.Caption className="custom-margin">
    <h3>We provide Best Courier & Parcel Service</h3>
      <p>Welcome To Expressway</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
      className="d-block w-100"
      src={imagefive}
      alt="Third slide"
    />

    <Carousel.Caption className="custom-margin">
    <h3>We provide Best Courier & Parcel Service</h3>
      <p>Welcome To Expressway</p>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
        </div>
    );
};

export default Banner;