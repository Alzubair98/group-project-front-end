import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import {
  AiFillTwitterCircle, AiFillFacebook, AiOutlineAmazon, AiOutlineInstagram,
  AiOutlineHome, AiFillCarryOut, AiOutlineGooglePlus, AiOutlineSolution, AiTwotoneAlert,
  AiTwotoneThunderbolt,
} from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import uuid from 'react-uuid';
import './sidebarStyle.css';

// eslint-disable-next-line react/prop-types
function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItems = [
    {
      path: '/',
      name: 'Dashboard',
      icon: <AiOutlineHome />,
    },
    {
      path: '/model',
      name: 'Model',
      icon: <AiTwotoneThunderbolt />,
    },
    {
      path: '/reserve',
      name: 'Reservation',
      icon: <AiFillCarryOut />,
    },
    {
      path: '/review',
      name: 'Review',
      icon: <AiOutlineSolution />,
    },

    {
      path: '/about',
      name: 'About',
      icon: <AiTwotoneAlert />,
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
          {
                   menuItems.map((item, index) => (
                     <NavLink to={item.path} key={uuid()} id={index} className="link" activeclassname="active">
                       <div className="icon">{item.icon}</div>
                       <div className="link_text">{item.name}</div>
                     </NavLink>
                   ))
        }
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
