import { MovieItem } from 'services'

import { MovieList } from './MovieListContext'

type movieListState = {
  movieList: MovieList[]
}

type MovieProps = {
  movie: MovieItem
  name: string
}

type MovieListAction =
  | { type: 'ADD_LIST'; payload: MovieList }
  | { type: 'ADD_MOVIE_TO_WATCHLIST'; payload: MovieProps }
  | { type: 'DELETE_MOVIE_FROM_WATCHLIST'; payload: MovieProps }
  | { type: 'DELETE_LIST'; payload: string }

export const listReducer = (state: movieListState, action: MovieListAction) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        ...state,
        movieList: [action.payload, ...state.movieList]
      }

    case 'ADD_MOVIE_TO_WATCHLIST':
      const name = action.payload.name
      const newState: MovieList[] = state.movieList.reduce((prev, cur) => {
        if (cur.title === name) {
          cur.watchlist.push(action.payload.movie)
        }
        return { ...prev, ...cur }
      }, [])
      return {
        ...state,
        movie: newState
      }

    case 'DELETE_MOVIE_FROM_WATCHLIST':
      const titleList = action.payload.name
      const titleMovie = action.payload.movie.title
      const newStateMovieList: MovieList[] = state.movieList.reduce((prev, cur) => {
        if (cur.title === titleList) {
          const index = cur.watchlist.findIndex((el) => el.title === titleMovie)
          cur.watchlist.splice(index, 1)
        }
        return { ...prev, ...cur }
      }, [])
      return {
        ...state,
        movie: newStateMovieList
      }

    case 'DELETE_LIST':
      return {
        ...state,
        movieList: state.movieList.filter((item) => item.title !== action.payload)
      }

    default:
      return state
  }
}