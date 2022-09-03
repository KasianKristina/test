import { FC } from 'react';

import styles from './styles.module.scss';

export const FormLogin: FC = () => {

    return (
        <div className={styles.FormLogin}>
            <div className={styles.FormLogin__text}>
                <p className={styles['FormLogin__text-info']}>Hello!</p>
                <p className={styles['FormLogin__text-info']}>Please log in or create an account to use the features of this app</p>
            </div>
            <div className={styles.FormLogin__form}>

                <div className={styles['FormLogin__form-container']}>
                    <p className={styles['FormLogin__form-container_text']}>Email *</p>
                    <input className={styles['FormLogin__form-container_input']}></input>
                </div>

                <div className={styles['FormLogin__form-container']}>
                    <p className={styles['FormLogin__form-container_text']}>Password *</p>
                    <input className={styles['FormLogin__form-container_input']}></input>
                </div>
    
                <button className={styles['FormLogin__form-btn']}>Log in</button>
                <a className={styles.FormLogin__link}>or create an account</a>
            </div>
        </div>
    )
}