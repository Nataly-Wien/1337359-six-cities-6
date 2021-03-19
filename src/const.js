export const NOT_AUTHORIZED_USERNAME = `Sign in`;
export const EMPTY_AVATAR_URL = `../img/avatar.svg`;
export const HOTEL_RATING_VALUES = [`perfect`, `good`, `not bad`, `badly`, `terribly`];
export const CITIES = [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`];
export const REVIEWS_AMOUNT = 10;

export const ReviewsLength = {
  MIN: 50,
  MAX: 300,
};

export const SORTS = [
  {
    type: `Popular`,
    rule: (a, b) => (a - b) * 0,
  },
  {
    type: `Price`,
    rule: (a, b) => a.price - b.price,
  },
  {
    type: `Price: high to low`,
    rule: (a, b) => b.price - a.price,
  },
  {
    type: `Top rated first`,
    rule: (a, b) => b.rating - a.rating,
  }
];

export const Routes = {
  HOME: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer/:id`,
  NOT_FOUND: `/404`,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const emptyUser = {
  id: -1,
  email: ``,
  password: ``,
  name: ``,
  avatarUrl: EMPTY_AVATAR_URL,
  isPro: false,
};

export const Url = {
  HOTELS: `/hotels`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  NEAR: `/nearby`,
  COMMENTS: `/comments`,
  FAVORITES: `/favorite`,
};

export const LeafletConst = {
  TITLE_LAYER: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  ATTRIBUTION: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
};

export const MAP_ICON = {
  iconUrl: `img/pin.svg`,
  iconSize: [27, 39],
};

export const MAP_ICON_ACTIVE = {
  iconUrl: `img/pin-active.svg`,
  iconSize: [27, 39],
};

export const Types = {
  MAIN_PAGE: `MAIN_PAGE`,
  NOT_MAIN_PAGE: `NOT_MAIN_PAGE`,
  FAVORITES_PAGE: `FAVORITES_PAGE`,
  ROOM_PAGE: `ROOM_PAGE`,
  CARD: `CARD`,
};

export const CardTypes = {
  MAIN_PAGE: {
    articleClassName: `cities__place-card`,
    imgWrapperClassName: `cities__image-wrapper`,
    cardInfoClassName: ``,
    hasPremiumMark: true,
    imgWidth: `260`,
    imgHeight: `200`,
  },
  FAVORITES_PAGE: {
    articleClassName: `favorites__card`,
    imgWrapperClassName: `favorites__image-wrapper`,
    cardInfoClassName: `favorites__card-info`,
    hasPremiumMark: false,
    imgWidth: `150`,
    imgHeight: `110`,
  },
  ROOM_PAGE: {
    articleClassName: `near-places__card`,
    imgWrapperClassName: `near-places__image-wrapper`,
    cardInfoClassName: ``,
    hasPremiumMark: false,
    imgWidth: `260`,
    imgHeight: `200`,
  },
};

export const OfferTypes = {
  MAIN_PAGE: {
    offerClassName: `cities__places-list places__list tabs__content`,
  },
  FAVORITES_PAGE: {
    offerClassName: `favorites__places`,
  },
  ROOM_PAGE: {
    offerClassName: `near-places__list places__list`,
  },
};

export const FavoriteMarkTypes = {
  CARD: {
    buttonClassTerm: `place-card`,
    imgWidth: `18`,
    imgHeight: `19`,
  },
  ROOM_PAGE: {
    buttonClassTerm: `property`,
    imgWidth: `31`,
    imgHeight: `33`,
  },
};

export const PremiumMarkTypes = {
  CARD: {
    markClassName: `place-card__mark`,
  },
  ROOM_PAGE: {
    markClassName: `property__mark`,
  },
};

export const HeaderTypes = {
  MAIN_PAGE: {
    logoClassName: ` header__logo-link--active`,
  },
  NOT_MAIN_PAGE: {
    logoClassName: ``,
  },
};
