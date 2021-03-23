import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {hotelTypesValidation} from '../../types-validation/hotel-types-validation';
import {reviewTypesValidation} from '../../types-validation/review-types-validation';
import {getCurrentHotel} from '../../store/data/selectors';
import ImageList from '../image-list/image-list';
import PremiumMark from '../premium-mark/premium-mark';
import FavoriteMark from '../favorite-mark/favorite-mark';
import RoomInside from '../room-inside/room-inside';
import Host from '../host/host';
import Map from '../map/map';
import Reviews from '../reviews/reviews';
import ReviewsForm from '../review-form/review-form';
import OffersList from '../offers-list/offers-list';
import {toUpperCaseFirst, ratingStyle, getPoints, getImages} from '../../common';
import {Types} from '../../const';

const Room = ({hotel, nearPlacesHotels, reviews, addReview}) => {
  const {id, city, title, location, isPremium, previewImage, images, price, isFavorite, rating, type, bedrooms, maxAdults, goods, host, description} = hotel;

  if (Object.keys(hotel).length === 0) {
    return (
      <div></div>
    );
  }

  return (
    <Fragment>
      <section className="property">
        <ImageList pictures={getImages(images, previewImage)} />
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && <PremiumMark type={Types.ROOM_PAGE} />}
            <div className="property__name-wrapper">
              <h1 className="property__name">{title}</h1>
              <FavoriteMark isFavorite={isFavorite} type={Types.ROOM_PAGE} id={id} key={id} />
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={ratingStyle(rating)}></span>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{rating.toString()}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">{toUpperCaseFirst(type)}</li>
              <li className="property__feature property__feature--bedrooms">{`${bedrooms} Bedroom${bedrooms !== 1 ? `s` : ``}`}
              </li>
              <li className="property__feature property__feature--adults">{`Max ${maxAdults} adult${maxAdults !== 1 ? `s` : ``}`}
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{price.toString()}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <RoomInside goods={goods} />
            <Host host={host} description={description} />
            <section className="property__reviews reviews">
              <Reviews reviews={reviews} />
              <ReviewsForm addReview={addReview} />
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map city={city.location} points={getPoints(nearPlacesHotels, {id, location, title})} activeMarker={id} />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">{nearPlacesHotels.length > 0 && `Other places in the neighbourhood`}</h2>
          <OffersList hotels={nearPlacesHotels} page={Types.ROOM_PAGE} />
        </section>
      </div>
    </Fragment>
  );
};

Room.propTypes = {
  hotel: hotelTypesValidation,
  nearPlacesHotels: PropTypes.arrayOf(hotelTypesValidation),
  reviews: PropTypes.arrayOf(reviewTypesValidation),
  addReview: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  hotel: getCurrentHotel(state),
});

export default connect(mapStateToProps, null)(Room);
