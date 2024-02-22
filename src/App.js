import React, { useEffect, useState } from "react";
import CardFilm from "./Searchmovie/Composant/CardFilm";
import { useSelector, useDispatch } from "react-redux";
import { fetchFilmPops, rechercheFilms } from "./test/Redux/action";
import "bootstrap/dist/css/bootstrap.css";
import BoutonPage from "./Searchmovie/Composant/boutonPage";
import SearchBar from "./Searchmovie/Composant/Searchbar";

function App() {
  const recherche = useSelector((state) => state.query);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!recherche) {
      dispatch(fetchFilmPops());
    } else {
      dispatch(rechercheFilms(recherche));
    }
  }, [recherche, dispatch]);

  return (
    <>
      <div>
        <SearchBar />
      </div>
      <div>
        <CardFilm />
        <div
          className="d-flex flex-column gap-5 align-items-end fixed-top m-lg-2"
          style={{ zIndex: 100, top: "48%" }}
        >
          <span>
            <button
              type="button"
              onClick={() => window.scrollTo(0, 0)}
              className="bg-dark text-light border-primary"
            >
              ↑
            </button>
          </span>
          <span>
            <button
              type="button"
              onClick={() => window.scrollTo(0, document.body.scrollHeight)}
              className="bg-dark text-light border-primary"
            >
              ↓
            </button>
          </span>
        </div>
        <BoutonPage />
      </div>
    </>
  );
}

export default App;
