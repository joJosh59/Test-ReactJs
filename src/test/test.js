import React from "react";

function Test() {
    return (
        <div>
            <h1>
                Test d'integration
            </h1>
        </div>
    );
    
}

function Test2() {
    return (
        <div>
            <p>
                test2 
            </p>
        </div>
    )
}

function Get(){
    return(
        <form method="get">
            <input type = "texte" placeholder="Nom"/>
            <br/>
            <input type = "texte" placeholder="Prenom"/>
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
}

class TestInte extends React.Component {
    constructor(props){
        super(props);
        this.state = {nom: "Testname", prenom: "Test2nd"};
    }
    render (){
        return(
        <div>
            <Test/>
            <Test2/>
            <p>
                test sur le {this.state.nom} et {this.state.prenom}
            </p>
            <Get/>
        </div>
        
        )
    }
    
}

export default TestInte;