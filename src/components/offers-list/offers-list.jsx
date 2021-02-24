import React from 'react';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../types-validation/';
import Card from '../card/card';
import {OfferTypes} from '../../const';

const OffersList = ({hotels, page, onCardHover, onCardLeave}) => {
  return (
    <div className={OfferTypes[page].offerClassName}>
      {hotels.map((item) => <Card hotel={item} key={item.id} page={page} onCardHover={onCardHover} onCardLeave={onCardLeave} />)}
    </div >
  );
};

OffersList.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
  page: PropTypes.string.isRequired,
  onCardHover: PropTypes.func,
  onCardLeave: PropTypes.func,
};

export default OffersList;
