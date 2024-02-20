import React, {useState} from "react";
import { Card, Modal} from "react-bootstrap";
import { useSelector } from "react-redux";



function CardFilm(){
    
    const [show, setShow]=useState(false);
    const handleShow = ()=>{setShow(true)};
    const handleClose= ()=>{setShow(false)};


    const movies = useSelector(state => state.results || []); 
    return(
        <>
        {movies.map(movie =>(
            <Card key={movie.id}
            className="bg-dark border-4 rounded-5 text-light"
            style={{width: '23rem', height:'38rem', borderColor: 'chartreuse'}}>
                <Card.Body onClick={handleShow} className="text-center">
                    <h4>{movie.title}</h4>
                    <Card.Img variant="bottom" src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}/>
                </Card.Body>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Body className="bg-dark text-light text-center row-1cols-2">
                        <h1>{movie.title}</h1>
                         <img className="card-img-top" style={{width:'14rem'}}src={movies.poster_path} alt={movie.title} />
                         <h3>Release Date: {movie.release_date}</h3>
                         <br/>
                      
                    </Modal.Body>
                    <Modal.Footer className="bg-dark text-light text-center">
                        <p>{movie.overview}</p>
                    </Modal.Footer>
                </Modal>
            </Card>
            ))}
        </>
           
            
    );

};

export default CardFilm;