export const ADD_RESULT = 'ADD_RESULT';

export const addResult = (result) => {
  return {
    type: ADD_RESULT,
    payload: {
      result,
    },
  };
};
