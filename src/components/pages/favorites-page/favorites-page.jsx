import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../../types-validation/hotel-types-validation';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritePlaces from '../../favorite-places/favorite_places';
import FavoriteEmpty from '../../favorite-places/favorite-empty';
import {Types} from '../../../const';

const FavoritesPage = ({hotels}) => {

  return (
    <div className="page">
      <Header page={Types.NOT_MAIN_PAGE} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          {hotels.length === 0 ? <FavoriteEmpty /> : <FavoritePlaces hotels={hotels} />}
        </div >
      </main >
      <Footer />
    </div >
  );
};

FavoritesPage.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
};

const mapStateToProps = ({hotels}) => ({
  hotels: hotels.filter((item) => item.isFavorite),
});

export default connect(mapStateToProps, null)(FavoritesPage);
