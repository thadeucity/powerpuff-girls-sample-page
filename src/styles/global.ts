import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --clr-primary: #f471b4;
    --clr-secondary: #79d4d5;
  }

  *, ::after, ::before {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, input, button {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    background: var(--clr-secondary);
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

  img {
    position: relative;
  }

  img[alt]:after {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #F0F0F0;
    content: '';
  }
`;
