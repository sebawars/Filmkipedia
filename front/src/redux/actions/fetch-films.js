export const FETCH_FILMS = 'FETCH_FILMS';

export const fetchFilms = (skip, keyword, order, auth) => {
  return {
    type: 'FETCH_FILMS',
    payload: {
      skip,
      keyword,
      order,
      auth,
    },
  };
};
