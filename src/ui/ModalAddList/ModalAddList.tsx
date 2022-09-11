import { FC } from 'react';

import styles from './styles.module.scss';

type Props = {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ModalAddList: FC<Props> = ({ setModalOpen }) => {

    return (
        <div className={styles.ModalAddList}>
            <button className={styles.ModalAddList__btnClose} onClick={() => setModalOpen(false)}></button>
            <p className={styles.ModalAddList__text}>Add movie:</p>
            <p className={styles.ModalAddList__text}>To watchlist</p>
            <button ></button>
            <button className={styles.ModalAddList__btnNewWatchlist}>+ New watchlist</button>
        </div>
    )
}