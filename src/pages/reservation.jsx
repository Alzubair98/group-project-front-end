/* eslint-disable */
import React, { useEffect, useState } from "react";
import axios from "axios";

function Reservation(props) {
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
    <div>
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
    </div>
  );
}

export default Reservation;
