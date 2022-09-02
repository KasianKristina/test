import classnames from 'classnames'

import { ContentFilms } from 'ui/Content'

import styles from './styles.module.scss'

export const Content = () => {
    return (
        <div className={styles.Content}>
            <div className={styles.Content__info}>
                <h1 className={styles['Content__info-watchlists']}>Welcome to <span className={styles['Content__info-watchlists_color_red']}>Watchlists</span></h1>
                <p className={styles.Content__text}>Browse movies, add them to watchlists and share them with friends.</p>
                <span className={classnames(styles.Content__text, styles.Content__text_icon_vector)}>Just click the</span> 
                <span className={classnames(styles.Content__text, styles.Content__text_icon_check)}>to add a movie, the poster to see more details or</span> 
                <span className={styles.Content__text}>to mark the movie as watched.</span>
            </div>
            <div className={classnames(styles['Content__input-box'], styles['input-box'])}>
                <input className={styles['input-box__input']} placeholder='Search for movies by title' type='search'></input>
                <button className={styles['input-box__btn']}>search</button>
            </div>
            <div className={classnames(styles.Content__posters, styles.posters)}>
                <p className={styles['posters-text']}>Popular movies right now</p>
                <>
                    <ContentFilms />
                </>
            </div>
        </div>
    )
}