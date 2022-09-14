import { FC, useContext } from 'react';

import { GlobalContext } from 'context/GlobalContext';
import { MovieListContext } from 'context/MovieListContext/MovieListContext';

import styles from './styles.module.scss';

type Props = {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
    title: string
}

export const ModalAddList: FC<Props> = ({ setModalOpen, title }) => {

    const { addMovieToWatchlist, watchlist } = useContext(GlobalContext);
    const { addList, list } = useContext(MovieListContext);

    return (
        <div className={styles.ModalAddList}>
            <button className={styles.ModalAddList__btnClose} onClick={() => setModalOpen(false)}></button>
            <p className={styles.ModalAddList__text}>Add movie: {title}</p>
            <p className={styles.ModalAddList__text}>To watchlist</p>
            <div className={styles.ModalAddList__list}>
                {list.map((selection) => (
                    <button className={styles.ModalAddList__listItems}>
                        {selection.title}
                    </button>
                ))} 
            </div>    
            <button className={styles.ModalAddList__btnNewWatchlist}>+ New watchlist</button>
        </div>
    )
}