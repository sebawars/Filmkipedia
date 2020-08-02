import React, { Fragment } from 'react'
import { Article, Title, Imagen, Detalles, Anio, Reparto, SubTitulo } from './styles'

export const Film = ({ filmname, pais, estreno, director, img, reparto }) => {

  return (
    <Article >
      <Imagen src={img} />
      <Detalles>
        <Title>{filmname} </Title>
        <Anio>({estreno})</Anio>
        <hr />
        <SubTitulo>Origen: {pais}</SubTitulo>
        <SubTitulo>Director: {director.nombre} {director.apellido}</SubTitulo>
      </Detalles>
      <Reparto>

      <SubTitulo>Reparto:</SubTitulo>

      <Fragment>
        {reparto.map(actor => <SubTitulo key={actor.id} >{actor.nombre} {actor.apellido}</SubTitulo>)}
      </Fragment>
          
      </Reparto>
    </Article>
  )
}
