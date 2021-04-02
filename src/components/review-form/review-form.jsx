import React, {Fragment, useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getCommentPostingStatus, getPostCommentErrorStatus} from '../../store/data/selectors';
import RatingList from '../rating-list/rating-list';
import ReviewField from '../review-field/review-field';
import withAuth from '../../hoc/with-auth/with-auth';
import {ReviewsLength} from '../../const';

const ReviewsForm = ({addReview, isCommentPosting, isPostCommentError}) => {
  const [rating, setRating] = useState(`0`);
  const [review, setReview] = useState(``);

  const onRatingChange = (evt) => setRating(evt.target.value);
  const onReviewChange = (evt) => setReview(evt.target.value);

  const isButtonDisabled = rating === `0` || review.length < ReviewsLength.MIN || review.length > ReviewsLength.MAX;

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    addReview(rating, review);
    setRating(`0`);
    setReview(``);
  };

  return (
    <Fragment>
      {isPostCommentError && <p className="reviews__text" style={{fontWeight: `bold`}}> The review cannot be sent</p>}
      <form className="reviews__form form" action="#" method="post" onSubmit={onFormSubmit}>
        <fieldset style={{border: `none`}} disabled={isCommentPosting} >
          <RatingList rating={rating} onChange={onRatingChange} />
          <ReviewField review={review} onChange={onReviewChange} />
          <div className="reviews__button-wrapper">
            <p className="reviews__help">
              To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
            </p>
            <button className="reviews__submit form__submit button" type="submit" disabled={isButtonDisabled ? `disabled` : ``} >Submit</button>
          </div>
        </fieldset>
      </form>
    </Fragment>
  );
};

ReviewsForm.propTypes = {
  addReview: PropTypes.func,
  isCommentPosting: PropTypes.bool.isRequired,
  isPostCommentError: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isCommentPosting: getCommentPostingStatus(state),
  isPostCommentError: getPostCommentErrorStatus(state),
});

export default connect(mapStateToProps, null)(withAuth(ReviewsForm));
