import styled, { createGlobalStyle } from 'styled-components';

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
    margin: 0 auto;
    overscroll-behavior: none;
    max-width: 70%;
    background-color: #f4f4f7;
    display: flex;
    flex: 1;
    flex-direction: column;

    @media (max-width: 1385px){
      max-width: 85%;
      font-size: 14px;
    }

    @media (max-width: 1024px){
      font-size: 13px;
    }

    @media (max-width: 1024px){
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
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

export const Main = styled.main`
  padding-top: 2em;
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: initial;
`;
