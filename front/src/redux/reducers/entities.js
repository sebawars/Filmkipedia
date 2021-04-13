import { SET_ENTITIES } from '../actions/set-entities';
import { ADD_ENTITIES } from '../actions/add-entities';

export default (state = { films: {}, directors: {}, actors: {} }, { type, payload = { entities: {} } }) => {
  const { entities } = payload;
  switch (type) {
    case SET_ENTITIES: {
      return entities;
    }
    case ADD_ENTITIES: {
      const { directors = {}, actors = {}, films = {} } = entities;
      return {
        directors: { ...state.directors, ...directors },
        actors: { ...state.actors, ...actors },
        films: { ...state.films, ...films },
      };
    }
    default:
      return state;
  }
};
