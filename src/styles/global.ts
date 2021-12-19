import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    min-height: 100vh;
  }

  button {
    cursor: pointer;
  }
`;
