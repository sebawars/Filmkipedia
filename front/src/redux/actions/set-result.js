export const SET_RESULT = 'SET_RESULT';

export const setResult = (result) => {
  return {
    type: 'SET_RESULT',
    payload: {
      result,
    },
  };
};
