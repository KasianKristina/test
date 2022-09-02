import { FC } from 'react';

import { API_IMG } from 'constants/constants';

import styles from './styles.module.scss';

type MovieProps = {
    title:string; 
    poster_path:string
}

export const Movie: FC<MovieProps> = ({title, poster_path}) => {
    return (
        <div className={styles.Movie}>
            <img className={styles.Movie__poster} src={API_IMG+poster_path}></img>
            <p className={styles.Movie__title}>{title}</p>
        </div>
    )
}