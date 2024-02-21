import React, { useState} from "react";
import { useDispatch } from "react-redux";
import { Navbar, Form, FormControl, Button} from "react-bootstrap";
import { rechercheFilms } from "../../test/Redux/action";


function SearchBar(){
    const [query, setQuery] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const dispatch = useDispatch();

    const handleSearch = () => {
        if (searchTerm.trim() !== "") {
          dispatch(rechercheFilms(searchTerm));
        }
      };

    return (
        <Navbar bg="secondary" expand="lg" variant="dark" className="d-flex justify-content-center fixed-top" style={{opacity: '70%'}}>
        <div>
        <Form className="d-flex" autoComplete="off" onSubmit={handleSearch}>
            <FormControl type="search"
            placeholder="Recherche"
            className="me-2"
            aria-label="Recherche"
            name="query"
            value={query}
            onChange={(event)=> dispatch(rechercheFilms(event.target.value))}></FormControl>
            
            <Button variant="primary" type="submit">Search</Button>
        </Form>
        </div>

</Navbar>  
    )
};

export default SearchBar;