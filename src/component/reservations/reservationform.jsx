import react from "react";
import React from "react";
import { useState, useEffect } from react
import { addReservation } from "../../redux/reservations/reservations";

const ReservationForm = () => {
    const dispatch = useDispatch();

 useEffect(() => {
    dispatch(addReservation);
 }, [dispatch]);

 const [user_id, setUserId] = useState();
 const [location, setLocation] = useState('');
 

 const handleClick = (e) => {
    e.preventDefault();
    const  formParam = {
        user_id, location, date,
    };
    dispatch(addReservation(formParam));
 };

 return (
    <form onSubmit={handleClick}>
        <div>
            <label>
            User ID
            </label>
            <input type="number" value={user_id} onChange={(e) => {setUserId(e.target.value);}} />
        </div>

        <div>
            <label>
            Location
            </label>
            <input type="text" value={location} onChange={(e) => {setLocation(e.target.value);}} />
        </div>

        <input type="submit" value="Add Reservation"  />
    </form>
 );
};