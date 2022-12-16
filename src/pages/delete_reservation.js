/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";

function DeleteReservation(props) {
  const { id, buttonID } = props;

  const [data, setData] = useState({
    user: { username: "empty" },
    bike: { name: "empty", image: "empty" },
  });

  const get_user_bike = () => {
    axios
      .get("http://localhost:3001/reservations/" + id)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log("1 reservation error", error);
      });
  };

  const delete_reserv = () => {
    axios
      .post("http://localhost:3001/destroy", {
        reservation: { id: buttonID },
      })
      .then((response) => {
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
        <img src={data.bike.image} className="reserv-img" alt="bike img" />
      </div>
      <div className="">
        <h1 className=""> {data.bike.name}</h1>
      </div>
    </div>
  );
}

export default DeleteReservation;
