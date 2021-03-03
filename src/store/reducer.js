import {ActionType} from './action';
import {CITIES} from '../const';
import hotels from '../mocks/hotels';

const initialState = {
  city: CITIES[0],
  hotels,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
      };
  }

  return state;
};

export {reducer};