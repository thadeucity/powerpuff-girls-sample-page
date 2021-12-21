import React from 'react';
import { useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { IState } from '../store';
import { IThemeState } from '../store/modules/theme/themeDTO';

const DefaultStyles = createGlobalStyle<{ powerTheme: IThemeState }>`
:root {
  --clr-primary: ${(props) => props.powerTheme.primaryColor};
  --clr-secondary: ${(props) => props.powerTheme.secondaryColor};
  --clr-text: ${(props) => props.powerTheme.textColor};
}

*, ::after, ::before {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  text-decoration: none;
  border: 0;
}

body {
  background: var(--clr-secondary);
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

.hilight__button {
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75em 1.5em;
  background: var(--clr-primary);
  border-radius: 0.75rem;

  transition: transform 200ms ease-in-out;

  :hover {
    transform: scale(1.05);
  }
}

@media (max-width: 768px) {
  .hilight__button {
    font-size: 0.9325rem;
  }
}

@media (max-width: 590px) {
  .hilight__button {
    font-size: 0.875rem;
  }
}
`;

export const GlobalStyle = () => {
  const theme = useSelector<IState, IThemeState>((state) => state?.theme);
  return <DefaultStyles powerTheme={theme} />;
};
