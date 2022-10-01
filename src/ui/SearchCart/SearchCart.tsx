import { FC, memo, useState } from 'react'

import { Modal } from 'ui/Modal'
import { ModalAddList } from 'ui/ModalAddList'

import styles from './styles.module.scss'

const API_IMG = process.env.REACT_APP_API_IMG

type MovieProps = {
  id: number
  title: string
  overview: string
  genres: string
  popularity: number
  poster_path: string
}

const _SearchCart: FC<MovieProps> = ({ title, poster_path, id, overview, genres, popularity }) => {
  const [modalOpen, setModalOpen] = useState(false)

  const isModalOpen = (isOpen:boolean) => {
    setModalOpen(isOpen)
  }

  return (
    <div className={styles.SearchCart}>
      <img className={styles.SearchCart__poster} src={API_IMG + poster_path} alt="Movie poster"/>
      <div>
        <p className={styles.SearchCart__title}>{title}</p>
        <button className={styles.SearchCart__btn} onClick={() => isModalOpen(true)}>
          Add to watchlist
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
    </div>
  )
}

export const SearchCart = memo(_SearchCart)