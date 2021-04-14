export const SET_FILM_ORDER = 'SET_FILM_ORDER';

export const setFilmOrder = (order) => {
  return {
    type: SET_FILM_ORDER,
    payload: {
      order,
    },
  };
};
