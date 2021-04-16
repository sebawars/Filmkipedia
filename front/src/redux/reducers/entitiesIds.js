import { SET_FILMS_IDS } from '../actions/set-films-ids';

export default (state = { films: { ids: [], totalCount: 0 } }, { type, payload = { ids: [], totalCount: 0 } }) => {
  const { ids, totalCount } = payload;
  switch (type) {
    case SET_FILMS_IDS:
      return { ...state, films: { ids: ids, totalCount } };
    default:
      return state;
  }
};
