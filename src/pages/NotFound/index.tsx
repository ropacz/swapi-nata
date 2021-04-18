import React from 'react';
import Header from '../../componets/Header';

import { Container } from './styles';

const NotFound: React.FC = () => (
  <>
    <Header />
    <div className="container">
      <Container>
        <h2>404</h2>
        <h3>This is not the page you are looking for</h3>
      </Container>
    </div>
  </>
);

export default NotFound;
