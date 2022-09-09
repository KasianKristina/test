import { FC, useContext } from 'react'

import { GlobalContext } from 'context/GlobalContext';

import styles from './styles.module.scss';

const API_IMG = process.env.REACT_APP_API_IMG;

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

  const storedMovie = watchlist.find(i => i.id === id);

  const watchlistDisabled = storedMovie ? true : false;

  return (
    <div className={styles.SearchCart}>
        <img className={styles.SearchCart__poster} src={API_IMG+poster_path}></img>
        <div>
          <p className={styles.SearchCart__title}>{title}</p>
          <button className={styles.SearchCart__btn} disabled={watchlistDisabled} onClick={() => addMovieToWatchlist({title, id, overview, genres, popularity, poster_path})}>Add to watchlist</button>
        </div>
    </div>
  )
}
