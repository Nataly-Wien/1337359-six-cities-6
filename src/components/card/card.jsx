import React from 'react';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../types-validation';
import {toUpperCaseFirst} from '../../common';
import PremiumMark from '../premium-mark/premium-mark';
import FavoriteMark from '../favorite-mark/favorite-mark';

const Card = (props) => {
  const {hotel, isFavoritePage, onMouseEnter, onMouseLeave, onClick} = props;
  const {isPremium, previewImage, price, isFavorite, rating, title, type} = hotel;

  return (
    <article className={`${isFavoritePage ? `favorites__card` : `cities__place-card`} place-card`}
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
      {isPremium && !isFavoritePage && <PremiumMark />}
      <div className={`${isFavoritePage ? `favorites` : `cities`}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={isFavoritePage ? `150` : `260`} height={isFavoritePage ? `110` : `200`} alt="Place image" />
        </a>
      </div>
      <div className={`${isFavoritePage ? `favorites__card-info ` : ``}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price.toString()}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteMark isFavorite={isFavorite} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}></span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{toUpperCaseFirst(type)}</p>
      </div>
    </article >
  );
};

Card.propTypes = {
  hotel: hotelTypesValidation,
  isFavoritePage: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onClick: PropTypes.func,
};


export default Card;
