import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../types-validation/hotel-types-validation';
import OffersList from '../offers-list/offers-list';
import {Routes} from '../../const';

const Location = ({hotels, city, page, setCity}) => {

  const onCityClick = () => {
    setCity(city);
  };

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item" onClick={() => onCityClick()}>
          <Link to={Routes.HOME} className="locations__item-link" href="#">
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <OffersList hotels={hotels} page={page} />
    </li>
  );
};

Location.propTypes = {
  hotels: PropTypes.arrayOf(hotelTypesValidation),
  city: PropTypes.string.isRequired,
  page: PropTypes.string.isRequired,
  setCity: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  setCity: (city) => dispatch(ActionCreator.setCity(city)),
});

export default connect(null, mapDispatchToProps)(Location);

export {Location};
