import { FC, useContext } from 'react'
import classnames from 'classnames'

import { ButtonContainer } from 'ui/ButtonContainer/ButtonContainer'
import { paths } from 'constants/path'
import { MovieListContext } from 'context/MovieListContext/MovieListContext'

import styles from './styles.module.scss'

export const Menu: FC = () => {
  const { movieList } = useContext(MovieListContext)

  return (
    <div className={styles.Menu}>
      <div className={styles.Menu__container}>
        <div className={styles.Menu__container_nav}>
          <span className={styles.Menu__logo}>Watchlists</span>
          <div className={classnames(styles['Menu__input-box'], styles['input-box'])}>
            <input className={styles['input-box__input']} placeholder="Search" type="search"/>
          </div>
          <ButtonContainer className={styles.Menu__btn_home} to={paths.home} name="Home" />
          <ButtonContainer className={styles.Menu__btn_history} name="Selections" to={paths.selections} />
          <ButtonContainer className={styles.Menu__btn_create} name="+ Create watchlist" to={paths.create} />
          <div className={styles.Menu__line}></div>
          <span className={styles.Menu__list}>My Lists</span>
        </div>
        <div className={styles.Menu__list_items}>
          {movieList.map((selection) => (
            <ul className={styles.Menu__listItems}>{selection.title}</ul>
          ))}
        </div>
      </div>
      <ButtonContainer className={styles.Menu__guest} to={paths.login} name="GUEST" />
    </div>
  )
}