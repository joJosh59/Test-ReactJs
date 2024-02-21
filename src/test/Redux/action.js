import axios from "axios";

export const fetchFilmPop = 'fetchFilmPop';
export const rechercheFilm = 'rechercheFilm';

const api_key = process.env.REACT_APP_API_KEY;


export const fetchFilmPops = () => {
  return async(dispatch) => {
    await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`)
      .then(res =>{
        const {data} = res;
       dispatch({
            type: fetchFilmPop,
            payload: data.results,
            page: data.page,
            total_pages: data.total_pages
        })
    })
        .catch(error => {
            console.error('Error query films:', error);
    });
    }};

export const rechercheFilms = (query) => {
  return (dispatch) => {
    axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`)
      .then(response =>{
        const {data} = response;
        dispatch({
            type: rechercheFilm,
            payload: {query, results: data.results, page: data.page, total_pages: data.total_pages}
        });
    })
    .catch(error => {
        console.error('Error query films:', error);
});
}}
