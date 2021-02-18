import React from 'react';
import PropTypes from 'prop-types';

const PremiumMark = ({isRoomPage = false}) => {
  return (
    <div className={isRoomPage ? `property__mark` : `place-card__mark`}>
      <span>Premium</span>
    </div>
  );
};

PremiumMark.propTypes = {
  isRoomPage: PropTypes.bool,
};

export default PremiumMark;
