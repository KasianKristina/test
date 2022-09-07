import { FC, useContext } from 'react'

import { API_IMG } from 'constants/constants';
import { GlobalContext } from 'context/GlobalContext';

import styles from './styles.module.scss';

type MovieProps = {
  id: number; 
  title: string; 
  overview: string; 
  genres: string; 
  popularity: number; 
  poster_path: string;
}

export const SearchCart: FC<MovieProps> = ({title, poster_path, id, overview, genres, popularity}) => {

  const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);

  let storedMovie = watchlist.find(i => i.id === id);

  const watchlistDisabled = storedMovie ? true : false;

  return (
    <div className={styles.SearchCart}>
        <img className={styles.Movie__poster} src={API_IMG+poster_path} width='50px'></img>
        <p className={styles.Movie__title}>{title}</p>
        <button className={styles.Movie__btn} disabled={watchlistDisabled} onClick={() => addMovieToWatchlist({title, id, overview, genres, popularity, poster_path})}>Add to watchlist</button>
    </div>
  )
}
