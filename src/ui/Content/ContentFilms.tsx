import { FC, useEffect } from 'react';

import { Movie } from 'ui/Movie';
import { useFetchMovies } from 'shared/hooks/fetch';
//import { API_KEY, API_POINT} from 'constants/constants';
import { apiRoute } from 'apiRoute';

import styles from './styles.module.scss';

export const DISCOVER = "https://api.themoviedb.org/3/discover/movie";

export const API_KEY = process.env.REACT_APP_API_KEY;
export const API_POINT = process.env.REACT_APP_API_ENDPOINT;

const url = DISCOVER+"?api_key="+API_KEY;
const url2 = process.env.REACT_APP_API_ENDPOINT+apiRoute.discoverMovie+"?api_key="+process.env.REACT_APP_API_KEY;

console.log(url);
console.log(url2);

export const ContentFilms: FC = () => {
  const { movies, handleFetchMovies } = useFetchMovies()

  useEffect(() => {
    handleFetchMovies(url)
  }, [handleFetchMovies])
  
  return (
    <div className={styles.ContentFilms}>
      { Boolean(movies) && movies.map((value) => 
        <Movie key={value.id} {...value} />)}
    </div>
  );
}