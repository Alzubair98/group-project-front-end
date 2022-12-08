import React from 'react';
import { useSelector } from 'react-redux';

function Reservationpage() {
  const reservations = useSelector((state) => state.reservationSlice);

  return (
    <div className="container">
      {reservations.map((reservation, index) => (
        <div key={reservation.id} id={index} className="reservation_container">
          <div className="content">
            <h3>{index.user_id}</h3>
            <p>{index.bike_id}</p>
            <p>{index.location}</p>
            <button type="submit">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reservationpage;
