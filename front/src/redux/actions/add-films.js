export const ADD_FILMS = 'ADD_FILMS';

export const addFilms = (skip, keyword, order, auth) => {
  return {
    type: ADD_FILMS,
    payload: {
      skip,
      keyword,
      order,
      auth,
    },
  };
};
