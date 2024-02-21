import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";

function CardFilm() {
  const movies = useSelector((state) => state.Reducer1.result);

  const [show, setShow]=useState(null);

  const handleShow = (movie)=>{setShow(movie)};

  const handleClose= ()=>{setShow(null)};

  return (
    <div className="d-flex flex-wrap">
      {movies.map((movie) => (
        <Card key={movie.id}
          className="bg-dark border-4 rounded-5 text-light"
          style={{ width: "23rem", height: "38rem", borderColor: "chartreuse" }}
        >
          <Card.Body onClick={()=>handleShow(movie)} className=" text-center">
            <h4>{movie.title}</h4>
            <Card.Img
              variant="bottom"
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            />
          </Card.Body>
          <Modal show={show == movie} onHide={handleClose} className="">
            <Modal.Body className="bg-dark text-light text-center row-1cols-2">
              <h1>{movie.title}</h1>
              <img
                className="card-img-top"
                style={{ width: "14rem" }}
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <h3>Release Date: {movie.release_date}</h3>
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
