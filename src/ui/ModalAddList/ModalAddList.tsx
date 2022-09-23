import { FC, useContext } from 'react'

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

export const ModalAddList: FC<Props> = ({ setModalOpen, title, poster_path, id, overview, popularity, genres }) => {
  const { list, addMovie } = useContext(MovieListContext)

  return (
    <div className={styles.ModalAddList}>
      <button className={styles.ModalAddList__btnClose} onClick={() => setModalOpen(false)}></button>
      <p className={styles.ModalAddList__text}>Add movie: {title}</p>
      <p className={styles.ModalAddList__text}>To watchlist</p>
      <div className={styles.ModalAddList__list}>
        {Array.from(list).map((selection) => (
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