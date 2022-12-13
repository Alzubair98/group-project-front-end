/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";

function Reservation(props) {
  const { id } = props;

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

  useEffect(() => {
    get_user_bike();
  }, []);

  return (
    <div>
      <h1>user : {data.user.username}</h1>
      <h1>bike : {data.bike.name}</h1>
      <img src={data.bike.image} alt="bike img" />
    </div>
  );
}

export default Reservation;
