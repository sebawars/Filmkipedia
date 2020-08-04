import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@600&display=swap');

  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  h1{
    font-family: 'Roboto Slab', serif;
  }

  span{
    font-family: 'Roboto Slab', serif;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }

  body {
    background: #fefefe;
    height: 100vh;
    margin: 0 auto;
    overscroll-behavior: none;
    max-width: 50%;
    background-color: #f4f4f7;

    @media (max-width: 1280px){
      max-width: 60%;
      font-size: 14px;
    }

    @media (max-width: 1024px){
      max-width: 80%;
      font-size: 13px;
    }

    @media (max-width: 1024px){
      max-width: 95%;
      font-size: 12px;
    }

    button{
      height: 2em;
      width: 5em;
      border-radius: 0.3em;
      background-color: #1c3643;
      color: #90a4ae;
    }

    input{
      border: 1px solid #ccc;
      border-radius: 3px;
      margin-bottom: 8px;
      padding: 8px 4px;
      width: 100%;
      &[disabled] {
        opacity: .3;
      }
    }

  }


  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
  }
`

export const Main = styled.main`
    min-height: calc(100vh - 60px);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 4em;

    #mainRouter{
      width: inherit;
      text-align: center;
    }

`
