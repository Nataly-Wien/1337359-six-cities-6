import React from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
import {reviewTypesValidation} from '../../types-validation/';
import {REVIEWS_AMOUNT} from '../../const';

const Reviews = ({reviews}) => {
  const reviewsList = reviews.slice(0, REVIEWS_AMOUNT).sort((a, b) => dayjs(b.date) - dayjs(a.date));

  return (<ul className="reviews__list">
    {reviewsList.map((item) => {
      const {id, user, rating, comment, date} = item;
      const {name, avatarUrl} = user;

      return <li className="reviews__item" key={id}>
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar" />
          </div>
          <span className="reviews__user-name">{name}</span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `${rating * 20}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">{comment}</p>
          <time className="reviews__time" dateTime={date}>{dayjs(date).format(`MMMM YYYY`)}</time>
        </div>
      </li>;
    })}
  </ul>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewTypesValidation),
};

export default Reviews;
