export const REVIEWS_AMOUNT = 10;
export const NEAR_PLACES_AMOUNT = 3;
export const NOT_AUTHORIZED_USERNAME = `Sign in`;
export const HOTEL_RATING_VALUES = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

export const Routes = {
  HOME: `/`,
  LOGIN: `/login`,
  FAVORITES: `/favorites`,
  ROOM: `/offer/:id`,
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
