import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const ComplexPaginationContainer = () => {
  const {meta} = useLoaderData();
  // console.log(meta.pagination.page);
  const {pageCount, page} = meta.pagination;
// console.log(page);


 const { search, pathname } = useLocation();
//    console.log(pathname);
//  console.log(search);
  const navigate = useNavigate();

const handlePageChange = (pageNumber) => {
  const searchParams = new URLSearchParams(search);
  searchParams.set('page', pageNumber);
  // pathname = '/products'
 navigate(`${pathname}?${searchParams.toString()}`);
}

const addPageButton = ({pageNumber, activeClass}) => {
return  <button key={pageNumber}
         className={`btn btn-xs sm:btn-md border-none join-item ${activeClass? 'bg-base-300 border-base-200' : ''}`}
         onClick={() =>handlePageChange(pageNumber)}>{pageNumber}</button>
}

const renderPageButtons = () => {
    const pageButtons = [];
    // First button
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));
        // current  page button
    
        const totalPages = pageCount;

        // dots button
            if(page > 2){
            pageButtons.push(<button className='join-item btn btn-xs sm:btn-md' key='dots-1'>
                        ...
                    </button>) 
            }
        

        if(page !==1 && page !==totalPages) {
              pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
        }

          // empty button
if(page < totalPages -1){
 pageButtons.push(<button className='join-item btn btn-xs sm:btn-md' key='dots-2'>
            ...
        </button>)
}
       
  
        // Last button
      
    pageButtons.push(addPageButton({ pageNumber: totalPages, activeClass: page === totalPages }));
    return pageButtons;
}

if(pageCount <2) return null;
  return (
    <div className='mt-16 flex justify-end'>
      <div className="join">
         <button 
         className="btn btn-xs sm:btn-md join-item" 
         onClick={() =>{
          let prevPage = page - 1;
          if(prevPage < 1) prevPage = 1;
          handlePageChange(prevPage)}
         }>Prev</button>

         {renderPageButtons()}

         <button 
         className="btn btn-xs sm:btn-md join-item" 
         onClick={() =>{
          let nextPage = page +  1;
          if(nextPage > pageCount) nextPage = 1;
          handlePageChange(nextPage)
        }}
         >Next</button>
      </div>
    </div>
  )
}
export default ComplexPaginationContainer