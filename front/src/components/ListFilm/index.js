import React from 'react'
import { Link } from '@reach/router'
import { Article, Title, Imagen, Anio, TitleYear } from './styles'
import { filmByIdSelector } from '../../redux/selectors/filmSelector'
import { useSelector } from 'react-redux';

export const ListFilm = ( { id } ) => {

  const state = useSelector((state) => state);
  const film = filmByIdSelector(id)(state)

  return (
    <Article >
      <Link to={ `/film/${film.id}` } state={film}  >

        <Imagen src={film.image} />

        <TitleYear>
          <Title>{film.filmname}</Title><Anio>({film.release})</Anio>
        </TitleYear>

      </Link>
    </Article>
  )
}
