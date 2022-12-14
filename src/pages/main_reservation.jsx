/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { loadReservations } from "../Redux/reservations/reservation";
import { useDispatch } from "react-redux";
import Reservation from "./reservation";
import "./main_reservation.css";

function MainReservation(props) {
  const { data } = props;

  const [buttonid, setButtonid] = useState(0);

  const buttonHandler = (event) => {
    setButtonid(event.target.id);
  };

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
        <div key={index} className="">
          <div className="">
            <Reservation id={reserv.id} buttonID={buttonid} />
          </div>
          <div className="">
            <h2 className="">Location : {reserv.location}</h2>
            <button
              id={reserv.id}
              className="btn btn-success ms-6 "
              type="submit"
              onClick={buttonHandler}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MainReservation;
