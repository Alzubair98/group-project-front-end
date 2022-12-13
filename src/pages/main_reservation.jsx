import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadReservations } from "../Redux/reservations/reservation";
import { useDispatch } from "react-redux";
import Reservation from "./reservation";
import "./main_reservation.css";

function MainReservation(props) {
  const { data } = props;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReservations());
  }, []);

  const reservations = useSelector((state) => state.reservationStore);
  const user_reservation = reservations.filter(
    (item) => item.user_id === data.id
  );

  return (
    <div>
      {user_reservation.map((reserv, index) => (
        <div key={index} className="cardContainer">
          <div className="container">
            <Reservation id={reserv.id} />
          </div>
          <div className="content">
            <h3 className="reserve">Location : {reserv.location}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainReservation;
