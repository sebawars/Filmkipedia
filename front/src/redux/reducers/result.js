import { SET_RESULT } from '../actions/set-result';

export default (state = null, action) => {
  switch(action.type) { 
    case SET_RESULT:
      return action.payload.result;
    default:
      return state;
  }
}