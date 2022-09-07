import { MovieItem } from "services";

type MovieState = {
    watchlist: MovieItem[],
    watched: MovieItem[],
}

type MovieAction = 
    | { type: 'ADD_MOVIE_TO_WATCHLIST', payload: MovieItem}
    | { type: 'DELETE_MOVIE_FROM_WATCHLIST', payload: { id: string }}

export const movieReducer = (state: MovieState, action: MovieAction) => {
    switch(action.type) {
        case 'ADD_MOVIE_TO_WATCHLIST':
            return {
                ...state,
                watchlist: [action.payload, ...state.watchlist]
            }
        default:
            return state;
    }
}