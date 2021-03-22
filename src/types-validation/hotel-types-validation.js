import PropTypes from 'prop-types';

const hostTypesValidation = PropTypes.shape({
  id: PropTypes.number,
  name: PropTypes.string,
  isPro: PropTypes.bool,
  avatarUrl: PropTypes.string,
});

const hotelTypesValidation = PropTypes.shape({
  id: PropTypes.number,
  title: PropTypes.string,
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    zoom: PropTypes.number,
  }),
  city: {
    name: PropTypes.string,
    location: PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      zoom: PropTypes.number,
    }),
  },
  host: hostTypesValidation,
  previewImage: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  description: PropTypes.string,
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  rating: PropTypes.number,
  type: PropTypes.string,
  bedrooms: PropTypes.number,
  maxAdults: PropTypes.number,
  price: PropTypes.number,
  goods: PropTypes.arrayOf(PropTypes.string),
});

export {hotelTypesValidation, hostTypesValidation};
