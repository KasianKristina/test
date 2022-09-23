import { createContext } from 'react'

import { MovieItem } from 'services'

export type MovieList = {
  title: string
  overview: string
  watchlist: MovieItem[]
}

export type MovieListState = {
  list: MovieList[]
}

export type MovieListContextProps = {
  list: MovieList[]
  addList: (movie: MovieList) => void
  addMovie: (movie: MovieItem, name: string) => void
  deleteMovieFromWatchlist: (movie: MovieItem, name: string) => void
  deleteWatchlist: (name: string) => void
}

export const MovieListContext = createContext<MovieListContextProps>({} as MovieListContextProps)