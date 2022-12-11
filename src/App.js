import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./component/sidebar";
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Main_reservation from "./pages/main_reservation";
import Review from "./pages/review";
import axios from "axios";
import Home from "./component/Home";

function App() {
  const [user, setUser] = useState({
    loggedInStatus: "NOT_LOGGED_IN",
    user: {},
  });

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
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/reserve"
            element={<Main_reservation data={user.user} />}
          />
          <Route path="/review" element={<Review />} />
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
