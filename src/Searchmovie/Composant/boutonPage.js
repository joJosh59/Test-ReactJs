import React,{useState} from "react"




function BoutonPage({page, totalPages}){

    const [currentPage, setCurrentPage] = useState(page);

    const handlePrevPage = () =>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1);
        }
    };
    
    const handleNextPage = () =>{
        if(currentPage <totalPages){
            setCurrentPage(currentPage + 1)
        }
    };

return (
<div className="d-flex justify-content-around bg-black text-light p-5">
    <div>
        <button type="button" onClick={handlePrevPage} className="border-3 bg-black text-danger" style={{borderColor: 'chartreuse'}}>Precedent</button>
    </div>
    <div className="d-flex justify-content-center">
        <span className=" border-bottom"> 
            Page: {page} sur {totalPages}
        </span>
    </div>
    <div>
        <button type="button" onClick={handleNextPage} className="border-3 bg-black text-danger" style={{borderColor: 'chartreuse'}}>Suivant</button>
    </div>
</div>
            
        )}

        export default BoutonPage;