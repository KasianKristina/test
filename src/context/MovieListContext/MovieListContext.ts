import { createContext } from 'react'

import { MovieItem } from 'services'

export type MovieList = {
  title: string
  overview: string
  watchlist: MovieItem[]
}

export type MovieListState = {
  movieList: MovieList[]
}

export type MovieListContextProps = {
  movieList: MovieList[]
  addList: (movie: MovieList) => void
  addMovie: (movie: MovieItem, name: string) => void
  deleteMovieFromWatchlist: (movie: MovieItem, name: string) => void
  deleteWatchlist: (name: string) => void
}

export const MovieListContext = createContext<MovieListContextProps>({} as MovieListContextProps)