import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {CITIES, DEFAULT_CITY} from '../../const';

const Cities = ({setCity}) => {
  const [activeCity, setActiveCity] = useState(DEFAULT_CITY);

  const onLocationClick = (evt, city) => {
    evt.preventDefault();
    setActiveCity(city);
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
};

export default Cities;
