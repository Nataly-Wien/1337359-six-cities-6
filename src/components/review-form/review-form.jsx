import React, {useState} from 'react';
import PropTypes from 'prop-types';
import RatingList from '../rating-list/rating-list';
import ReviewField from '../review-field/review-field';

const ReviewsForm = ({addReview}) => {
  const [rating, setRating] = useState(`0`);
  const [review, setReview] = useState(``);

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    addReview(rating, review);
    setRating(`0`);
    setReview(``);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={(evt) => onFormSubmit(evt)}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingList rating={rating} onChange={(evt) => setRating(evt.target.value)} />
      <ReviewField review={review} onChange={(evt) => setReview(evt.target.value)} />
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
