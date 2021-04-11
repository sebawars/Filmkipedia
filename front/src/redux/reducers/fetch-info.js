import { SET_FETCH_INFO } from '../actions/set-fetch-info';

const fetchData = { fetchError: null, fetching: false };

export default (state = { films: fetchData, auth: fetchData }, action) => {
  switch (action.type) {
    case SET_FETCH_INFO:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
