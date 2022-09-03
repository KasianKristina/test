import classnames from 'classnames';
import { FC } from 'react';

import { Button } from 'ui/Button/Button';
import { paths } from 'constants/path';
import styles from './styles.module.scss';

export const Menu: FC = () => {
    return (
        <div className={styles.Menu}>
            <div className={styles.Menu__container}>
                <span className={styles.Menu__logo}>Watchlists</span>
                <div className={classnames(styles['Menu__input-box'], styles['input-box'])}>
                    <input className={styles['input-box__input']} placeholder='Search' type='search'></input>
                </div>
                <Button className={styles.Menu__btn_home} to={paths.home} name={'Home'}/>
                <Button className={styles.Menu__btn_history} name={'History'} to={paths.home}/>
                <button className={styles.Menu__btn_create}>+ Create watchlist</button>
                <div className={styles.Menu__line}></div>
                <span className={styles.Menu__list}>My Lists</span>
            </div>
            <Button className={styles.Menu__guest} to={paths.login} name={'GUEST'}/>
        </div>
    )
}