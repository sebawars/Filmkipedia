export const SET_FETCH_INFO = 'SET_FETCH_INFO';

export const setFetchInfo = (fetchInfo) => {
  return {
    type: 'SET_FETCH_INFO',
    payload: {
      ...fetchInfo,
    },
  };
};
