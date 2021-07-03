import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    width: 100%;
  }
  ${normalize}
  html,
  body {
    display: flex;
    min-height: 100vh;
    
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family:  ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.colors.text};
    background-color: ${({ theme }) => theme.colors.background};
    text-decoration: none;
  }
  /* Full height layout */

`

export default GlobalStyle
/* html, body {
    display: flex;
    min-height: 100vh;
    width: 100%;
  } */
