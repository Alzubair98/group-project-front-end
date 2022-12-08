import React, { useState } from "react";
import { FaAnchor, FaBars, FaTh } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItems = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/reserve",
      name: "Reservation",
      icon: <FaTh />,
    },
    {
      path: "/review",
      name: "Review",
      icon: <FaTh />,
    },

    {
      path: "/about",
      name: "About",
      icon: <FaAnchor />,
    },
    {
      path: "/home",
      name: "Home",
      icon: <FaAnchor />,
    },
  ];
  return (
    <div className="container-a">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItems.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
