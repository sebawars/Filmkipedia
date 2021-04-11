import { SET_ENTITIES } from '../actions/set-entities';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ENTITIES:
      return { ...state, ...action.payload.entities };
    default:
      return state;
  }
};
