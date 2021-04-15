export const SET_FILMS = 'SET_FILMS';

export const setFilms = (skip, search, order, auth) => {
  return {
    type: SET_FILMS,
    payload: {
      skip,
      search,
      order,
      auth,
    },
  };
};
