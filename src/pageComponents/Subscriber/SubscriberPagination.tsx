import { useContext } from "react"
import ReactPaginate from "react-paginate"

//context
import { SubscribeContext } from "../../context/SubscriberContext"

const SubscriberPagination = () => {
  const { pageCount, handlePageClick } = useContext(SubscribeContext)
  return (
    <div>
      <ReactPaginate
        previousLabel="🠔 Previous"
        breakLabel="..."
        nextLabel="Next 🠖"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeClassName="active"
      />
    </div>
  )
}

export default SubscriberPagination
