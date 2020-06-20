import styled, { createGlobalStyle } from 'styled-components';

/**
 * Extilização global da aplicação.
 */
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  html, body, #root {
    width: 100%;
    height: 100vh;
  }

  :root {
    --primary: #36393f;
    --secondary: #2f3136;
    --tertiary: rgb(32,34,37);
    --quaternary: #292b2f;
    --quinary: #393d42;   
    --white: #fff;
    --gray: #8a8c90;
    --notification: #f84a4b;
  }
`;

/**
 * Container para o App.js
 */
export const Contaner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--tertiary);
`;

export default GlobalStyle;