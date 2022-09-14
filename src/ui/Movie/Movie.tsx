import { FC, useContext, useState } from 'react';

import { GlobalContext } from 'context/GlobalContext';
import { Modal } from 'ui/Modal';
import { ModalAddList } from 'ui/ModalAddList';

import styles from './styles.module.scss';

const API_IMG = process.env.REACT_APP_API_IMG;

type MovieProps = {
    title:string; 
    poster_path:string;
    id: number;
    overview: string;
    popularity: number;
    genres: string
}

export const Movie: FC<MovieProps> = ({title, poster_path, id, overview, popularity, genres}) => {

    const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);
    const [modalOpen, setModalOpen] = useState(false);
    const storedMovie = watchlist.find(i => i.id === id);

    const watchlistDisabled = storedMovie ? true : false;
    
    return (
        <div className={styles.Movie}>
            <img className={styles.Movie__poster} src={API_IMG+poster_path}></img>
            <p className={styles.Movie__title}>{title}</p>
            <button className={styles.Movie__btn} disabled={watchlistDisabled} onClick={() => addMovieToWatchlist({title, id, overview, popularity, poster_path, genres})}></button>
            <button className={styles.Movie__btn} disabled={watchlistDisabled} onClick={() => setModalOpen(true)}></button>
            
            <Modal modalOpen={modalOpen}>
                <ModalAddList setModalOpen={setModalOpen} title={title}/>
            </Modal>
     
            <button onClick={() => setModalOpen(true)}>show Modal</button>
            
        </div>
    )
}