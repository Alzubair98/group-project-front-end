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
 const [date, setDate] = useState();

 const handleClick = (e) => {
    e.preventDefault();
    const  formParam = {
        user_id, location, date,
    };
    dispatch(addReservation(formParam));
 };
 
}