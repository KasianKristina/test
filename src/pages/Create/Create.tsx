import { MovieListContext } from 'context/MovieListContext/MovieListContext'
import { FC, useContext } from 'react'
import { CreateWatchlist } from 'ui/CreateWatchlist'

import { FormLogin } from 'ui/FormLogin'
import { Menu } from 'ui/Menu'

import styles from './styles.module.scss'

export const Create: FC = () => {

    const {list} = useContext(MovieListContext);


    return (
        <div className={styles.Create}>
            <div className={styles.Create__menu}><Menu /></div>
            <div className={styles.Create__content}><CreateWatchlist/></div>
        </div>
    )
}