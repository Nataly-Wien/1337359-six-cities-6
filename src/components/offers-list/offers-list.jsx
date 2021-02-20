import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../types-validation/';
import Card from '../card/card';
import {CardTypes, OfferTypes} from '../../const';

const OffersList = ({hotels, page}) => {
  const [activeCard, setActiveCard] = useState(-1);

  return (
    <div className={OfferTypes[page].offerClassName}>
      {hotels.map((item) => <Card hotel={item} key={item.id} cardType={CardTypes[page]} onMouseEnter={() => setActiveCard(item.id)}
        onMouseLeave={() => setActiveCard(-1)}
      />)}
    </div >
  );
};

OffersList.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
  page: PropTypes.string.isRequired,
};

export default OffersList;
