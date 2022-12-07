import React from "react";
import "./mainpage.css";
import { useSelector } from "react-redux";

function Mainpage() {
  const bikes = useSelector((state) => state.storeSlice);

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
