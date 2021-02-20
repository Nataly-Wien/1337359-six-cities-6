import React from 'react';
import PropTypes from 'prop-types';
import {hotelTypesValidation, reviewTypesValidation} from '../../../types-validation/';
import Header from '../../header/header';
import ImageList from '../../image-list/image-list';
import PremiumMark from '../../premium-mark/premium-mark';
import FavoriteMark from '../../favorite-mark/favorite-mark';
import RoomInside from '../../room-inside/room-inside';
import Host from '../../host/host';
import Reviews from '../../reviews/reviews';
import ReviewsForm from '../../review-form/review-form';
import OffersList from '../../offers-list/offers-list';
import {toUpperCaseFirst} from '../../../common';
import {Types, NEAR_PLACES_AMOUNT} from '../../../const';

const RoomPage = ({hotel, hotels, reviews}) => {
  const {isPremium, previewImage, images, price, isFavorite, rating, title, type, bedrooms, maxAdults, goods, host, description} = hotel;

  const pictures = images.slice(0, 5);
  pictures.unshift(previewImage);

  const nearPlacesHotels = hotels.filter((item) => item.id !== hotel.id).slice(0, NEAR_PLACES_AMOUNT);

  const addReviewHandler = (hotelRating, review) => {
    console.log(hotelRating, review);
  };

  return (
    <div className="page">
      <Header page={Types.NOT_MAIN_PAGE} />
      <main className="page__main page__main--property">
        <section className="property">
          <ImageList pictures={pictures} />
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <PremiumMark type={Types.ROOM_PAGE} />}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <FavoriteMark isFavorite={isFavorite} type={Types.ROOM_PAGE} />
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating * 20}%`}}></span>
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
                <ReviewsForm addReview={addReviewHandler} />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersList hotels={nearPlacesHotels} page={Types.ROOM_PAGE} />
          </section>
        </div>
      </main>
    </div>
  );
};

RoomPage.propTypes = {
  hotel: hotelTypesValidation,
  hotels: PropTypes.arrayOf(hotelTypesValidation),
  reviews: PropTypes.arrayOf(reviewTypesValidation),
};

export default RoomPage;
