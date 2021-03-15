import React, {useState} from 'react';
import PropTypes from 'prop-types';
import RatingList from '../rating-list/rating-list';
import ReviewField from '../review-field/review-field';
import withAuth from '../../hoc/with-auth/with-auth';

const ReviewsForm = ({addReview}) => {
  const [rating, setRating] = useState(`0`);
  const [review, setReview] = useState(``);

  const onRatingChange = (evt) => setRating(evt.target.value);
  const onReviewChange = (evt) => setReview(evt.target.value);

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    addReview(rating, review);
    setRating(`0`);
    setReview(``);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <RatingList rating={rating} onChange={onRatingChange} />
      <ReviewField review={review} onChange={onReviewChange} />
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

export default withAuth(ReviewsForm);
