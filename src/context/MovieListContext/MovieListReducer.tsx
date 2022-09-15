import { MovieItem } from 'services'

import { MovieList } from './MovieListContext'

type ListState = {
  list: MovieList[]
}

type ListAction =
  | { type: 'ADD_LIST'; payload: MovieList }
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
    default:
      return state
  }
}
