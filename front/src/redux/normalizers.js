import { normalize, denormalize } from 'normalizr'
import { filmListSchema } from './schemas'

export const normalizeFilms = (filmsToNormalize) => normalize(filmsToNormalize, filmListSchema)
export const denormalizeFilms = (normalizedData) => denormalize(normalizedData.result, filmListSchema, normalizedData.entities)