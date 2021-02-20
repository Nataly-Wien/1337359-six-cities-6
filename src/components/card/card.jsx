import React from 'react';
import {useHistory} from 'react-router-dom';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../types-validation';
import {toUpperCaseFirst} from '../../common';
import PremiumMark from '../premium-mark/premium-mark';
import FavoriteMark from '../favorite-mark/favorite-mark';
import {PremiumMarkTypes, FavoriteMarkTypes, Types} from '../../const';

const Card = (props) => {
  const {cardType, hotel, onMouseEnter, onMouseLeave} = props;
  const {isPremium, previewImage, price, isFavorite, rating, title, type, id} = hotel;
  const {articleClassName, imgWrapperClassName, cardInfoClassName, hasPremiumMark, imgWidth, imgHeight} = cardType;

  const history = useHistory();

  const navigateToRoomPage = (evt) => {
    evt.preventDefault();
    history.push(`/offer/${id}`);
  };

  return (
    <article className={`${articleClassName} place-card`}
      onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={(evt) => navigateToRoomPage(evt)}>
      {isPremium && hasPremiumMark && <PremiumMark markType={PremiumMarkTypes[Types.CARD]} />}
      <div className={`${imgWrapperClassName} place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src={previewImage} width={imgWidth} height={imgHeight} alt="Place image" />
        </a>
      </div>
      <div className={`${cardInfoClassName} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price.toString()}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteMark isFavorite={isFavorite} markType={FavoriteMarkTypes[Types.CARD]} />
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
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  cardType: PropTypes.shape({
    articleClassName: PropTypes.string,
    imgWrapperClassName: PropTypes.string,
    cardInfoClassName: PropTypes.string,
    hasPremiumMark: PropTypes.bool,
    imgWidth: PropTypes.string,
    imgHeight: PropTypes.string,
  }).isRequired,
};


export default Card;
