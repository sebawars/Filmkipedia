import { createGlobalStyle } from 'styled-components'

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
    max-width: 880px;
    overscroll-behavior: none;
    width: 100%; 
    background-color: #f4f4f7;
  }

  #app {
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    overflow-x: hidden;
    min-height: 100vh;
  }
`