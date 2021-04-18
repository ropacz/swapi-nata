import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { StarshipProvider } from './hooks/useStarshipData';

import Routes from './routes';

import GlobalStyle from './styles/globalStyles';

const App: React.FC = () => (
  <>
    <StarshipProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </StarshipProvider>
    <GlobalStyle />
  </>
);

export default App;
