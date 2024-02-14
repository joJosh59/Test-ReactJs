import React, {useEffect, useState} from "react";
import { Button, Card,Form,FormControl,Navbar, Modal} from "react-bootstrap";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

const api_key = process.env.REACT_APP_API_KEY;
const url_popu =`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`




function Searchbar(){

    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const url_search=`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${query}`
        axios.get(url_search)
        .then(res =>{
            const searchResults = res.data.results;
            setSearchResults(searchResults);

        }, [])
    }
    
    

    return(
        <>
        <Navbar bg="dark" expand="lg" variant="dark" className="d-flex justify-content-center">
                    <div>
                    <Form className="d-flex" onSubmit={handleSubmit} autoComplete="off">
                        <FormControl type="search"
                        placeholder="Recherche"
                        className="me-2"
                        aria-label="Recherche"
                        name="query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}></FormControl>
                        <Button variant="primary" type="submit">Search</Button>
                    </Form>
                    </div>

        </Navbar>  
    </>
    );
      }



function CardFilm({movie}){
    const url_img = movie.poster_path ? `https://image.tmdb.org/t/p/w300${movie.poster_path}` : '';
const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    return(
        
        <Card border="Success" className="bg-success" style={{width: '23rem', height:'38rem'}}>
           
            <Card.Body> 
            <h6>{movie.original_title ? movie.original_title : movie.original_name}</h6>
                <Card.Img variant="bottom" src={url_img}/>
                <button type="button" onClick={handleShow}>Afficher plus</button>
            <Modal show={show} onHide={handleClose}>
                      <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                      <h1>{movie.original_title ? movie.original_title : movie.original_name}</h1>
                      <img className="card-img-top" style={{width:'14rem'}}src={url_img} alt="movie.original_titre" />
                      <h3>Release Date: {movie.release_date}</h3>
                      <br></br>
                      <h4>Synopsis</h4>
                      <p>{movie.overview}</p>
                      </Modal.Body>
                      <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>Close</Button>
                      </Modal.Footer>
                      </Modal>
            </Card.Body>
           
        </Card>
    )

}

function ListFilm (){
    const [movies, setMovies] = useState([]);
   
    useEffect(() =>{
        axios.get(url_popu)
        .then(res =>{
            const movies = res.data.results;
            setMovies(movies)
    })
}, []);
    
        return(
            <>
            <Searchbar/>

            <div className="d-flex justify-content-center flex-wrap">
                {movies.map(movie => (
                    <CardFilm key={movie.id} movie={movie} />
                ))}
            </div>
            </>
        )
    }

    export default ListFilm;