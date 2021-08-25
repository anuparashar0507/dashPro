import React, {useState} from 'react'
import coloums from '../assets/coloums';
const Paggination = ({ data, RenderComponent,  pageLimit, dataLimit }) => {
        const count = data.length;
        const [pages] = useState(Math.round(data.length / dataLimit));
        const [currentPage, setCurrentPage] = useState(1);
      
        function goToNextPage() {
            setCurrentPage((page) => page + 1);
        }
      
        function goToPreviousPage() {
            setCurrentPage((page) => page - 1);
        }
      
        function changePage(event) {
            const pageNumber = Number(event.target.textContent);
            setCurrentPage(pageNumber);
        }
      
        const getPaginatedData = () => {
            const startIndex = currentPage * dataLimit - dataLimit;
            const endIndex = startIndex + dataLimit;
            return data.slice(startIndex, endIndex);
        };
      
        const getPaginationGroup = () => {
            let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
            return new Array(pageLimit).fill().map((_, i) => start + i + 1);
        };


    
    return (
    <>
    <div className = "table-container">
          <table id='tbl'>
           <thead>
        <tr>{coloums.map(c => 
            <th>{c}</th>
            )}</tr>
        </thead>

        <tbody> 
        { getPaginatedData().map((r, i) => (
     
     <RenderComponent key = {i} formCode = {r.formCode} formName = {r.formName}
     name = {r.name} appDate = {r.appDate}  appTime = {r.appTime} phone ={r.phone}/>
         ))}


    
      </tbody>
      </table>
         </div>

         <div className = "footer">
         <p>Showing 1 to 5 of {count} entries </p>
        <div className="pagination">

            
          {/* previous button */}
          <button
            onClick={goToPreviousPage}
            className={`prev ${currentPage === 1 ? 'disabled' : ''}`}
          >
            Prev
          </button>
    
          {/* show page numbers */}
          {getPaginationGroup().map((item, index) => (
            <button
              key={index}
              onClick={changePage}
              className={`paginationItem ${currentPage === item ? 'active' : null}`}
            >
              <span>{item}</span>
            </button>
          ))}
    
          {/* next button */}
          <button
            onClick={goToNextPage}
            className={`next ${currentPage === pages ? 'disabled' : ''}`}
          >
            Next
          </button>
        </div>
        </div>
     </>
    )
}

export default Paggination
