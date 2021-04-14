export const SET_FILM_SEARCH = 'SET_FILM_SEARCH';

export const setFilmSearch = (search) => {
  return {
    type: SET_FILM_SEARCH,
    payload: {
      search,
    },
  };
};
