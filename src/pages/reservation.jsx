<<<<<<< HEAD
/* eslint-disable import/extensions */
import React from 'react';
import Form from '../component/reservations/reservationsform';
=======
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
  console.log(data);
  console.log(id);
>>>>>>> auth-test

  return (
    <div>
<<<<<<< HEAD
      <h1>Reservation</h1>
      <Form />
=======
      <h1>user : {data.user.username}</h1>
      <h1>bike : {data.bike.name}</h1>
      <img src={data.bike.image} alt="bike img" />
>>>>>>> auth-test
    </div>
  );
}

export default Reservation;
