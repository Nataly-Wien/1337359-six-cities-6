import React from 'react';
import PropTypes from 'prop-types';

const PremiumMark = ({markType}) => {
  return (
    <div className={markType.markClassName}>
      <span>Premium</span>
    </div>
  );
};

PremiumMark.propTypes = {
  isRoomPage: PropTypes.bool,
  markType: PropTypes.shape({
    markClassName: PropTypes.string,
  })
};

export default PremiumMark;
