import { fetchFilmPops, rechercheFilms } from "./action";

const initialState ={
    query: '',
    results: [],
    page: 1,
};

const Reducer1 =(state = initialState, action) =>{
    switch (action.type){
        case fetchFilmPops:
            return{
                ...state,
                query:'',
                results: action.payload,
                page: action.page
            };
            case rechercheFilms:
                return{
                    ...state,
                    query: action.payload.query,
                    results: action.payload.films,
                    page: action.payload.page
                };
                default:
                    return state;
    }
};

export default Reducer1