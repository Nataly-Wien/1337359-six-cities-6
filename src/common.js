import {EMPTY_AVATAR_URL} from './const';

export const toUpperCaseFirst = (word) => word[0].toUpperCase() + word.slice(1);

export const ratingStyle = (rating) => {
  return {width: `${Math.round(rating) * 20}%`};
};

export const getPoints = (hotels = []) => hotels.map((item) => ({id: item.id, location: item.location, title: item.title}));

export const adaptUserToClient = (person) => {
  const clientPerson = {
    ...person,
    isPro: person.is_pro,
    avatarUrl: person.avatar_url ? person.avatar_url : EMPTY_AVATAR_URL,
  };

  delete clientPerson.is_pro;
  delete clientPerson.avatar_url;

  return clientPerson;
};

export const adaptCommentToClient = (comment) => {
  const clientComment = {
    ...comment,
    user: adaptUserToClient(comment.user),
  };

  delete clientComment.is_pro;
  delete clientComment.avatar_url;

  return clientComment;
};

export const adaptHotelToClient = (hotel) => {
  const clientHotel = {
    ...hotel,
    isFavorite: hotel.is_favorite,
    isPremium: hotel.is_premium,
    maxAdults: hotel.max_adults,
    previewImage: hotel.preview_image,
    host: adaptUserToClient(hotel.host),
    city: {
      ...hotel.city,
      location: {...hotel.city.location}
    },
    location: {...hotel.location},
    goods: hotel.goods.slice(),
    images: hotel.images.slice(),
  };

  delete clientHotel.is_favorite;
  delete clientHotel.is_premium;
  delete clientHotel.max_adults;
  delete clientHotel.preview_image;

  return clientHotel;
};
