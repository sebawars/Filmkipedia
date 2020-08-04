import React from 'react'
import { Article, Title, Imagen, Anio, TitleYear } from './styles'
import { Link } from '@reach/router'

export const ListFilm = ( film = { filmname, pais, estreno, director, img, reparto } ) => {

  console.log(JSON.stringify(film));

  return (
    <Article >
      <Link to={ `/film/${film.id}` } state={{ ...film }}  >

        <Imagen src={film.img} />

        <TitleYear>
          <Title>{film.filmname}</Title><Anio>({film.estreno})</Anio>
        </TitleYear>

      </Link>
    </Article>
  )
}
