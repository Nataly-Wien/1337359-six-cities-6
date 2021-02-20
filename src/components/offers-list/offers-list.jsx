import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../types-validation/';
import Card from '../card/card';
import {OfferTypes} from '../../const';

const OffersList = ({hotels, page}) => {
  const [activeCard, setActiveCard] = useState(-1);

  const onCardHover = (id) => () => setActiveCard(id);
  const onCardLeave = () => setActiveCard(-1);

  return (
    <div className={OfferTypes[page].offerClassName}>
      {hotels.map((item) => <Card hotel={item} key={item.id} page={page} onMouseEnter={onCardHover(item.id)} onMouseLeave={onCardLeave} />)}
    </div >
  );
};

OffersList.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
  page: PropTypes.string.isRequired,
};

export default OffersList;
