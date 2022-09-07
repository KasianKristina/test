import { createContext } from "react";

import { MovieItem } from "services";

export type MovieState = {
    watchlist: MovieItem[],
    watched: MovieItem[]
}

export type GlobalContextProps = {
    watchlist: MovieItem[],
    watched: MovieItem[],
    addMovieToWatchlist: (movie: MovieItem) => void
}

export const GlobalContext = createContext<GlobalContextProps>({} as GlobalContextProps);