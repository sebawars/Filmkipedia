import { SET_FETCH_ERROR } from '../actions/set-fetch-error';

export default (state = null, error) => {
  switch(action.type) { 
    case SET_FETCH_ERROR:
      return action.payload.error;
    default:
      return state;
  }
}