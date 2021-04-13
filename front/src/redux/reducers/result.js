import { SET_RESULT } from '../actions/set-result';
import { ADD_RESULT } from '../actions/add-result';

export default (state = [], { type, payload = { result: [] } }) => {
  const { result } = payload;
  switch (type) {
    case SET_RESULT: {
      {
        return result;
      }
    }
    case ADD_RESULT: {
      return Array.from(new Set([...state, ...result]));
    }
    default:
      return state;
  }
};
