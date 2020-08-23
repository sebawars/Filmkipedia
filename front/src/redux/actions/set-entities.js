export const SET_ENTITIES = 'SET_ENTITIES'

export const setEntities = entities => {
  return {
    type: 'SET_ENTITIES',
    payload: {
      entities
    }
  };
}


