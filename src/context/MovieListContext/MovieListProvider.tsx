import { useReducer, useEffect, FC } from 'react'

import { MovieItem } from 'services'

import { listReducer } from './MovieListReducer'
import { MovieList, MovieListContext, MovieListState } from './MovieListContext'

const INITIAL_STATE: MovieListState = {
  list: localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list') || '{}') : []
}

type Props = {
  children: JSX.Element
}

export const MovieListProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(listReducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(state.list))
  }, [state])

  const addList = (list: MovieList) => {
    dispatch({ type: 'ADD_LIST', payload: list })
  }

  const addMovie = (movie: MovieItem, name: string) => {
    dispatch({ type: 'ADD_MOVIE_TO_WATCHLIST', payload: { movie, name } })
  }

  const deleteMovieFromWatchlist = (movie: MovieItem, name: string) => {
    dispatch({ type: 'DELETE_MOVIE_FROM_WATCHLIST', payload: { movie, name } })
  }

  const deleteWatchlist = (name: string) => {
    dispatch({ type: 'DELETE_LIST', payload: name })
  }

  return (
    <MovieListContext.Provider
      value={{ list: state.list, addList, addMovie, deleteMovieFromWatchlist, deleteWatchlist }}
    >
      {children}
    </MovieListContext.Provider>
  )
}