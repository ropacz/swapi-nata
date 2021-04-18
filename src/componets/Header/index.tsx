import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderPage } from './styles';

const Header: React.FC = () => (
  <HeaderPage>
    <div className="container">
      <h1>
        <Link to="/">Nata Starships</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Sobre</Link>
          </li>
          <li>
            <a
              rel="noopener noreferrer"
              href="https://github.com/ropacz/swapi-nata"
              target="_blank"
            >
              Github
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </HeaderPage>
);

export default Header;
