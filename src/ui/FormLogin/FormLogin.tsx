import { FC, useState } from 'react'

import styles from './styles.module.scss'

const handleClick = (password: string, email: string) => {
  window.localStorage.setItem('is_authorized', '1')
  window.localStorage.setItem('password', password)
  window.localStorage.setItem('email', email)
}

export const FormLogin: FC = () => {
    
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className={styles.FormLogin}>
      <div className={styles.FormLogin__text}>
        <p className={styles['FormLogin__text-info']}>Hello!</p>
        <p className={styles['FormLogin__text-info']}>
          Please log in or create an account to use the features of this app
        </p>
      </div>
      <div className={styles.FormLogin__form}>
        <div className={styles['FormLogin__form-container']}>
          <p className={styles['FormLogin__form-container_text']}>Email *</p>
          <input
            className={styles['FormLogin__form-container_input']}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>

        <div className={styles['FormLogin__form-container']}>
          <p className={styles['FormLogin__form-container_text']}>Password *</p>
          <input
            className={styles['FormLogin__form-container_input']}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>

        <button
          className={styles['FormLogin__form-btn']}
          onClick={() => handleClick(password, email)}
        >
          Log in
        </button>
      </div>
    </div>
  )
}