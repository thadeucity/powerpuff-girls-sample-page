import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { Header } from './components/Header';
import { PortalsContainer } from './components/Portal/PortalsContainer';

import { Routes } from './routes';
import { store } from './store';

import { MainContainer } from './styles/App.styles';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <ReduxProvider store={store}>
      <GlobalStyle />
      <PortalsContainer>
        <BrowserRouter>
          <Header />
          <MainContainer>
            <Routes />
          </MainContainer>
        </BrowserRouter>
      </PortalsContainer>
    </ReduxProvider>
  );
}

export default App;
