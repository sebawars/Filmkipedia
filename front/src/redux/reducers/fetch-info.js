import { SET_FETCH_INFO } from '../actions/set-fetch-info';

const initialFetchInfo = { fetchError: null, fetching: false };

export default (state = { films: initialFetchInfo, auth: initialFetchInfo }, action) => {
  switch (action.type) {
    case SET_FETCH_INFO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
