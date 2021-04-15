import { createSelector } from 'reselect';
export const entitiesSelector = (state) => state.entities;

export const filmByIdSelector = (id) =>
  createSelector(entitiesSelector, (entities) => {
    if (!entities) return null;

    const retrievedFilm = entities.films[String(id)];

    if (!retrievedFilm) return null;

    const partialFilm = { ...retrievedFilm };
    partialFilm.director = entities.directors[partialFilm.director];
    partialFilm.cast = partialFilm.cast.map((actor) => entities.actors[actor]);
    return partialFilm;
  });
