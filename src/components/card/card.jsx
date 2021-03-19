import React from 'react';
import {connect} from 'react-redux';
import browserHistory from '../../browser-history';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../types-validation/hotel-types-validation';
import {toUpperCaseFirst, ratingStyle} from '../../common';
import PremiumMark from '../premium-mark/premium-mark';
import FavoriteMark from '../favorite-mark/favorite-mark';
import {CardTypes, Types} from '../../const';
import {ActionCreator} from '../../store/action';

const Card = (props) => {
  const {page, hotel, onCardHover = () => { }, onCardLeave = () => { }, beginDataLoading} = props;
  const {isPremium, previewImage, price, isFavorite, rating, title, type, id} = hotel;
  const {articleClassName, imgWrapperClassName, cardInfoClassName, hasPremiumMark, imgWidth, imgHeight} = CardTypes[page];

  const handleCardClick = (evt) => {
    evt.preventDefault();
    beginDataLoading();
    browserHistory.push(`/offer/${id}`);
  };

  return (
    <article className={`${articleClassName} place-card`}
      onMouseEnter={() => onCardHover(id)} onMouseLeave={onCardLeave}>
      {isPremium && hasPremiumMark && <PremiumMark type={Types.CARD} />}
      <div className={`${imgWrapperClassName} place-card__image-wrapper`} onClick={handleCardClick}>
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
          <FavoriteMark isFavorite={isFavorite} type={Types.CARD} id={id} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={ratingStyle(rating)}></span>
          </div>
        </div>
        <h2 className="place-card__name" onClick={handleCardClick}>
          <a href="#">{title}</a>
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
  beginDataLoading: PropTypes.func.isRequired,
  setFavorite: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  beginDataLoading: () => {
    dispatch(ActionCreator.resetCurrentOffer());
    dispatch(ActionCreator.requestCurrentHotel());
    dispatch(ActionCreator.requestComments());
    dispatch(ActionCreator.requestNearHotels());
  },
});

export default connect(null, mapDispatchToProps)(Card);
