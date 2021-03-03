import React from 'react';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import PropTypes from 'prop-types';
import {CITIES} from '../../const';

const Cities = ({activeCity, setCity}) => {

  const onLocationClick = (evt, city) => {
    evt.preventDefault();
    setCity(city);
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {CITIES.map((item, i) => {
          return (
            <li className="locations__item" key={`${item}-${i}`}>
              <a className={`locations__item-link tabs__item ${item === activeCity ? ` tabs__item--active` : ``}`} href="#"
                onClick={(evt) => onLocationClick(evt, item)}>
                <span>{item}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Cities.propTypes = {
  setCity: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  setCity: (city) => dispatch(ActionCreator.setCity(city)),
});


export default connect(mapStateToProps, mapDispatchToProps)(Cities);
