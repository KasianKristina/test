import { FC, useContext, memo } from 'react'

import { MovieListContext } from 'context/MovieListContext/MovieListContext'

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
  listTitle: string
}

export const SelectionCart: FC<MovieProps> = memo(function ({
  id,
  title,
  poster_path,
  overview,
  genres,
  popularity,
  type,
  listTitle
}) {
  const { deleteMovieFromWatchlist } = useContext(MovieListContext)
  return (
    <div className={styles.SelectionCart}>
      <img className={styles.SelectionCart__poster} src={API_IMG + poster_path} alt="Movie poster"></img>
      <div className={styles.SelectionCart__info}>
        <p className={styles.SelectionCart__title}>{title}</p>
        <p className={styles.SelectionCart__popularity}>Score: {popularity}</p>
        <p className={styles.SelectionCart__overview}>{overview}</p>
        <button
          className={styles.SelectionCart__btn_remove}
          onClick={() => {
            deleteMovieFromWatchlist({ id, title, poster_path, overview, genres, popularity }, listTitle)
          }}
        >
          Remove
        </button>
      </div>
    </div>
  )
})
