import React, {
  createContext,
  useEffect,
  useCallback,
  useState,
  useContext,
} from 'react';
import api from '../services/api';
import calculateTripStops from '../utils/calculateTripStops';

interface StarshipData {
  name: string;
  passengers: string;
  consumables: string;
  mglt: string;
  stops?: string;
}

interface ContextStarship {
  data: StarshipData[] | null;
  next: string;
  previous: string;
  distance: string | null;
  setDistanceMglt(mglt: string): void;
  nextPage(page: string): void;
  previousPage(page: string): void;
  loading: boolean;
}

const ContextStarship = createContext<ContextStarship>({} as ContextStarship);

const StarshipProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<StarshipData[] | null>(null);
  const [next, setNext] = useState<string>('');
  const [previous, setPrevious] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<string | null>(null);
  const [distance, setDistance] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const url = currentPage ? `/?page=${currentPage}` : '/';

    if (distance) {
      api.get(url).then((response) => {
        setData(null);
        setLoading(true);
        const starships = response.data.results;

        const starshipData = starships.map((starship: any) => ({
          name: starship.name,
          passengers: starship.passengers,
          consumables: starship.consumables,
          mglt: starship.MGLT,
          stops: calculateTripStops({
            mglt: starship.MGLT,
            consumables: starship.consumables,
            distance,
          }),
        }));

        setNext(response.data.next ? response.data.next : '');
        setPrevious(response.data.previous ? response.data.previous : '');

        setData(starshipData);
        setLoading(false);
      });
    }
  }, [currentPage, distance]);

  const nextPage = useCallback((page: string): void => {
    if (page) {
      setCurrentPage(page);
    }
  }, []);

  const previousPage = useCallback((page: string): void => {
    if (page) {
      setCurrentPage(page);
    }
  }, []);

  const setDistanceMglt = useCallback((mglt: string): void => {
    if (mglt) {
      setDistance(mglt);
      setCurrentPage(null);
    }
  }, []);

  return (
    <ContextStarship.Provider
      value={{
        data,
        next,
        previous,
        distance,
        setDistanceMglt,
        nextPage,
        previousPage,
        loading,
      }}
    >
      {children}
    </ContextStarship.Provider>
  );
};

function useStarshipData(): ContextStarship {
  const context = useContext(ContextStarship);

  if (!context) {
    throw new Error('Error loading data');
  }

  return context;
}

export { useStarshipData, StarshipProvider };
