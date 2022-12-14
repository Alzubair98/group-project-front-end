import React from 'react';
import Carousel from 'react-elastic-carousel';
import uuid from 'react-uuid';
import dummy from '../../dummyApi/dummy';
import './carousel.css';

function Caarousel() {
  return (
    <>
      <h1>Latest Model</h1>
      <Carousel itemsToShow={3}>
        {dummy.map((item, index) => (
          <>
            <item className="item" id={index} key={uuid()}>
              <img src={item.image} alt={item.name} />
              <span className="carouselescribe">{item.description}</span>
            </item>
          </>
        ))}
      </Carousel>

    </>
  );
}

export default Caarousel;
