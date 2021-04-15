import { SET_FILMS_IDS } from '../actions/set-films-ids';
import { ADD_FILMS_IDS } from '../actions/add-films-ids';

export default (state = { films: { ids: [], totalCount: 0 } }, { type, payload = { ids: [], totalCount: 0 } }) => {
  const { ids, totalCount } = payload;
  switch (type) {
    case SET_FILMS_IDS:
      return { ...state, films: { ids: ids, totalCount } };
    case ADD_FILMS_IDS:
      return { ...state, films: { ids: Array.from(new Set([...state.films.ids, ...ids])), totalCount } };
    default:
      return state;
  }
};
