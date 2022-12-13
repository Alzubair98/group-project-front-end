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
  console.log(data);
  console.log(id);

  return (
    <div className="cardContainerr">
      <h1 className="userlogin1">{data.user.username}'s reservation </h1>
      <div className="img">
        <img src={data.bike.image} alt="bike img" />
      </div>
      <div className="bikeuser">
        <h1 className="userlogin">{data.user.username}'s reservation </h1>
        <h1 className="bikename"> {data.bike.name}</h1>
      </div>
    </div>
  );
}

export default Reservation;
