import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadReservations } from "../Redux/reservations/reservation";
import { useDispatch } from "react-redux";

function Reservation() {
  const reservations = useSelector((state) => state.reservationStore);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReservations());
  }, []);

  return (
    <div className="mainpage">
      {reservations.map((bike, index) => (
        <div key={index} className="cardContainer">
          <div className="content">
            <h3>{bike.user_id}</h3>
            <p>{bike.locations}</p>
            <p>${bike.bike_id}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reservation;
