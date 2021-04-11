import React, { Fragment } from 'react';
import { FilmEdit, ButtonContainer, InputContainer } from './styles';

export const FilmForm = ({ filmname, country, release, onChange }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Fragment>
      <FilmEdit onSubmit={handleSubmit}>
        <InputContainer>
          <div>
            <h1>Título</h1>
            <input value={filmname} onChange={onChange} name='filmname' />
          </div>
          <div>
            <h1>Estreno</h1>
            <input value={release} onChange={onChange} name='release' />
          </div>
          <div>
            <h1>Origen</h1>
            <input value={country} onChange={onChange} name='country' />
          </div>
          {/*reparto.map( actor => <input value={actor.nombre} onChange={onChange} name=''/> ) */}
        </InputContainer>

        <ButtonContainer>
          <button type='submit' onClick={null}>
            Guardar
          </button>
          <button>Eliminar</button>
        </ButtonContainer>
      </FilmEdit>
    </Fragment>
  );
};
