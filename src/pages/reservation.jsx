import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadReservations } from "../Redux/reservations/reservation";
import { loadBikes } from "../Redux/bikes/bike";
import { useDispatch } from "react-redux";

function Reservation(props) {
  const { data } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadReservations());
  }, []);

  const reservations = useSelector((state) => state.reservationStore);
  const bikes = useSelector((state) => state.storeSlice);

  console.log(bikes);

  const user_reservation = reservations.filter(
    (item) => item.user_id === data.id
  );

  return (
    <div className="mainpage">
      {user_reservation.map((bike, index) => (
        <div key={index} className="cardContainer">
          <div className="content">
            <h3>{bike.user_id}</h3>
            <p>{bike.location}</p>
            <p>{bike.bike_id}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reservation;
