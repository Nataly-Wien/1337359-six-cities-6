import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../../types-validation/hotel-types-validation';
import Header from '../../header/header';
import Footer from '../../footer/footer';
import FavoritePlaces from '../../favorite-places/favorite_places';
import FavoriteEmpty from '../../favorite-places/favorite-empty';
import LoadWrapper from '../../load-wrapper/load-wrapper';
import {fetchFavorites} from '../../../store/api-actions';
import {Types} from '../../../const';
import ErrorWrapper from '../../error-wrapper/error-wrapper';

const FavoritesPage = ({hotels, onLoadFavorites, isFavoritesLoading, isLoadingError}) => {
  useEffect(() => {
    if (isFavoritesLoading) {
      onLoadFavorites();
    }
  });

  return (
    <div className="page">
      <Header page={Types.NOT_MAIN_PAGE} />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <ErrorWrapper isLoadingError={isLoadingError}>
            <LoadWrapper isDataLoading={isFavoritesLoading}>
              {hotels.length === 0 ? <FavoriteEmpty /> : <FavoritePlaces hotels={hotels} />}
            </LoadWrapper>
          </ErrorWrapper>
        </div >
      </main >
      <Footer />
    </div >
  );
};

FavoritesPage.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
  onLoadFavorites: PropTypes.func.isFavoritesLoading,
  isFavoritesLoading: PropTypes.bool.isRequired,
  isLoadingError: PropTypes.bool.isRequired,
};

const mapStateToProps = ({favorites, isFavoritesLoading, isLoadingError}) => ({
  hotels: favorites,
  isFavoritesLoading,
  isLoadingError
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites: () => dispatch(fetchFavorites()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
