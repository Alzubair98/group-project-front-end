/* eslint-disable */
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadReservations } from "../Redux/reservations/reservation";
import { useDispatch } from "react-redux";
import Reservation from "./reservation";

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
          <div className="content">
            <p>location:{reserv.location}</p>
          </div>
          <Reservation id={reserv.id} />
        </div>
      ))}
    </div>
  );
}

export default MainReservation;
