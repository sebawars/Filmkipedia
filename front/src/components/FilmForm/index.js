import React, { Fragment } from 'react'
import { FilmEdit, ButtonContainer, InputContainer } from './styles'

export const FilmForm = ( { filmname, pais, estreno, director, img, reparto, onChange } ) => {


  const handleSubmit = (event) => {

    event.preventDefault()

  }

  return (
    <Fragment>
      <FilmEdit onSubmit={handleSubmit}>
        <InputContainer>
          <div>
              <h1>Título</h1>
              <input value={filmname} onChange={onChange} name='filmname'/>
          </div>
          <div>
              <h1>Estreno</h1>
              <input value={estreno} onChange={onChange} name='estreno'/>
          </div>
          <div>
              <h1>Origen</h1>
              <input value={pais} onChange={onChange} name='pais'/>
          </div>
          { /*reparto.map( actor => <input value={actor.nombre} onChange={onChange} name=''/> ) */}
        </InputContainer>

        <ButtonContainer>
          <button>Guardar</button>
          <button>Eliminar</button>
        </ButtonContainer>
      </FilmEdit>
    </Fragment>
  )
}
