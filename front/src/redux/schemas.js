import { schema } from 'normalizr';

export const director = new schema.Entity('directors');

export const actor = new schema.Entity('actors');

export const film = new schema.Entity('films', {
  director: director,
  cast: [actor]
});

export const filmListSchema = new schema.Array(film);