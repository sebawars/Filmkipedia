import { createSelector } from 'reselect'
import { denormalizeFilms } from '../normalizers'

const resultSelector = state => state.result
const entitiesSelector = state => state.entities

export const filmByIdSelector = id => createSelector(
  entitiesSelector,
  resultSelector,
  (entities, result) => {
    if( !result || !entities )
      return null
    // console.log('entities: '+ JSON.stringify(entities))
    // console.log('entities.films: '+ JSON.stringify(entities.films))
    // console.log('id: '+ JSON.stringify(id))
    // console.log('entities.films[id] : '+ JSON.stringify(entities.films[String(id)]))
    const partialFilm = { ...entities.films[String(id)] } 
    // console.log('partialFilm: '+ JSON.stringify(partialFilm))
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
