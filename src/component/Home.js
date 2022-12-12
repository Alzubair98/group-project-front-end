import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types';
import Login from './auth/Login';
import Registration from './auth/Registration';
import './home.css';

function Home(props) {
  const { handleLogout } = props;
  const handleLogoutClick = () => {
    axios
      .delete('http://localhost:3001/logout', { withCredentials: true })
      .then(() => {
        handleLogout();
      })
      .catch((error) => {
        console.log('logout error', error);
      });
    handleLogout();
  };

  return (
    <div>
      <div className="home-div">
        <Login />
        <Registration />
      </div>
      <button type="submit" onClick={() => handleLogoutClick()}>
        logout
      </button>
    </div>
  );
}

Home.propTypes = {
  handleLogout: propTypes.func.isRequired,
};

export default Home;
