import React from 'react';
import PropTypes from 'prop-types';
import {PremiumMarkTypes} from '../../const';

const PremiumMark = ({type}) => {
  return (
    <div className={PremiumMarkTypes[type].markClassName}>
      <span>Premium</span>
    </div>
  );
};

PremiumMark.propTypes = {
  isRoomPage: PropTypes.bool,
  type: PropTypes.string,
};

export default PremiumMark;
