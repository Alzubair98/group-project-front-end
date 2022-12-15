/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { fetchBikes } from "../../Redux/bikes/bike";
import "./mainpage.css";
import "../carousel/newCarousel.css";

// import icons
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

function SampleNextArrow({ onClick }) {
  return (
    <div className="arrow arrow-right" onClick={onClick}>
      <BsArrowRight />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className="arrow arrow-left" onClick={onClick}>
      <BsArrowLeft />
    </div>
  );
}
function EmptyArrow({ onClick }) {
  return <div />;
}

function Mainpage(props) {
  const [slideIndex, setSlideIndex] = useState(0);
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.bike.bikes);
  const { handleBikeDetails } = props;
  useEffect(() => {
    dispatch(fetchBikes());
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    // autoplaySpeed: 1000,
    beforeChange: (current, next) => setSlideIndex(next),
    centerMode: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: (dots) => (
      <div>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (current, next) => (
      <div className={current === slideIndex ? "dot dot-active" : "dot"} />
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          nextArrow: <EmptyArrow />,
          prevArrow: <EmptyArrow />,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="mainheader">Bikers friend</h1>
      <div className="mainpage">
        <div className="slider">
          <Slider {...settings}>
            {bikes.map((bike, index) => (
              <div
                id="con-card"
                className={
                  index === slideIndex ? "slide slide-active" : "slide"
                }
                key={bike.id}
              >
                <div className="con-image">
                  <img src={bike.image} alt={bike.name} />
                  <img className="bg" src="ghana.png" alt="bg" />
                </div>
                <div className="con-text">
                  <h3>{bike.name}</h3>
                </div>
                <div className="con-price">
                  <span>${bike.price}0</span>
                </div>
                <div className="card-body">
                  <button className="btn-reserve" type="button">
                    <Link to={`/addreserve`}>Reserve</Link>
                  </button>
                  <button
                    className="btn-details"
                    type="button"
                    onClick={handleBikeDetails}
                  >
                    <Link id={bike.id} to={`/bikes/${bike.id}`}>
                      Details
                    </Link>
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Mainpage;

Mainpage.propTypes = {
  handleBikeDetails: PropTypes.func.isRequired,
};
