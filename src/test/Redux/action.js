import axios from "axios";

export const fetchFilmPop = "fetchFilmPop";
export const rechercheFilm = "rechercheFilm";
export const prev_Page = "prev_Page";
export const next_Page = "next_Page";
export const reset_Page = "reset_Page";

const api_key = process.env.REACT_APP_API_KEY;

export const fetchFilmPops = () => {
  return async (dispatch, getState) => {
    const { page } = getState().Reducer1;
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}&page=${page}`
      );
      const { data } = res;
      dispatch({
        type: fetchFilmPop,
        payload: {
          results: data.results,
          page: data.page,
          total_pages: data.total_pages,
        },
      });
    } catch (error) {
      console.error("Error query films:", error);
    }
  };
};

export const rechercheFilms = (query, page) => {
  return async (dispatch, getState) => {
    // const { page } = getState().Reducer1;
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}&page=${page}`
      );
      const { data } = response;
      dispatch({
        type: rechercheFilm,
        payload: {
          query,
          results: data.results,
          page: data.page,
          total_pages: data.total_pages,
        },
      });
    } catch (error) {
      console.error("Error query films:", error);
    }
  };
};

export const prevPage = () => ({
  type: prev_Page,
});

export const nextPage = () => ({
  type: next_Page,
});

export const resetPage = () => ({
  type: reset_Page,
});
