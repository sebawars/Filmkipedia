import { SET_RESULT } from '../actions/set-result';

export default (state = [], action) => {
  switch (action.type) {
    case SET_RESULT:
      return [...new Set([...state, ...action.payload.result])];
    default:
      return state;
  }
};
