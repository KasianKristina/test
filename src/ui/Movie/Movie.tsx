import { FC, useState, memo } from 'react'

import { Modal } from 'ui/Modal'
import { ModalAddList } from 'ui/ModalAddList'

import styles from './styles.module.scss'

const API_IMG = process.env.REACT_APP_API_IMG

type MovieProps = {
  title: string
  poster_path: string
  id: number
  overview: string
  popularity: number
  genres: string
}

export const Movie: FC<MovieProps> = memo(function ({ title, poster_path, id, overview, popularity, genres }) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className={styles.Movie}>
      <img className={styles.Movie__poster} src={API_IMG + poster_path} alt="Movie poster"></img>
      <p className={styles.Movie__title}>{title}</p>
      <button className={styles.Movie__btn} onClick={() => setModalOpen(true)}>
        Add
      </button>

      <Modal modalOpen={modalOpen}>
        <ModalAddList
          setModalOpen={setModalOpen}
          title={title}
          poster_path={poster_path}
          id={id}
          overview={overview}
          popularity={popularity}
          genres={genres}
        />
      </Modal>
    </div>
  )
})
