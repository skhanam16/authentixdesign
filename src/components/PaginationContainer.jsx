import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
  const {meta} = useLoaderData();
  // console.log(meta.pagination.page);
  const {pageCount, page} = meta.pagination;
  const pages = Array.from({length:pageCount}, (_,index) =>{
    return index + 1;
  });

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
         {pages.map((pageNumber) => {
          return    <button key={pageNumber}
         className={`btn btn-xs sm:btn-md 
          border-none join-item ${pageNumber === page? 'bg-base-300 border-base-200' : ''}`}
         onClick={() =>handlePageChange(pageNumber)}>{pageNumber}</button>
         })}
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
export default PaginationContainer