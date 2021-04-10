export const FETCH_FILMS = 'FETCH_FILMS';

export const fetchFilms = (take, skip, keyword, order, auth) => {
  return {
    type: 'FETCH_FILMS',
    payload: {
      take,
      skip,
      keyword,
      order,
      auth,
    },
  };
};
