import React,{useState} from "react"
import { useDispatch, useSelector } from "react-redux";




function BoutonPage(){

   const Pages = useSelector((state)=> state.Reducer1.page);
   const TotalPages = useSelector((state)=> state.Reducer1.total_pages);
   const dispatch = useDispatch();
    const handlePrevPage = (Pages) =>{
        if(Pages > 1){
            dispatch(Pages - 1);
        }
    };
    
    const handleNextPage = (Pages) =>{
        if(Pages <TotalPages){
            dispatch(Pages + 1)
        }
    };

return (
<div className="d-flex justify-content-around bg-black text-light p-5">
    <div>
        <button type="button" onClick={handlePrevPage} className="border-3 bg-black text-danger" style={{borderColor: 'chartreuse'}}>Precedent</button>
    </div>
    <div className="d-flex justify-content-center">
        <span className=" border-bottom"> 
            Page: {Pages} sur {TotalPages}
        </span>
    </div>
    <div>
        <button type="button" onClick={handleNextPage} className="border-3 bg-black text-danger" style={{borderColor: 'chartreuse'}}>Suivant</button>
    </div>
</div>
            
        )}

        export default BoutonPage;