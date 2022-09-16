import { MovieItem } from 'services'

import { MovieList } from './MovieListContext'

type ListState = {
  list: MovieList[]
}

type AddMovieProps = {
  movie: MovieItem
  name: string
}

type ListAction =
  | { type: 'ADD_LIST'; payload: MovieList }
  | { type: 'ADD_MOVIE'; payload: AddMovieProps }
  | { type: 'DELETE_LIST'; payload: { id: string } }
  | { type: 'ADD_MOVIE_TO_WATCHLIST'; payload: MovieItem }

export const listReducer = (state: ListState, action: ListAction) => {
  switch (action.type) {
    case 'ADD_LIST':
      return {
        ...state,
        list: [action.payload, ...state.list]
      }
    case 'ADD_MOVIE_TO_WATCHLIST':
      return {
        ...state,
        movies: [action.payload, ...state.list]
      }
    case 'ADD_MOVIE':
      const name = action.payload.name
      const newState: MovieList[] = state.list.reduce((prev, cur) => {
        if (cur.title === name) {
          cur.movies.push(action.payload.movie)
        }

        return { ...prev, cur }
      }, [])

      return {
        ...state,
        list: [...newState]
      }
    default:
      return state
  }
}
