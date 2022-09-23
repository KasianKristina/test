import { ChangeEvent, useState } from 'react'
import classnames from 'classnames'

import { ContentFilms } from 'ui/Content'
import { SearchCart } from 'ui/SearchCart'
import { apiRoute } from 'apiRoute'
import { useFetch } from 'shared/hooks/myFetch'

import styles from './styles.module.scss'

const API_KEY = process.env.REACT_APP_API_KEY

export const Content = () => {
  const [query, setQuery] = useState('')

  const { get, error, isLoading, result } = useFetch()

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setQuery(e.target.value)

    const url =
      process.env.REACT_APP_API_ENDPOINT +
      apiRoute.searchMovie +
      '?api_key=' +
      API_KEY +
      '&language=en-US&page=1&include_adult=false&query=' +
      e.target.value
    get(url)
  }

  if (error) {
    return <div>Ошибка: {error}</div>
  } else {
    return (
      <div className={styles.Content}>
        <div className={styles.Content__info}>
          <h1 className={styles['Content__info-watchlists']}>
            Welcome to <span className={styles['Content__info-watchlists_colorRed']}>Watchlists</span>
          </h1>
          <p className={styles.Content__text}>Browse movies, add them to watchlists and share them with friends.</p>
          <span className={classnames(styles.Content__text, styles.Content__text_iconVector)}>Just click the</span>
          <span className={classnames(styles.Content__text, styles.Content__text_iconCheck)}>
            to add a movie, the poster to see more details or
          </span>
          <span className={styles.Content__text}>to mark the movie as watched.</span>
        </div>
        <div className={classnames(styles['Content__input-box'], styles['input-box'])}>
          <input
            className={styles['input-box__input']}
            placeholder="Search for movies by title"
            type="search"
            value={query}
            onChange={onChange}
          ></input>
          <button className={styles['input-box__btn']}>search</button>
        </div>
        {Boolean(result.length) && (
          <ul>
            {result.map((movie) => (
              <div key={movie.id}>
                <SearchCart key={movie.id} {...movie} />
              </div>
            ))}
          </ul>
        )}
        <div className={classnames(styles.Content__posters, styles.posters)}>
          <p className={styles['posters-text']}>Popular movies right now</p>
          <>
            <ContentFilms />
          </>
        </div>
      </div>
    )
  }
}