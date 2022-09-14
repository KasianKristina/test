import { FC, useContext } from 'react';
import classnames from 'classnames';

import { Button } from 'ui/Button/Button';
import { paths } from 'constants/path';

import styles from './styles.module.scss';
import { MovieListContext } from 'context/MovieListContext/MovieListContext';

export const Menu: FC = () => {

    const {list} = useContext(MovieListContext);

    return (
        <div className={styles.Menu}>
            <div className={styles.Menu__container}>
                <span className={styles.Menu__logo}>Watchlists</span>
                <div className={classnames(styles['Menu__input-box'], styles['input-box'])}>
                    <input className={styles['input-box__input']} placeholder='Search' type='search'></input>
                </div>
                <Button className={styles.Menu__btn_home} to={paths.home} name='Home'/>
                <Button className={styles.Menu__btn_history} name='Selections' to={paths.selections}/>
                <Button className={styles.Menu__btn_create} name='+ Create watchlist' to={paths.create}/>
                <div className={styles.Menu__line}></div>
                <span className={styles.Menu__list}>My Lists</span>
                <div>
                    {list.map((selection) => (
                        <ul className={styles.Menu__listItems}>
                            {selection.title}
                        </ul>
                    ))}
                </div>
            </div>
            <Button className={styles.Menu__guest} to={paths.login} name='GUEST'/>
        </div>
    )
}