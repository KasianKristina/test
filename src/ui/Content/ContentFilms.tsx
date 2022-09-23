import { FC, useEffect } from 'react'

import { Movie } from 'ui/Movie'
import { apiRoute } from 'apiRoute'
import { useFetch } from 'shared/hooks/myFetch'

import styles from './styles.module.scss'

const url = process.env.REACT_APP_API_ENDPOINT + apiRoute.discoverMovie + '?api_key=' + process.env.REACT_APP_API_KEY

export const ContentFilms: FC = () => {
  const { result, get, error, isLoading } = useFetch()

  useEffect(() => {
    get(url)
  }, [])

  if (error) {
    return <div>Ошибка: {error}</div>
  } else if (isLoading) {
    return <div>Загрузка...</div>
  } else {
    return (
      <div className={styles.ContentFilms}>
        {Boolean(result) && result.map((value) => <Movie key={value.id} {...value} />)}
      </div>
    )
  }
}