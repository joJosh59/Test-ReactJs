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
                       <h3> Home</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/Users">
                      <h3>  Users</h3>
                    </Link>
                </li>
                <li>
                    <Link to="/Contact">
                        <h3>Contact</h3>
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