import { useReducer, useEffect, FC, PropsWithChildren } from 'react';

import { MovieItem } from 'services';

import { movieReducer } from './Reducer';
import { GlobalContext, MovieState } from './GlobalContext';


const INITIAL_STATE: MovieState = {
    watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist') || '{}') : [],
    watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched') || '{}') :[]
}

type Props = {
    children: JSX.Element | JSX.Element[]
}

export const GlobalProvider: FC<PropsWithChildren<Props>> = ({children}) => {

    const [state, dispatch] = useReducer( movieReducer, INITIAL_STATE);

    useEffect(() => {
        localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
        localStorage.setItem('watched', JSON.stringify(state.watched));
    }, [state]);

    const addMovieToWatchlist = (movie: MovieItem) => {
        dispatch({type: 'ADD_MOVIE_TO_WATCHLIST', payload: movie})
    }

    return (
        <GlobalContext.Provider value={{ watchlist: state.watchlist,
            watched: state.watched, addMovieToWatchlist }}>
            {children}
        </GlobalContext.Provider>
    )
}