import React from 'react';

import { useStarshipData } from '../../hooks/useStarshipData';

import { List } from './styles';

import Header from '../../componets/Header';
import Card from '../../componets/Card';

import Search from '../../componets/Search';
import Pagination from '../../componets/Pagination';

const Home: React.FC = () => {
  const {
    data,
    next,
    distance,
    previous,
    setDistanceMglt,
    loading,
  } = useStarshipData();

  return (
    <>
      <Header />
      <div className="container">
        <h3>Repositório de Naves Intergalácticas de Star Wars</h3>
        <Search handleDistanceMglt={setDistanceMglt} distance={distance} />
      </div>

      <div className="container">
        <List>
          {loading && distance && <p>Loading...</p>}
          {!loading && data && data.map((starship) => <Card data={starship} />)}
        </List>
      </div>

      <div className="container">
        {!loading && <Pagination next={next} previous={previous} />}
      </div>
    </>
  );
};

export default Home;
