import React from 'react';

import { HeaderPage } from './styles';

const Header: React.FC = () => (
  <HeaderPage>
    <div className="container">
      <h1>Nata Swapi</h1>
      <nav>
        <ul>
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>Sobre</p>
          </li>
          <li>
            <p>Github</p>
          </li>
        </ul>
      </nav>
    </div>
  </HeaderPage>
);

export default Header;
