/* eslint-disable */
import "./mainpage.css";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadBikes } from "../../Redux/bikes/bike";

function Mainpage() {
  const bikes = useSelector((state) => state.storeSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBikes());
  }, []);

  return (
    <div className="mainpage">
      {bikes.map((bike, index) => (
        <div key={index} className="cardContainer">
          <div className="imgcard">
            <img src={bike.img} alt="img" />
          </div>
          <div className="content">
            <h3>{bike.name}</h3>
            <p>{bike.description}</p>
            <p>${bike.price}</p>
            <button>Reserve</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Mainpage;
