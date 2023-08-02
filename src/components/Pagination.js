import React from 'react'
import './Pagination.css'

const Pagination = ({
    currentPage, setCurrentPage, postsPerPage, setPostPerPage, prevPageHandle, nextPageHandle
}) => {

    const pageNumbers = [];
    for (let i=1; i<=Math.ceil(100/postsPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <div>Pagination
        <button onClick={prevPageHandle}
                style={{display : currentPage === 1 ? 'none' : 'block'}}
        >이전</button>
        <button onClick={nextPageHandle}
                style={{display : currentPage === pageNumbers.length ? 'none' : 'block'}}
        >다음</button>
        <ul className='pagination'>
        {
            pageNumbers.map(number=>(
                <li onClick={()=>setCurrentPage(number)}>{number}</li>
            ))
        }
        </ul>
    </div>
  )
}

export default Pagination