export const SET_FILMS_IDS = 'SET_FILMS_IDS';

export const setFilmsIds = (ids, totalCount) => {
  return {
    type: SET_FILMS_IDS,
    payload: {
      ids,
      totalCount,
    },
  };
};
