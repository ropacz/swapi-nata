import React from 'react';

import { CardList } from './styles';

interface Card {
  name: string;
  passengers: string;
  consumables: string;
  mglt: string;
  stops?: string;
}

interface CardProps {
  data: Card;
}

const Card: React.FC<CardProps> = ({ data }) => (
  <CardList>
    <ul>
      <li>
        <h3>{data.name}</h3>
      </li>
      <li>
        <b>Stops:</b> {data.stops}
      </li>
      <li>
        <b>Passengers:</b> {data.passengers}
      </li>
      <li>
        <b>Consumables:</b> {data.consumables}
      </li>
      <li>
        <b>MGLT:</b> {data.mglt}
      </li>
    </ul>
  </CardList>
);

export default Card;
