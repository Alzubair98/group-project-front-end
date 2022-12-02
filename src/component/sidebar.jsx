import React from 'react'
import { FaAnchor, FaBars, FaTh } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Sidebar({children}) {
    const menuItems = [
        {
            path: '/',
            name: 'Dashboard',
            icon: <FaTh />
        },
        {
            path: '/reserve',
            name: 'Reservation',
            icon: <FaTh />
        },
        {
            path: '/review',
            name: 'Review',
            icon: <FaTh />
        },

        {
            path: '/about',
            name: 'About',
            icon: <FaAnchor />
        },
    ]
  return (
    <div className='container'>
       <div className='sidebar'>
        <h1 className='logo'>Logo</h1>
        <div className='bars'>
            <FaBars />
        </div>
        {
            menuItems.map((item, index) => (
                <NavLink to = {item.path} key={index} className="link" activeClassName='active'>
                    <div className="icon">{item.icon}</div>
                    <div className="link_text">{item.name}</div>
                </NavLink>
            ))
        }
       </div>
       <main>{children}</main>
    </div>
  )
}

export default Sidebar
