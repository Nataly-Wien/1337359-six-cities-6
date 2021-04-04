import React from 'react';
import PropTypes from 'prop-types';
import {HOTEL_RATING_VALUES} from '../../const';

const RatingList = ({onChange, rating}) => {
  return (
    <div className="reviews__rating-form form__rating">
      {HOTEL_RATING_VALUES.map((item, i) => {
        const value = HOTEL_RATING_VALUES.length - i;

        return <React.Fragment key={item}>
          <input className="form__rating-input visually-hidden" name="rating" value={(value).toString()} id={`${value}-stars`}
            type="radio" onChange={onChange} data-testid={`radio-${value}`} checked={(value).toString() === rating} />
          <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={`${item}`}>
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </React.Fragment>;
      })}
    </div>
  );
};

RatingList.propTypes = {
  rating: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default RatingList;
