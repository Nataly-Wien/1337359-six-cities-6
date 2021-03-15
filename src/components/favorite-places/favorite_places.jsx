import React from 'react';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../types-validation/hotel-types-validation';
import LocationList from '../locations-list/locations-list';
import {Types} from '../../const';

const FavoritePlaces = ({hotels}) => {
  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      {<LocationList hotels={hotels} page={Types.FAVORITES_PAGE} />}
    </section>
  );
};

FavoritePlaces.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
};

export default FavoritePlaces;
