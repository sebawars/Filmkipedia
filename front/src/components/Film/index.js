import React, { Fragment } from 'react'
import { Article, Title, Imagen, Detalles, Anio, Reparto, SubTitulo } from './styles'

export const Film = ({ filmname, country, release, director, image, cast }) => {
  return (
    <Article >
      <Imagen src={image} />
      <Detalles>
        <div>
          <Title>{filmname} </Title>
          <Anio>({release})</Anio>
        </div>
        <SubTitulo>Origen: {country}</SubTitulo>
        {director && <SubTitulo>Director: {director.nombre} {director.apellido}</SubTitulo>}
      </Detalles>
      
      <Reparto>

        <SubTitulo>Reparto:</SubTitulo>

        <Fragment>
          { cast && cast.map(actor => <SubTitulo key={actor.id} >{actor.nombre} {actor.apellido}</SubTitulo>)}
        </Fragment>
            
      </Reparto>

    </Article>
  )
}
