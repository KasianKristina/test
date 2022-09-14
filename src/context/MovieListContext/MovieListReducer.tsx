import { MovieList } from "./MovieListContext";

type ListState = {
    list: MovieList[]
}

type ListAction = 
    | { type: 'ADD_LIST', payload: MovieList}
    | { type: 'DELETE_LIST', payload: { id: string }}

export const listReducer = (state: ListState, action: ListAction) => {
    switch(action.type) {
        case 'ADD_LIST':
            return {
                ...state,
                list: [action.payload, ...state.list]
            }
        default:
            return state;
    }
}