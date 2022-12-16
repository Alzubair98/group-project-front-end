/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../component/auth/auth.css";

const AddReservation = (props) => {
  if (Object.keys(props.data).length !== 0) {
    var [reservation, setReservation] = useState({
      user: props.data.username,
      bike: "",
      location: "",
      reservationsErrors: "",
    });
  } else {
    var [reservation, setReservation] = useState({
      user: "",
      bike: "",
      location: "",
      reservationsErrors: "",
    });
  }

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReservation((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    axios
      .post("https://bikee.onrender.com/reservations", {
        reservation: {
          user: reservation.user,
          bike: reservation.bike,
          location: reservation.location,
        },
      })
      .then((response) => {
        navigate("/reserve");
        console.log(response);
      })
      .catch((error) => {
        console.log("reservations error", error);
      });
    event.preventDefault();
  };

  return (
    <div className="loginform">
      <form onSubmit={handleSubmit}>
        <h2 className="headerTitle">Add New Bike</h2>
        <div className="row">
          <label className="label">Username</label>
          <input
            type="text"
            name="user"
            placeholder="Username"
            value={reservation.user}
            onChange={handleChange}
            required
          />
          <label className="label mt-4">BikeName</label>
          <input
            type="text"
            name="bike"
            placeholder="BikeName"
            value={reservation.bike}
            onChange={handleChange}
            required
          />
          <label className=" mt-4 label">Location</label>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={reservation.location}
            onChange={handleChange}
            required
          />

          <button type="submit" className="button row">
            Add Bike
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReservation;
