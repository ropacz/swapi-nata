import React from 'react';

import { StarshipProvider } from './hooks/useStarshipData';

import Home from './pages/Home';
import GlobalStyle from './styles/globalStyles';

const App: React.FC = () => (
  <>
    <StarshipProvider>
      <Home />
    </StarshipProvider>
    <GlobalStyle />
  </>
);

export default App;
