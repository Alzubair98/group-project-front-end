/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./component/sidebar/sidebar";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import MainReservation from "./pages/main_reservation";
import Review from "./pages/review";
import axios from "axios";
import Home from "./component/Home";
import BikeDetails from "./component/bike/bikeDetails";
import AddReservation from "./pages/addreservatoin";

function App() {
  const [user, setUser] = useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {},
  });

  const [Id, setBikeId] = useState(7);

  const handleBikeDetails = (e) => {
    const bikeBtnId = e.target;
    setBikeId(Number(bikeBtnId.id));
  };

  const checkLoginStatus = () => {
    axios
      .get("http://localhost:3001/logged_in", { withCredentials: true })
      .then((response) => {
        if (
          response.data.logged_in &&
          user.loggedInStatus === "NOT_LOGGED_IN"
        ) {
          setUser({
            loggedInStatus: "LOGGED_IN",
            user: response.data.user,
          });
        } else if (
          !response.data.logged_in &&
          user.loggedInStatus === "LOGGED_IN"
        ) {
          setUser({
            loggedInStatus: "NOT_LOGGED_IN",
            user: {},
          });
        }
      })
      .catch((error) => {
        console.log("check log in error", error);
      });
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    setUser({
      loggedInStatus: "NOT_LOGGED_IN",
      user: {},
    });
  };

  const handleLogin = (data) => {
    setUser({
      loggedInStatus: "LOGGED_IN",
      user: data.user,
    });
  };

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route
            path="/"
            element={<Dashboard handleBikeDetails={handleBikeDetails} />}
          />
          <Route
            path="/bikes/:id"
            element={<BikeDetails bikeDetailId={Id} />}
          />
          <Route
            path="/reserve"
            element={<MainReservation data={user.user} />}
          />
          <Route path="/review" element={<Review />} />
          <Route
            path="/addreserve"
            element={<AddReservation data={user.user} />}
          />
          <Route
            path="/about"
            element={
              <About
                data={user.user}
                handleLogin={handleLogin}
                loggedInStatus={user.loggedInStatus}
              />
            }
          />
          <Route path="/home" element={<Home handleLogout={handleLogout} />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
