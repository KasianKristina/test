import { FC } from 'react';

import styles from './styles.module.scss';

const API_IMG = process.env.REACT_APP_API_IMG;

type MovieProps = {
    title:string; 
    poster_path:string;
}

export const Movie: FC<MovieProps> = ({title, poster_path}) => {
    return (
        <div className={styles.Movie}>
            <img className={styles.Movie__poster} src={API_IMG+poster_path}></img>
            <p className={styles.Movie__title}>{title}</p>
            <button className={styles.Movie__btn}></button>
        </div>
    )
}