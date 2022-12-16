/* eslint-disable */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./auth.css";

const Login = (props) => {
  const [user, setUser] = useState({
    username: "",
    loginErrors: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser({
      username: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    axios
      .post(
        "http://localhost:3001/sessions",
        {
          user: {
            username: user.username,
          },
        },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data.logged_in) {
          navigate("/");
          console.log("logged in", response);
        }
      })
      .catch((error) => {
        console.log("login error", error);
      });
    event.preventDefault();
  };

  return (
    <div className="loginform">
      <form onSubmit={handleSubmit} className="formlogin">
        <h2 className="headerTitle">Login</h2>
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
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
