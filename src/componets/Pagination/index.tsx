import React from 'react';
import { PaginationList } from './styles';

import { useStarshipData } from '../../hooks/useStarshipData';

import Button from '../Button';

export interface PaginationProps {
  next: string;
  previous: string;
}

const Pagination: React.FC<PaginationProps> = ({ next, previous }) => {
  const { nextPage, previousPage } = useStarshipData();

  const getNumberPage = (url: string) => {
    const pageNumber = url.split('page=')[1];
    return pageNumber || '';
  };

  return (
    <PaginationList>
      {previous && (
        <li>
          <Button onClick={() => previousPage(getNumberPage(previous))}>
            Anterior
          </Button>
        </li>
      )}
      {next && (
        <li>
          <Button onClick={() => nextPage(getNumberPage(next))}>Próxima</Button>
        </li>
      )}
    </PaginationList>
  );
};

export default Pagination;
