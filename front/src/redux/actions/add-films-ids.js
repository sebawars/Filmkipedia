export const ADD_FILMS_IDS = 'ADD_FILMS_IDS';

export const addFilmsIds = (ids, totalCount) => {
  return {
    type: ADD_FILMS_IDS,
    payload: {
      ids,
      totalCount,
    },
  };
};
