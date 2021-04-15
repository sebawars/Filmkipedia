import { normalize } from 'normalizr';
import { filmListSchema } from './schemas';

export const normalizeFilms = (filmsToNormalize) => normalize(filmsToNormalize, filmListSchema);
