import React from 'react'
import './mainpage.css'
import dummy from '../../dummyApi/dummy'

function Mainpage() {
  return (
    <div className="mainpage">
      {
        dummy.map((item, index)=>(
          <div key={index} className="cardContainer">
            <div className="imgcard">
              <img src={item.image} alt="img
              " />
            </div>
            <div className="content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>${item.price}</p>
              <button>Reserve</button>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Mainpage
