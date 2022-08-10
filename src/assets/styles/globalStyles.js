import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  ::selection {
    color: #fff;
    background-color: #7f5af0;
  }
  ::-webkit-scrollbar-track {
    background-color: #2d2d2d;
  }
  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #7f5af0;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    outline: none;
  }

  body {
    position: relative;
    min-height: 100vh;
    background-color: #161722;
    overflow-x: hidden;
  }

  * span,
  * button,
  * h1,
  * i {
    -webkit-touch-callout: none;
    -webkit-user-select: none;    
    -khtml-user-select: none;   
    -moz-user-select: none;  
    -ms-user-select: none;  
    user-select: none;
  }
`