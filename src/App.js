import React from "react";
import CardFilm from "./Searchmovie/Composant/CardFilm";






function App(){




   return( 
    <div>
        <div className="d-flex flex-column gap-5 align-items-end fixed-top m-lg-2" style={{zIndex: 100, top: '48%'}}>
                <span>
                    <button type="button" onClick={()=>window.scrollTo(0, 0)} className="bg-dark text-light border-primary">↑</button>
                </span>
                <span>
                <button type="button" onClick={()=>window.scrollTo(0, document.body.scrollHeight)} className="bg-dark text-light border-primary">↓</button>
                </span>
            </div>
   
   <CardFilm />
   
   </div>
   )
}
export default App;