/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchBikes } from '../../Redux/bike/bike';
import './mainpage.css';

function Mainpage(props) {
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.bike.bikes);
  const { handleBikeDetails } = props;
  useEffect(() => {
    dispatch(fetchBikes());
  }, []);

  return (
    <>
      <h1 className="mainheader">Bikers friend</h1>
      <div className="mainpage">
        {
                  bikes.map((bike) => (
                    <div className="con-card" key={bike.id}>
                      <div className="con-image">
                        <img src={bike.image} alt={bike.name} />
                        <img className="bg" src="ghana.png" alt="bg" />
                      </div>
                      <div className="con-text">
                        <h3>{bike.name}</h3>
                      </div>
                      <div className="con-price">
                        <span>
                          $
                          {bike.price}
                          0
                        </span>
                      </div>
                      <div className="card-body">
                        <button className="btn-reserve" type="button">Reserve</button>
                        <button className="btn-details" type="button" onClick={handleBikeDetails}>
                          <Link id={bike.id} to={`/bikes/${bike.id}`}>Details</Link>
                        </button>
                      </div>
                    </div>

                  ))
                }

      </div>
    </>
  );
}

export default Mainpage;

Mainpage.propTypes = {
  handleBikeDetails: PropTypes.func.isRequired,
};
