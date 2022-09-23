import { FC, useContext, memo } from 'react'

import { SelectionCart } from 'ui/SelectionCart'
import { MovieListContext } from 'context/MovieListContext/MovieListContext'

import styles from './styles.module.scss'

export const SelectionList: FC = memo(function () {
  const { list, deleteWatchlist } = useContext(MovieListContext)

  return (
    <div className={styles.SelectionList}>
      <div className={styles.SelectionList__wrapper}>
        {Array.from(list).map((l) => (
          <div>
            <div className={styles.SelectionList__header}>
              <p className={styles.SelectionList__title}>{l.title}</p>
              <button
                className={styles.SelectionList__btn_remove}
                onClick={() => {
                  deleteWatchlist(l.title)
                }}
              >
                Delete list
              </button>
            </div>
            <p className={styles.SelectionList__overview}>{l.overview}</p>
            <div>
              {l.watchlist.map((movie) => (
                <SelectionCart key={movie.id} {...movie} listTitle={l.title} type="watchlist" />
              ))}
            </div>
            <div className={styles.SelectionList__line}></div>
          </div>
        ))}
      </div>
    </div>
  )
})
