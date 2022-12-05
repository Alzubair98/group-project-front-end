import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.css';
// import uuid from 'react-uuid';
// import dummy from '../../dummyApi/dummy';

function Caarousel() {
  return (
    <div className="carousel text-center">
      <h3 className="mt-5">Latest Models</h3>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block test"
            src="https://picsum.photos/2000/400?random=1"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block test"
            src="https://picsum.photos/2000/400?random=2"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block test"
            src="https://picsum.photos/2000/400?random=4"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Caarousel;
