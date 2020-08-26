import { SET_FETCH_INFO } from '../actions/set-fetch-info';

export default (state = {films:{fetchError: null, fetching: true}}, action) => {
  switch(action.type) { 
    case SET_FETCH_INFO:
      const newState = { ...state, ...action.payload }
      return { ...state, ...action.payload };
    default:
      return state;
  }
}