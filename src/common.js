export const toUpperCaseFirst = (word) => word[0].toUpperCase() + word.slice(1);

export const ratingStyle = (rating) => {
  return {width: `${Math.round(rating) * 20}%`};
};

export const getPoints = (hotels = []) => hotels.map((item) => ({id: item.id, location: item.location, title: item.title}));

export const adaptToClient = (hotel) => {
  const clientHotel = Object.assign({}, hotel, {
    isFavorite: hotel.is_favorite,
    isPremium: hotel.is_premium,
    maxAdults: hotel.max_adults,
    previewImage: hotel.preview_image,
    host: Object.assign({}, hotel.host, {
      isPro: hotel.host.is_pro,
      avatarUrl: hotel.host.avatar_url,
    }),
    city: Object.assign({}, hotel.city, {
      location: Object.assign({}, hotel.city.location),
    }),
    location: Object.assign({}, hotel.location),
    goods: hotel.goods.slice(),
    images: hotel.images.slice(),
  });

  delete clientHotel.is_favorite;
  delete clientHotel.is_premium;
  delete clientHotel.max_adults;
  delete clientHotel.preview_image;
  delete clientHotel.host.is_pro;
  delete clientHotel.host.avatar_url;

  return clientHotel;
};
