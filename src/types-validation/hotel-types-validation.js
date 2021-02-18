import PropTypes from 'prop-types';

const hotelTypesValidation = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }), // .isRequired ?
  city: {
    name: PropTypes.string.isRequired,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
    }), // .isRequired ?
  },
  previewImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
}).isRequired;


const hostTypesValidation = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  isPro: PropTypes.bool,
  avatarUrl: PropTypes.string,
}).isRequired;

export {hotelTypesValidation, hostTypesValidation};
