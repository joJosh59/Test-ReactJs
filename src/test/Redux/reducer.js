import { fetchFilmPop, prev_Page, next_Page, rechercheFilm, reset_Page } from "./action";
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
                result: action.payload.results,
                page: action.payload.page,
                total_pages: action.payload.total_pages
                
            };
            case rechercheFilm:
                return{
                    ...state,
                    query: action.payload.query,
                    result: action.payload.results,
                    page: action.payload.page,
                    total_pages: action.payload.total_pages
                };
                case prev_Page:
                    return {
                        ...state,
                        page: state.page > 1 ? state.page - 1 : state.page
                    };
                    case next_Page:
                        return{
                            ...state,
                            page: state.page < state.total_pages ? state.page + 1 : state.page
                        };
                        case reset_Page:
                            return {
                                ...state,
                                page: 1
                            };
                default:
                    return state;
    }
};

export default Reducer1;