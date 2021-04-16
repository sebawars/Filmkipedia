import { SET_ENTITIES } from '../actions/set-entities';

export default (state = { films: {}, directors: {}, actors: {} }, { type, payload = { entities: {} } }) => {
  const { entities } = payload;
  switch (type) {
    case SET_ENTITIES: {
      return entities;
    }
    default:
      return state;
  }
};
