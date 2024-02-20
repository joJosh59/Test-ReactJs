const fetchFilmPop = 'fetchFilmPop';
const rechercheFilm = 'rechercheFilm';

const api_key = process.env.REACT_APP_API_KEY;


export const fetchFilmPops = (page) => {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${page}`)
      .then(response => response.json())
      .then(data => dispatch({ type: fetchFilmPop, 
        payload: data.results, 
        page: data.page, 
        total_pages: data.total_pages }));
  };
};

export const rechercheFilms = (query, page) => {
  return (dispatch) => {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${page}`)
      .then(response => response.json())
      .then(data => dispatch({ type: rechercheFilm, 
        payload: { query, results: data.results, page: data.page, total_pages: data.total_pages } }));
  };
};