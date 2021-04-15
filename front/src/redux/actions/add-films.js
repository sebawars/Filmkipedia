export const ADD_FILMS = 'ADD_FILMS';

export const addFilms = (skip, search, order, auth) => {
  return {
    type: ADD_FILMS,
    payload: {
      skip,
      search,
      order,
      auth,
    },
  };
};
