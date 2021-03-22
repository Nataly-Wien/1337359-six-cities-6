import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../types-validation/hotel-types-validation';
import {toUpperCaseFirst, ratingStyle} from '../../common';
import PremiumMark from '../premium-mark/premium-mark';
import FavoriteMark from '../favorite-mark/favorite-mark';
import {CardTypes, Types, Routes} from '../../const';

const Card = ({page, hotel, onCardHover = () => { }, onCardLeave = () => { }}) => {
  const {isPremium, previewImage, price, isFavorite, rating, title, type, id} = hotel;
  const {articleClassName, imgWrapperClassName, cardInfoClassName, hasPremiumMark, imgWidth, imgHeight} = CardTypes[page];
  const path = Routes.ROOM_PAGE + `${id}`;

  return (
    <article className={`${articleClassName} place-card`}
      onMouseEnter={() => onCardHover(id)} onMouseLeave={onCardLeave}>
      {isPremium && hasPremiumMark && <PremiumMark type={Types.CARD} />}
      <div className={`${imgWrapperClassName} place-card__image-wrapper`}>
        <Link to={path}>
          <img className="place-card__image" src={previewImage} width={imgWidth} height={imgHeight} alt="Place image" />
        </Link>
      </div>
      <div className={`${cardInfoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price.toString()}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteMark isFavorite={isFavorite} type={Types.CARD} id={id} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingStyle(rating)}></span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={path}>{title}</Link>
        </h2>
        <p className="place-card__type">{toUpperCaseFirst(type)}</p>
      </div>
    </article >
  );
};

Card.propTypes = {
  hotel: hotelTypesValidation,
  onCardHover: PropTypes.func,
  onCardLeave: PropTypes.func,
  page: PropTypes.string.isRequired,
};

export default Card;
