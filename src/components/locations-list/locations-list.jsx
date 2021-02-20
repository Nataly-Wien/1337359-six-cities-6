import React from 'react';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../types-validation';
import {Location} from './index';

const LocationList = ({hotels, page}) => {
  const cities = Array.from(new Set(hotels.map((item) => item.city.name)));

  return (
    <ul className="favorites__list">
      {cities.map((item) => <Location city={item} key={item} hotels={hotels.filter((it) => it.city.name === item)} page={page} />)}
    </ul>
  );
};

LocationList.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
  page: PropTypes.string.isRequired,
};

export default LocationList;
