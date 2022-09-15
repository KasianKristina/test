import { useReducer, useEffect, FC, PropsWithChildren } from 'react'

import { MovieItem } from 'services'

import { listReducer } from './MovieListReducer'
import { MovieList, MovieListContext, MovieListState } from './MovieListContext'

const INITIAL_STATE: MovieListState = {
  list: localStorage.getItem('list')
    ? JSON.parse(localStorage.getItem('list') || '{}')
    : []
}

type Props = {
  children: JSX.Element | JSX.Element[]
}

export const MovieListProvider: FC<PropsWithChildren<Props>> = ({ children }) => {
  const [state, dispatch] = useReducer(listReducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state.list))
  }, [state])

  const addList = (list: MovieList) => {
    dispatch({ type: 'ADD_LIST', payload: list })
  }

  const addMovieToWatchlist = (movie: MovieItem) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie })
  }

  return (
    <MovieListContext.Provider value={{ list: state.list, addList, addMovieToWatchlist }}>
      {children}
    </MovieListContext.Provider>
  )
}
