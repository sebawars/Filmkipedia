import { SET_AUTH } from '../actions/set-auth';

export default (state = null, action) => {
  switch(action.type) { 
    case SET_AUTH:
      return action.payload.auth;
    default:
      return state;
  }
}