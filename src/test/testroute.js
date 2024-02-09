import React from "react";
import { BrowserRouter as Router,
Link,
Route,
Switch } from "react-router-dom/cjs/react-router-dom.min";
import Home from "./testHome";
import Users from "./testUser";
import Contact from "./testContact";



function Routine(){
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/Home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/Users">
                        Users
                    </Link>
                </li>
                <li>
                    <Link to="/Contact">
                        Contact
                    </Link>
                </li>
            </ul>

            <Switch>
                <Route path="./Home">
                    <Home/>
                </Route>
                <Route path="./Users">
                    <Users/>
                </Route>
                <Route path="./Contact">
                    <Contact/>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routine;