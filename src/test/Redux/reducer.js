import { fetchFilmPop, rechercheFilm } from "./action";
const initialState ={
    query: '',
    result: [],
    page: 1,
};

const Reducer1 =(state = initialState, action) =>{
    switch (action.type){
        case fetchFilmPop :
            return{
                ...state,
                query:'',
                result: action.payload,
                page: action.page
                
            };
            case rechercheFilm:
                return{
                    ...state,
                    query: action.payload.query,
                    result: action.payload.results,
                    page: action.payload.page
                };
                default:
                    return state;
    }
};

export default Reducer1;