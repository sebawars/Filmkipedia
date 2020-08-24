export const FETCH_FILMS = 'FETCH_FILMS'

export const fetchFilms = (id, order, auth) => {
  return {
    type: 'FETCH_FILMS',
    payload: {
      id, 
      order, 
      auth
    }
  };
}


