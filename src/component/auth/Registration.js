/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./auth.css";

const Rigstration = () => {
  const [user, setUser] = useState({
    username: "",
    registrationErrors: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser({
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    axios
      .post(
        "http://localhost:3001/registrations",
        {
          user: { username: user.username },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.status === "created") {
          navigate("/");
          console.log(response);
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
    event.preventDefault();
  };

  return (
    <div className="loginform">
      <form onSubmit={handleSubmit}>
        <h2 className="headerTitle">Sign Up</h2>
        <div className="row">
          <label className="label">Username</label>
          <input
            type="name"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            required
          />

          <button type="submit" className="button row">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Rigstration;
