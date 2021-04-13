export const SET_FILMS = 'SET_FILMS';

export const setFilms = (skip, keyword, order, auth) => {
  return {
    type: SET_FILMS,
    payload: {
      skip,
      keyword,
      order,
      auth,
    },
  };
};
