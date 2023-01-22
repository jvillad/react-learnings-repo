import { useState } from 'react';
import ReactPaginate from 'react-paginate';

function Pagination() {
  const [theData, setTheData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [pageCount, setPageCount] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(0);
  const itemPerPage = 50;
  const pagesVisited = pageNumber * itemPerPage;

  const fetchItems = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://api.guildwars2.com/v2/items`);
      const data = await response.json();
      if (data) {
        setPageCount(Math.ceil(data.length / itemPerPage));
        setTheData(data);
      }
    } catch (err: any) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const displayItems =
    theData &&
    theData
      .slice(pagesVisited, pagesVisited + itemPerPage)
      .map((items: any) => {
        return <p key={items}>Item #: {items}</p>;
      });

  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  return (
    <div>
      <button type="button" onClick={fetchItems}>
        Click me
      </button>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <div>{displayItems}</div>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName="paginationBtns"
        nextLinkClassName="nextBtn"
        previousLinkClassName="previousBtn"
        activeClassName="paginationActive"
      />
    </div>
  );
}

export default Pagination;
