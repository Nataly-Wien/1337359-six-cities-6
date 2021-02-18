import React from 'react';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../../types-validation/';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import Location from '../../location/location';

const FavoritesPage = ({hotels}) => {
  const isMainPage = false;
  const cities = Array.from(new Set(hotels.map((item) => item.city.name)));

  return (
    <div className="page">
      <Header isMainPage={isMainPage} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((item) => <Location city={item} key={item} hotels={hotels.filter((it) => it.city.name === item)} />)}
            </ul>
          </section>
        </div >
      </main >
      <Footer isMainPage={isMainPage} />
    </div >
  );
};

FavoritesPage.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
};

export default FavoritesPage;
