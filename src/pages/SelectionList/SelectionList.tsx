import { FC, useContext, memo } from 'react'

import { SelectionCart } from 'ui/SelectionCart'
import { MovieListContext } from 'context/MovieListContext/MovieListContext'

import styles from './styles.module.scss'

export const _SelectionList: FC = () => {
  const { movieList, deleteWatchlist } = useContext(MovieListContext)

  return (
    <div className={styles.SelectionList}>
      <div className={styles.SelectionList__wrapper}>
        {movieList.map((watchlist) => (
          <div>
            <div className={styles.SelectionList__header}>
              <p className={styles.SelectionList__title}>{watchlist.title}</p>
              <button
                className={styles.SelectionList__btn_remove}
                onClick={() => {
                  deleteWatchlist(watchlist.title)
                }}
              >
                Delete list
              </button>
            </div>
            <p className={styles.SelectionList__overview}>{watchlist.overview}</p>
            <div>
              {watchlist.watchlist.map((movie) => (
                <SelectionCart key={movie.id} {...movie} listTitle={watchlist.title} type="watchlist" />
              ))}
            </div>
            <div className={styles.SelectionList__line}></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export const SelectionList = memo(_SelectionList)