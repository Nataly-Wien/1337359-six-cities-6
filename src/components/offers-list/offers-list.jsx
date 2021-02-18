import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../types-validation/';
import Card from '../card/card';
import {useHistory} from 'react-router-dom';

const OffersList = ({hotels, isFavoritePage}) => {
  const [activeCard, setActiveCard] = useState(-1);
  const history = useHistory();

  const navigateToRoomPage = (evt) => {
    evt.preventDefault();

    if (activeCard !== -1) {
      history.push(`/offer/${activeCard}`);
    }
  };

  return (
    <div className={isFavoritePage ? `favorites__places` : `cities__places-list places__list tabs__content`}>
      {hotels.map((item) => <Card hotel={item} key={item.id} isFavoritePage={isFavoritePage} onMouseEnter={() => setActiveCard(item.id)}
        onMouseLeave={() => setActiveCard(-1)} onClick={(evt) => navigateToRoomPage(evt)} />)}
    </div >
  );
};

OffersList.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
  isFavoritePage: PropTypes.bool,
};

export default OffersList;
