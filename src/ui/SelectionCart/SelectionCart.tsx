import { FC } from 'react'

import styles from './styles.module.scss'

const API_IMG = process.env.REACT_APP_API_IMG

type MovieProps = {
  id: number
  title: string
  overview: string
  genres: string
  popularity: number
  poster_path: string
  type: string
}

export const SelectionCart: FC<MovieProps> = ({
  id,
  title,
  poster_path,
  overview,
  genres,
  popularity,
  type
}) => {
  return (
    <div className={styles.SelectionCart}>
      <img
        className={styles.SelectionCart__poster}
        src={API_IMG + poster_path}
        alt="Movie poster"
      ></img>
      <div>
        <p className={styles.SelectionCart__title}>{title}</p>
        <p className={styles.SelectionCart__genres}>{genres}</p>
        <p className={styles.SelectionCart__popularity}>{popularity}</p>
        <p className={styles.SelectionCart__overview}>{overview}</p>
      </div>
    </div>
  )
}