import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './component/sidebar';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import Reservation from './pages/reservation';
import Review from './pages/review';


function App() {
  return (
    <BrowserRouter>
    <Sidebar>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/reserve" element={<Reservation />} />
      <Route path="/review" element={<Review />} />
      <Route path="/about" element={<About />} />
    </Routes> 
    </Sidebar>
    </BrowserRouter>
  );
}

export default App;
