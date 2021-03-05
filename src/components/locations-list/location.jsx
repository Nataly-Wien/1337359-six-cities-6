import React from 'react';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../types-validation/hotel-types-validation';
import OffersList from '../offers-list/offers-list';

const Location = ({hotels, city, page}) => {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <OffersList hotels={hotels} page={page} />
    </li>
  );
};

Location.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
  city: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
};

export default Location;
