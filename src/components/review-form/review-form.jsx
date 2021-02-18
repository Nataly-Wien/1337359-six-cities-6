import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {HOTEL_RATING_VALUES} from '../../const';

const ReviewsForm = ({addReview}) => {
  const [rating, setRating] = useState(`0`);
  const [review, setReview] = useState(``);


  const RadioButton = ({ratingName, value, onChange}) => {
    return (
      <>
        <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`}
          type="radio" onChange={onChange} checked={value === rating} />
        <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={`${ratingName}`}>
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </>
    );
  };

  RadioButton.propTypes = {
    ratingName: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => {
      evt.preventDefault();
      addReview(rating, review);
    }}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {HOTEL_RATING_VALUES.map((item, i) => <RadioButton ratingName={item} value={(HOTEL_RATING_VALUES.length - i).toString()}
          key={i} onChange={(evt) => setRating(evt.target.value)} />)}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" value={review}
        onChange={(evt) => setReview(evt.target.value)} placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled="" >Submit</button>
      </div>
    </form>
  );
};

ReviewsForm.propTypes = {
  addReview: PropTypes.func,
};

export default ReviewsForm;
