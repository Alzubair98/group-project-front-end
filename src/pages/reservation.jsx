/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Reservation(props) {
  const { id, buttonID } = props;

  const [data, setData] = useState({
    user: { username: "empty" },
    bike: { name: "empty", image: "empty" },
  });

  const get_user_bike = () => {
    axios
      .get("https://bikee.onrender.com/reservations/" + id)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("1 reservation error", error);
      });
  };

  const navigate = useNavigate();

  const delete_reserv = () => {
    axios
      .post("https://bikee.onrender.com/destroy", {
        reservation: { id: buttonID },
      })
      .then((response) => {
        navigate("/msg");
        console.log(response);
      })
      .catch((error) => {
        console.log("delete reservation error", error);
      });
  };
  if (!buttonID == 0) {
    delete_reserv();
  }

  useEffect(() => {
    get_user_bike();
  }, []);

  return (
    <div className="">
      <div className="">
        <img className="reserv-img" src={data.bike.image} alt=" img" />
      </div>
      <div className="">
        <h1 className=""> name: {data.bike.name}</h1>
      </div>
    </div>
  );
}

export default Reservation;
