import { createSelector } from 'reselect'
import { denormalizeFilms } from '../normalizers'

export const resultSelector = state => state.result
export const entitiesSelector = state => state.entities

export const filmByIdSelector = id => createSelector(
  entitiesSelector,
  (entities) => {
    if( !entities )
      return null
    
    const retrievedFilm = entities.films[String(id)]
    
    if(!retrievedFilm)
      return null

    const partialFilm = { ...retrievedFilm } 
    partialFilm.director = entities.directors[partialFilm.director] 
    partialFilm.cast = partialFilm.cast.map(actor => entities.actors[actor])
    return partialFilm
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
