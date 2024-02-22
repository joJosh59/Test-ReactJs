import React, { useEffect, useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import { fetchFilmPops, rechercheFilms, resetPage } from "../../test/Redux/action";

function CardFilm() {
  const movies = useSelector((state) => state.Reducer1.result);
  const page = useSelector((state) => state.Reducer1.page);
  const recherche = useSelector((state) => state.Reducer1.query);
  const dispatch = useDispatch();

  const [show, setShow] = useState(null);

  const handleShow = (movie) => {
    setShow(movie);
  };

  const handleClose = () => {
    setShow(null);
  };

  useEffect(() => {
    if (recherche) {
      dispatch(rechercheFilms(recherche, page));
      resetPage();
    } else {
      dispatch(fetchFilmPops(page));
    }
  }, [recherche, page, dispatch]);

  return (
    <div className="d-flex justify-content-evenly flex-wrap gap-4 pt-lg-5 bg-black">
      {movies.map((movie) => (
        <Card
          key={movie.id}
          className="bg-dark border-4 rounded-5 text-light"
          style={{ width: "23rem", height: "38rem", borderColor: "chartreuse" }}
        >
          <Card.Body onClick={() => handleShow(movie)} className=" text-center">
            <h4>{movie.title}</h4>
            <Card.Img
              variant="bottom"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            />
          </Card.Body>
          <Modal show={show === movie} onHide={handleClose} className="">
            <Modal.Body className="bg-dark text-light text-center row-1cols-2">
              <h1>{movie.title}</h1>
              <img
                className="card-img-top"
                style={{ width: "14rem" }}
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>Date de sortie: {movie.release_date}</h3>
              <br></br>
            </Modal.Body>
            <Modal.Footer className="bg-dark text-light text-center">
              <p>{movie.overview}</p>
            </Modal.Footer>
          </Modal>
        </Card>
      ))}
    </div>
  );
}

export default CardFilm;
