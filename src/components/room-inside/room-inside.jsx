import React from 'react';
import PropTypes from 'prop-types';

const RoomInside = ({goods}) => {
  return (
    <div className="property__inside">
      <h2 className="property__inside-title">What&apos;s inside</h2>
      <ul className="property__inside-list">
        {goods.map((item, i) => <li className="property__inside-item" key={`${item}-${i}`}>{item}</li>)}
      </ul>
    </div>
  );
};

RoomInside.propTypes = {
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RoomInside;
