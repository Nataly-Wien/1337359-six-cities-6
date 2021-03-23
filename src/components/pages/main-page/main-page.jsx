import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../../types-validation/hotel-types-validation';
import {fetchHotels} from '../../../store/api-actions';
import {getSort, getCity} from '../../../store/offers/selectors';
import {getHotelsLoadingStatus, getLoadingErrorStatus} from '../../../store/data/selectors';
import {getAuthorizationStatus} from '../../../store/user/selectors';
import {getFilteredSortedHotels} from '../../../store/memoized-selectors';
import Header from '../../header/header';
import Cities from '../../cities/cities';
import PlacesEmpty from '../../places/places-empty';
import Places from '../../places/places';
import LoadWrapper from '../../load-wrapper/load-wrapper';
import {Types} from '../../../const';

const MainPage = ({hotels, city, sort, isHotelsLoading, isLoadingError, authorizationStatus, onLoadData}) => {
  const [activeCard, setActiveCard] = useState(-1);

  const onCardHover = (id) => setActiveCard(id);
  const onCardLeave = () => setActiveCard(-1);

  useEffect(() => {
    onLoadData();
  }, [authorizationStatus]);

  return (
    <div className="page page--gray page--main">
      <Header page={Types.MAIN_PAGE} />
      <main className={`page__main page__main--index${hotels.length === 0 ? ` page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Cities />
        </div>
        <div className="cities">
          <LoadWrapper isDataLoading={isHotelsLoading}>
            {hotels.length === 0 ? <PlacesEmpty city={city} isLoadingError={isLoadingError} /> :
              <Places hotels={hotels} city={city} activeCard={activeCard} onCardHover={onCardHover} onCardLeave={onCardLeave} />}
          </LoadWrapper>
        </div >
      </main>
    </div>
  );
};

MainPage.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
  city: PropTypes.string.isRequired,
  sort: PropTypes.number.isRequired,
  isHotelsLoading: PropTypes.bool.isRequired,
  isLoadingError: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  hotels: getFilteredSortedHotels(state),
  city: getCity(state),
  sort: getSort(state),
  isHotelsLoading: getHotelsLoadingStatus(state),
  isLoadingError: getLoadingErrorStatus(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData: () => dispatch(fetchHotels()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
