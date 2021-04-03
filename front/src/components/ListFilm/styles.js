import styled from 'styled-components'


export const Article = styled.article`

  @media (max-width: 1368px){
    margin-left: 1em; 
    margin-right: 1em;
  }

  a{
      text-decoration: inherit;
      color: inherit;
  }

  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.23);
  border-radius: 7px;
  display: block;
  overflow: hidden;
  margin-bottom: 1em;
`

export const Title = styled.h1`
  text-decoration: strong;
  font-size: 1.5em;
  font-weight: 1000;
  display: inline;
  max-width: 270px;
`

export const Anio = styled.span`
    font-size: 1.5em;
    font-weight: 100;
`

export const Imagen = styled.img`
  max-width: 300px;
`

export const TitleYear = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0.25em 0;
  min-height: 4.5em;
  justify-content: center;
`
