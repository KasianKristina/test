import { FC, memo, useContext } from 'react'

import { MovieListContext } from 'context/MovieListContext/MovieListContext'

import styles from './styles.module.scss'

type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  title: string
  poster_path: string
  id: number
  overview: string
  popularity: number
  genres: string
}

export const _ModalAddList: FC<Props> = ({ setModalOpen, title, poster_path, id, overview, popularity, genres }) => {
  const { movieList, addMovie } = useContext(MovieListContext)

  return (
    <div className={styles.ModalAddList}>
      <button className={styles.ModalAddList__btnClose} onClick={() => setModalOpen(false)}></button>
      <p className={styles.ModalAddList__text}>Add movie: {title}</p>
      <p className={styles.ModalAddList__text}>To watchlist</p>
      <div className={styles.ModalAddList__list}>
        {movieList.map((selection) => (
          <button
            className={styles.ModalAddList__listItems}
            onClick={() => {
              addMovie({ title, id, overview, popularity, poster_path, genres }, selection.title)
            }}
          >
            {selection.title}
          </button>
        ))}
      </div>
    </div>
  )
}

export const ModalAddList = memo(_ModalAddList)