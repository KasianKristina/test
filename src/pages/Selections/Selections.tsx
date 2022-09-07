import { FC, useContext } from 'react'

import { GlobalContext } from 'context/GlobalContext'
import { Menu } from 'ui/Menu'
import { SelectionCart } from 'ui/SelectionCart'

import styles from './styles.module.scss'

export const Selections: FC = () => {

    const {watchlist} = useContext(GlobalContext);

    return (
            <div className={styles.Selections}>
                <div className={styles.Selections__menu}><Menu /></div>
                <div>
                    {watchlist.map((movie) => (
                        <SelectionCart key={movie.id} {...movie} type='watchlist'/>
                    ))}
                </div>
            </div>
       
    )
}