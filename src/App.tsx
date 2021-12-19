import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { Routes } from './routes';
import { MainContainer } from './styles/App.styles';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <MainContainer>
          <Routes />
        </MainContainer>
      </BrowserRouter>
    </>
  );
}

export default App;
