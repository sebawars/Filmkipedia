import styled from 'styled-components'


export const Article = styled.article`
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);
  border-radius: 7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const Title = styled.h1`
  text-decoration: strong;
  font-size: 1.5em;
  font-weight: 1000;
  display: inline;  
`

export const Anio = styled.span`
    font-size: 1.5em;
    font-weight: 100;
`

export const Imagen = styled.img`
  width: 100%;
`

export const TitleYear = styled.div`
  display: flex;
  align-items: center;
  margin: 0.25em 0;
  min-height: 4.5em;
`
