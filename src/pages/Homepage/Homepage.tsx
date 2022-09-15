import { Menu } from 'ui/Menu'

import { Content } from './Content-homepage'
import styles from './styles.module.scss'

export const Homepage = () => {
  return (
    <div className={styles.Homepage}>
      <div className={styles.Homapage__menu}>
        <Menu />
      </div>
      <div className={styles.Homepage__content}>
        <Content />
      </div>
    </div>
  )
}