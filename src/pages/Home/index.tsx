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
        <Search handleDistanceMglt={setDistanceMglt} />
      </div>

      <div className="container">
        <List>
          {loading && distance && <p>Loading...</p>}
          {!loading && data && data.map((starship) => <Card data={starship} />)}
        </List>
      </div>

      <div className="container" style={{ flexWrap: 'wrap' }}>
        {!loading && <Pagination next={next} previous={previous} />}
      </div>
    </>
  );
};

export default Home;
