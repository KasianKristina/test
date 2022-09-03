import { FC } from 'react'

import { FormLogin } from 'ui/FormLogin'
import { Menu } from 'ui/Menu'

import styles from './styles.module.scss'

export const Login: FC = () => {
    return (
        <div className={styles.Login}>
            <div className={styles.Login__menu}><Menu /></div>
            <div className={styles.Login__content}><FormLogin /></div>
        </div>
    )
}