import React from 'react';
import PropTypes from 'prop-types';
import Mainpage from '../component/mainpage/mainpage';

function Dashboard(props) {
  const { handleBikeDetails } = props;
  return (
    <>
      <Mainpage handleBikeDetails={handleBikeDetails} />
    </>
  );
}

export default Dashboard;

Dashboard.propTypes = {
  handleBikeDetails: PropTypes.func.isRequired,
};
