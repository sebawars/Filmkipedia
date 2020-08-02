import styled from 'styled-components'


export const Article = styled.article`
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  margin: 1em 0;
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
    display: block;
    text-align: center;
    font-weight: 400;
`

export const SubTitulo = styled.h2`
    font-weight: 400;
    margin-top: 1em;
`

export const Reparto = styled.div`
    display: block;
    text-align: center;
    flex-wrap: wrap;
`