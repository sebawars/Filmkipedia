import { createSelector } from 'reselect'
import { denormalizeFilms } from '../normalizers'

const resultSelector = state => state.result
const entitiesSelector = state => state.entities

export const filmByIdSelector = id => createSelector(
  entitiesSelector,
  (entities) => {
    if( !entities )
      return null
      
    const partialFilm = { ...entities.films[String(id)] } 
    partialFilm.director = entities.directors[partialFilm.director]
    partialFilm.cast = partialFilm.cast.map(actor => entities.actors[actor])
    return partialFilm
  }
)

export const filmIdListSelector = createSelector(
  entitiesSelector,
  (entities) => {
    if( !entities )
      return []

    return Object.keys(entities.films)
  }
)

export const filmListSelector = createSelector(
  entitiesSelector,
  resultSelector,
  (entities, result) => {
    if( !result || !entities )
      return []

    const denorm = denormalizeFilms({ entities: entities, result: result });
    return denorm
  }
)
