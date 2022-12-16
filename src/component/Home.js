/* eslint-disable */
import React from "react";
import axios from "axios";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import "./home.css";

function Home(props) {
  const handleLogoutClick = () => {
    axios
      .delete("https://bikee.onrender.com//logout", { withCredentials: true })
      .then((response) => {
        props.handleLogout();
      })
      .catch((error) => {
        console.log("logout error", error);
      });
    props.handleLogout();
  };

  const handleSuccessfulAuth = (data) => {
    props.handleLogin(data);
  };

  return (
    <div>
      <div className="home-div">
        <Login handleSuccessfulAuth={handleSuccessfulAuth} />
        <Registration handleSuccessfulAuth={handleSuccessfulAuth} />
      </div>
      <button onClick={() => handleLogoutClick()} className="button">
        logout
      </button>
    </div>
  );
}

export default Home;
