import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';

import { Header } from './components/Header';
import { PortalsContainer } from './components/Portal/PortalsContainer';

import { Routes } from './routes';
import { store } from './store';
import { queryClient } from './services/queryClient';

import { MainContainer } from './styles/App.styles';

import { GlobalStyle } from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <PortalsContainer>
            <Header />
            <MainContainer>
              <Routes />
            </MainContainer>
          </PortalsContainer>
        </QueryClientProvider>
      </ReduxProvider>
    </BrowserRouter>
  );
}

export default App;
