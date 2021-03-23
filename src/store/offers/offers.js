import {ActionType} from '../action';
import {CITIES} from '../../const';

const initialState = {
  city: CITIES[0],
  sort: 0,
};

const offers = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };

    case ActionType.SET_SORT:
      return {
        ...state,
        sort: action.payload,
      };
  }

  return state;
};

export {offers};
