/* eslint-disable */
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  AiFillTwitterCircle,
  AiFillFacebook,
  AiOutlineAmazon,
  AiOutlineInstagram,
  AiOutlineHome,
  AiFillCarryOut,
  AiOutlineGooglePlus,
  AiOutlineSolution,
  AiTwotoneAlert,
  AiTwotoneThunderbolt,
} from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "./sidebarStyle.css";

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
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">Bikers 🚲</h1>
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="middle_section">
          {menuItems.map((item, index) => (
            <NavLink
              to={item.path}
              key={uuidv4()}
              id={index}
              className="link"
              activeclassname="active"
            >
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}
        </div>
        <div className="bottom_section">
          <div className="icon">
            <AiFillTwitterCircle />
            <AiFillFacebook />
            <AiOutlineAmazon />
            <AiOutlineInstagram />
            <AiOutlineGooglePlus />
          </div>
        </div>
      </div>
      <main className="mainPagess">{children}</main>
    </div>
  );
}

export default Sidebar;
