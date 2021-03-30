import React from 'react';
import PropTypes from 'prop-types';

const ReviewField = ({review, onChange}) => {
  return (
    <textarea className="reviews__textarea form__textarea" id="review" name="review" value={review} onChange={onChange}
      placeholder="Tell how was your stay, what you like and what can be improved" data-testid="review"></textarea>
  );
};

ReviewField.propTypes = {
  review: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default ReviewField;
