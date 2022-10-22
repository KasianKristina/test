import { FC, memo, useState } from 'react'

import styles from './styles.module.scss'

const handleClick = (password: string, name: string) => {
  window.localStorage.setItem('is_authorized', '1')
  window.localStorage.setItem('password', password)
  window.localStorage.setItem('name', name)
}

export const _FormLogin: FC = () => {
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handlerSetValueName = (name: string) => {
    setName(name)
  }

  const handlerSetValuePassword = (password: string) => {
    setPassword(password)
  }

  return (
    <div className={styles.FormLogin}>
      <div className={styles.FormLogin__wrapper}>
        <div className={styles.FormLogin__text}>
          <p className={styles['FormLogin__text-info']}>Hello!</p>
          <p className={styles['FormLogin__text-info']}>
            Please log in or create an account to use the features of this app
          </p>
        </div>
        <div className={styles.FormLogin__form}>
          <div className={styles['FormLogin__form-container']}>
            <p className={styles['FormLogin__form-container_text']}>Name *</p>
            <input
              className={styles['FormLogin__form-container_input']}
              onChange={(e) => handlerSetValueName(e.target.value)}
            />
          </div>

          <div className={styles['FormLogin__form-container']}>
            <p className={styles['FormLogin__form-container_text']}>Password *</p>
            <input
              className={styles['FormLogin__form-container_input']}
              onChange={(e) => handlerSetValuePassword(e.target.value)}
            />
          </div>

          <button className={styles['FormLogin__form-btn']} onClick={() => handleClick(password, name)}>
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}

export const FormLogin = memo(_FormLogin)