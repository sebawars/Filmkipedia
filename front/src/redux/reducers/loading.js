import { SET_LOADING } from '../actions/set-loading';

export default (state = true, action) => {
  switch(action.type) { 
    case SET_LOADING:
      return action.payload.loading;
    default:
      return state;
  }
}