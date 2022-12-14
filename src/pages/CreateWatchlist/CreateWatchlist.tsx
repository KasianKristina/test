import { FC, useContext, useState } from 'react'
import classnames from 'classnames'

import { MovieListContext } from 'context/MovieListContext/MovieListContext'

import styles from './styles.module.scss'

export const CreateWatchlist: FC = () => {
  const { addList } = useContext(MovieListContext)

  const [title, setTitle] = useState('')
  const [overview, setOverview] = useState('')
  const [watchlist] = useState([])

  return (
    <div className={styles.CreateWatchlist}>
      <div className={styles.CreateWatchlist__wrapper}>
        <p className={styles.CreateWatchlist__header}>Create a new Watchlist</p>
        <div className={classnames(styles.CreateWatchlist__input, styles.name)}>
          <p className={styles.CreateWatchlist__inputHeader}>Name</p>
          <input
            className={classnames(styles.CreateWatchlist__inputName, styles.inputName)}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={classnames(styles.CreateWatchlist__input, styles.description)}>
          <p className={styles.CreateWatchlist__inputHeader}>Description</p>
          <textarea
            className={classnames(styles.CreateWatchlist__inputName, styles.inputDescription)}
            value={overview}
            onChange={(e) => setOverview(e.target.value)}
          />
        </div>
        <button
          className={styles.CreateWatchlist__btn}
          onClick={() => {
            addList({ title, overview, watchlist })
            setTitle('')
            setOverview('')
          }}
        >
          Create Watchlist
        </button>
      </div>
    </div>
  )
}