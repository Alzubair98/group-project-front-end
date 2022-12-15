/* eslint-disable */
import React from "react";
import axios from "axios";
import Login from "./auth/Login";
import Registration from "./auth/Registration";
import "./home.css";

function Home(props) {
  const handleLogoutClick = () => {
    axios
      .delete("http://localhost:3001/logout", { withCredentials: true })
      .then((response) => {
        props.handleLogout();
      })
      .catch((error) => {
        console.log("logout error", error);
      });
    props.handleLogout();
  };

  return (
    <div>
      <div className="home-div">
        <Login />
        <Registration />
      </div>
      <button onClick={() => handleLogoutClick()} className="btnout">logout</button>
    </div>
  );
}

export default Home;
