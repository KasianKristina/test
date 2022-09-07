import { FC } from 'react';

import { API_IMG } from 'constants/constants';

import styles from './styles.module.scss';

type MovieProps = {
    id: number; 
    title: string; 
    overview: string; 
    genres: string; 
    popularity: number; 
    poster_path: string;
    type: string
  }

export const SelectionCart: FC<MovieProps> = ({ id, title, poster_path, overview, type}) => {
  return (
    <div className={styles.SelectionCart}>
        <img className={styles.Movie__poster} src={API_IMG+poster_path}></img>
        <p className={styles.Movie__title}>{title}</p>
        <p className={styles.SelectionCart__overview}>{overview}</p>
    </div>
  )
}
