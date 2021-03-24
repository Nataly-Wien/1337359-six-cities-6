import React from 'react';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../types-validation/hotel-types-validation';
import SortList from '../sort-list/sort-list';
import OffersList from '../offers-list/offers-list';
import Map from '../map/map';
import {Types} from '../../const';
import {getPoints} from '../../common';

const Places = ({hotels, city, activeCard, onCardHover, onCardLeave}) => {
  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{`${hotels.length} place${hotels.length !== 1 ? `s` : ``} to stay in ${city}`}</b>
        <SortList />
        <OffersList hotels={hotels} page={Types.MAIN_PAGE} onCardHover={onCardHover} onCardLeave={onCardLeave} />
      </section >
      <div className="cities__right-section">
        <section className="cities__map map">
          <Map city={hotels.length > 0 ? hotels[0].city.location : {}} points={getPoints(hotels)} activeMarker={activeCard} />
        </section>
      </div>
    </div >
  );
};

Places.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
  city: PropTypes.string.isRequired,
  activeCard: PropTypes.number.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
};

export default Places;
