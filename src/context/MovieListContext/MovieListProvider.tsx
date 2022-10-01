import { useReducer, useEffect, FC } from 'react'

import { MovieItem } from 'services'

import { listReducer } from './MovieListReducer'
import { MovieList, MovieListContext, MovieListState } from './MovieListContext'

const INITIAL_STATE: MovieListState = {
  movieList: localStorage.getItem('movieList') ? JSON.parse(localStorage.getItem('movieList') || '{}') : []
}

type Props = {
  children: JSX.Element
}

export const MovieListProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(listReducer, INITIAL_STATE)

  useEffect(() => {
    localStorage.setItem('movieList', JSON.stringify(state.movieList))
  }, [state])

  const addList = (movieList: MovieList) => {
    dispatch({ type: 'ADD_LIST', payload: movieList })
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
      value={{ movieList: state.movieList, addList, addMovie, deleteMovieFromWatchlist, deleteWatchlist }}
    >
      {children}
    </MovieListContext.Provider>
  )
}