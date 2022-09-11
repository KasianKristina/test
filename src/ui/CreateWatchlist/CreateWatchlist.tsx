import { FC, useState } from 'react';
import classnames from 'classnames';

import styles from './styles.module.scss';

const handleClick = (name : string, description : string) => {
    window.localStorage.setItem(name, description);
}

export const CreateWatchlist: FC = () => { 

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className={styles.CreateWatchlist}>
            <p className={styles.CreateWatchlist__header}>Create a new Watchlist</p>
            <div className={classnames(styles.CreateWatchlist__input, styles.name)}>
                <p className={styles.CreateWatchlist__inputHeader}>Name</p>
                <input className={classnames(styles.CreateWatchlist__inputName, styles.inputName)} type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className={classnames(styles.CreateWatchlist__input, styles.description)}>
                <p className={styles.CreateWatchlist__inputHeader}>Description</p>
                <input className={classnames(styles.CreateWatchlist__inputName, styles.inputDescription)} type='text' value={description} onChange={(e) => setDescription(e.target.value)}></input>
            </div>
            <button className={styles.CreateWatchlist__btn} onClick={() => handleClick(name, description)}>Create Watchlist</button>
        </div>
    )
}