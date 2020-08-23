import { SET_ENTITIES } from '../actions/set-entities';

export default (state = null, action) => {
  switch(action.type) { 
    case SET_ENTITIES:
      return action.payload.entities;
    default:
      return state;
  }
}