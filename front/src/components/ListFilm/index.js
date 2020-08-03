import React from 'react'
import { Article, Title, Imagen, Anio, TitleYear } from './styles'

export const ListFilm = ({ filmname, estreno, img}) => {

  return (
    <Article >

      <Imagen src={img} />

      <TitleYear>
        <Title>{filmname}</Title><Anio>({estreno})</Anio>
      </TitleYear>

    </Article>
  )
}
