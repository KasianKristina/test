import classnames from 'classnames';
import { FC } from 'react';

import styles from './styles.module.scss';

export const Menu: FC = () => {
    return (
        <div className={styles.Menu}>
            <div className={styles.Menu__container}>
                <span className={styles.Menu__logo}>Watchlists</span>
                <div className={classnames(styles['Menu__input-box'], styles['input-box'])}>
                    <input className={styles['input-box__input']} placeholder='Search' type='search'></input>
                </div>
                <button className={styles.Menu__btn_home}>Home</button>
                <button className={styles.Menu__btn_history}>History</button>
                <button className={styles.Menu__btn_create}>+ Create watchlist</button>
                <div className={styles.Menu__line}></div>
                <span className={styles.Menu__list}>My Lists</span>
            </div>
            <button className={styles.Menu__guest}>GUEST</button>
        </div>
    )
}