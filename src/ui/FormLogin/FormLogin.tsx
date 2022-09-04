import { FC } from 'react';

import { Input } from 'ui/Input';

import styles from './styles.module.scss';
import { useFetchAuth, useFetchAuthSession } from 'shared/hooks/fetch';

const url = 'https://api.themoviedb.org/3/authentication/token/new?api_key=4ab767e1df0bdbe07dd04be60701e36a';
const url2 = 'https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=4ab767e1df0bdbe07dd04be60701e36a'; 

export const FormLogin: FC = () => {

    const data = useFetchAuth(url);
    console.log('data1', data);
    const data2 = useFetchAuthSession(url2, data);
    console.log('data2',data2);

    return (
        <div className={styles.FormLogin}>
            <div className={styles.FormLogin__text}>
                <p className={styles['FormLogin__text-info']}>Hello!</p>
                <p className={styles['FormLogin__text-info']}>Please log in or create an account to use the features of this app</p>
            </div>
            <div className={styles.FormLogin__form}>

                <div className={styles['FormLogin__form-container']}>
                    <Input text={'Email *'}/>
                </div>

                <div className={styles['FormLogin__form-container']}>
                    <Input text={"Password *"}/>
                </div>
    
                <button className={styles['FormLogin__form-btn']}>Log in</button>
            </div>
        </div>
    )
}