import { createContext } from 'react'

import { MovieItem } from 'services'

export type MovieList = {
  title: string
  overview: string
  movies: MovieItem[]
}

export type MovieListState = {
  list: MovieList[]
}

export type MovieListContextProps = {
  list: MovieList[]
  addList: (movie: MovieList) => void
  addMovieToWatchlist: (movie: MovieItem) => void
  addMovie: (movie: MovieItem, name: string) => void
}

export const MovieListContext = createContext<MovieListContextProps>(
  {} as MovieListContextProps
)