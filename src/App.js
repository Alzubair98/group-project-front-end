import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';
import Sidebar from './component/sidebar/sidebar';
import About from './pages/about';
import Dashboard from './pages/dashboard';
import Reservation from './pages/reservation';
import Review from './pages/review';
import Models from './pages/models';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/model" element={<Models />} />
            <Route path="/reserve" element={<Reservation />} />
            <Route path="/review" element={<Review />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
