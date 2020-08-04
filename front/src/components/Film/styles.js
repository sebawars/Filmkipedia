import styled from 'styled-components'

export const Article = styled.article`
  width: 90%;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);
  border-radius: 5px;
  display: flex;
  padding: 1rem;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media (max-width: 600px){
      margin-top: 3em;
  }
`

export const Title = styled.h1`
  text-decoration: strong;
  font-size: 2em;
  font-weight: 1000;
  display: inline;
`

export const Anio = styled.span`
  font-size: 1.8em;
  font-weight: 200;
`

export const Imagen = styled.img`
  max-height: 20em;
  border-radius: 1em;
`
export const Detalles = styled.div`
  display: flex;
  text-align: center;
  font-weight: 400;
  flex-direction: column;
  height: 20em;
  justify-content: space-evenly;

  @media (max-width: 1504px){
    justify-content: space-evenly;
    height: 20em;
  }

  @media (max-width: 600px){
    justify-content: space-evenly;
    height: 15em;
  }

`

export const SubTitulo = styled.h2`
  font-weight: 400;
`

export const Reparto = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-around;
    height: 100%;
    padding: 1em 0;
    width: 100%;
`

export const FilmActions = styled.div`
    display: block;
    text-align: center;
    margin: auto 0;
`

