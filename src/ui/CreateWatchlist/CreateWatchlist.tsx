import { FC, useContext, useState } from 'react'
import classnames from 'classnames'

import { MovieListContext } from 'context/MovieListContext/MovieListContext'

import styles from './styles.module.scss'

export const CreateWatchlist: FC = () => {

  const { addList, list, addMovie } = useContext(MovieListContext)

  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')
  const [movies, setMovies] = useState([])

  return (
    <div className={styles.CreateWatchlist}>
      <p className={styles.CreateWatchlist__header}>Create a new Watchlist</p>
      <div className={classnames(styles.CreateWatchlist__input, styles.name)}>
        <p className={styles.CreateWatchlist__inputHeader}>Name</p>
        <input
          className={classnames(styles.CreateWatchlist__inputName, styles.inputName)}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
      </div>
      <div className={classnames(styles.CreateWatchlist__input, styles.description)}>
        <p className={styles.CreateWatchlist__inputHeader}>Description</p>
        <input
          className={classnames(
            styles.CreateWatchlist__inputName,
            styles.inputDescription
          )}
          type="text"
          value={overview}
          onChange={(e) => setOverview(e.target.value)}
        ></input>
      </div>
      <button
        className={styles.CreateWatchlist__btn}
        onClick={() => {
          addList({ title, overview, movies })
          addMovie(movies[0], 'asd')
        }}
      >
        Create Watchlist
      </button>
    </div>
  )
}
