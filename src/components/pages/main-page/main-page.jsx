import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../../types-validation/';
import Header from '../../header/header';
import Cities from '../../cities/cities';
import SortList from '../../sort-list/sort-list';
import OffersList from '../../offers-list/offers-list';
import Map from '../../map/map';
import {Types, SORTS} from '../../../const';
import {getPoints} from '../../../common';

const MainPage = ({hotels, city, sort}) => {
  const [activeCard, setActiveCard] = useState(-1);

  const onCardHover = (id) => setActiveCard(id);
  const onCardLeave = () => setActiveCard(-1);

  const getLocation = () => {
    return hotels.length > 0 ? hotels[0].city.location : {};
  };

  const mapMarkers = getPoints(hotels);

  return (
    <div className="page page--gray page--main">
      <Header page={Types.MAIN_PAGE} />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Cities />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${hotels.length} place${hotels.length !== 1 ? `s` : ``} to stay in ${city}`}</b>
              <SortList />
              <OffersList hotels={hotels.sort(SORTS[sort].rule)} page={Types.MAIN_PAGE} onCardHover={onCardHover} onCardLeave={onCardLeave} />
            </section >
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map city={getLocation()} points={mapMarkers} activeMarker={activeCard} />
              </section>
            </div>
          </div >
        </div >
      </main>
    </div>
  );
};

MainPage.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
  city: PropTypes.string.isRequired,
  sort: PropTypes.number.isRequired,
};

const mapStateToProps = ({hotels, city, sort}) => ({
  hotels: hotels.filter((item) => item.city.name === city),
  city,
  sort,
});

export default connect(mapStateToProps, null)(MainPage);
