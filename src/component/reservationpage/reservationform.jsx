import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../../redux/reservations/reservations';

/* eslint-disable camelcase */

function ReservationForm(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addReservation());
  }, [dispatch]);

  const [user_id, setUserId] = useState();
  const [location, setLocation] = useState('');
  const [bike_id, setBikeId] = useState();
  const handleClick = (e) => {
    e.preventDefault();
    const formParam = {
      user_id,  location, bike_id,
    };
    dispatch(addReservation(formParam));
    console.log(formParam);
   };

  return (
    <form onSubmit={handleClick}>
      <div>
        <label>User ID
        <input type="number" value={user_id} onChange={(e) => { setUserId(e.target.value); }} />
        </label>
      </div>

      <div>

        <label>Location
        <input type="text" value={location} onChange={(e) => { setLocation(e.target.value); }} />
        </label>
      </div>

      <div>
        <label>Bike ID
        <input type="number" value={bike_id} onChange={(e) => { setBikeId(e.target.value); }} />
        </label>
      </div>

      <input type="submit" value="Add Reservation" />
    </form>
  );
};

export default ReservationForm;
