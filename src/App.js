/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import Sidebar from './component/sidebar/sidebar';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import Reservation from './pages/reservation';
import Review from './pages/review';
import Models from './pages/models';
// import { fetchBikes } from './Redux/bike/bike';
import BikeDetails from './component/bike/bikeDetails';

function App() {
  const [Id, setBikeId] = useState(7);

  const handleBikeDetails = (e) => {
    const bikeBtnId = e.target;
    setBikeId(Number(bikeBtnId.id));
  };

  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard handleBikeDetails={handleBikeDetails} />} />
          <Route path="/bikes/:id" element={<BikeDetails bikeDetailId={Id} />} />
          <Route path="/model" element={<Models />} />
          <Route path="/reserve" element={<Reservation />} />
          <Route path="/review" element={<Review />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
