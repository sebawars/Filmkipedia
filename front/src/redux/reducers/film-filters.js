import { SET_FILM_ORDER } from '../actions/set-film-order';
import { SET_FILM_SEARCH } from '../actions/set-film-search';

export default (state = { order: '', keyword: '' }, action) => {
  switch (action.type) {
    case SET_FILM_ORDER: {
      return { ...state, order: action.payload.order };
    }
    case SET_FILM_SEARCH:
      return { ...state, keyword: action.payload.keyword };
    default:
      return state;
  }
};
