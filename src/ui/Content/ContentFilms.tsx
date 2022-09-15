import { FC, useEffect } from 'react'

import { Movie } from 'ui/Movie'
import { useFetchMovies } from 'shared/hooks/fetch'
import { apiRoute } from 'apiRoute'

import styles from './styles.module.scss'

const url =
  process.env.REACT_APP_API_ENDPOINT +
  apiRoute.discoverMovie +
  '?api_key=' +
  process.env.REACT_APP_API_KEY

export const ContentFilms: FC = () => {
  const { movies, handleFetchMovies } = useFetchMovies()

  useEffect(() => {
    handleFetchMovies(url)
  }, [handleFetchMovies])

  return (
    <div className={styles.ContentFilms}>
      {Boolean(movies) && movies.map((value) => <Movie key={value.id} {...value} />)}
    </div>
  )
}
