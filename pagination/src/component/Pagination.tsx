import { useState } from 'react';
import ReactPaginate from 'react-paginate';

type Props = {
  selected: number;
};

function Pagination() {
  const [theData, setTheData] = useState<number[]>();
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState(0);

  const itemPerPage = 50;
  const pagesVisited = currentPage * itemPerPage;

  const fetchItems = async () => {
    setLoading(true);
    try {
      const response = await fetch(`https://api.guildwars2.com/v2/items`);
      const data = await response.json();
      if (data) {
        setPageCount(Math.ceil(data.length / itemPerPage));
        setTheData(data);
      }
    } catch (err: unknown) {
      // eslint-disable-next-line no-console
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const displayItems =
    theData &&
    theData
      .slice(pagesVisited, pagesVisited + itemPerPage)
      .map((items: number) => {
        return (
          <div key={items} className="flex justify-center gap-10 p-2">
            <p>Item :</p>
            <p>{items}</p>
          </div>
        );
      });

  const changePage = ({ selected }: Props) => {
    setCurrentPage(selected);
  };

  return (
    <div className="">
      <div className="flex justify-center pt-5">
        <div className="flex justify-center p-10 rounded bg-teal-50 w-1/2">
          <button
            className="border border-purple-600 text-purple-600 font-montserrat py-2 px-8 font-medium rounded-xl hover:bg-purple-600 hover:text-white transition-all duration-300"
            type="button"
            onClick={fetchItems}
          >
            Display Items
          </button>
        </div>
      </div>
      {loading && <div>Loading...</div>}

      <div className="">{displayItems}</div>
      {theData && (
        <ReactPaginate
          className="bg-gray-200 flex flex-row justify-evenly items-center p-4"
          previousLabel={
            <button
              type="button"
              className="border border-purple-600 text-purple-600 font-montserrat p-2 font-md rounded hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Prev
            </button>
          }
          nextLabel={
            <button
              type="button"
              className="border border-purple-600 text-purple-600 font-montserrat p-2 font-md rounded hover:bg-purple-600 hover:text-white transition-all duration-300"
            >
              Next
            </button>
          }
          pageCount={pageCount}
          onPageChange={changePage}
          activeClassName="bg-purple-600 text-white p-2"
        />
      )}
    </div>
  );
}

export default Pagination;
