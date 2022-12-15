/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBikes } from '../../Redux/bikes/bike';
import './bikeDetails.css';

function BikeDetails(props) {
  const { bikeDetailId } = props;
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.bike.bikes);
  const checkBikeId = bikes.filter((b) => b.id === bikeDetailId);

  useEffect(() => {
    dispatch(fetchBikes());
  }, []);

  return (
    <div className="detailarea">
      <h1>Bike Details</h1>
      {checkBikeId.map((bikers) => (
        <div className="carddetails" key={bikers.id}>
          <div className="imagedetails">
            <img src={bikers.image} alt={bikers.name} />
            <img className="bgdetails" src="ghana.png" alt="bg" />
          </div>
          <div className="bodydetails">
            <div className="pricedetails">
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              <span>${bikers.price}0</span>
            </div>
            <div className="textdetails">
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              <h3> {bikers.name}</h3>
            </div>
            <div className="descriptiondetails">
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              <p> {bikers.description}</p>
            </div>

            <button className="backBtn" type="button">
              <Link to="/">Back</Link>
            </button>
          </div>
        </div>
      ))}
      ;
    </div>
  );
}

export default BikeDetails;

BikeDetails.propTypes = {
  bikeDetailId: PropTypes.number.isRequired,
};
