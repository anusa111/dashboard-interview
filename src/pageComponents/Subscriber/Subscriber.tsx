import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

//components
import ComponentHeader from "../../components/ComponnentHeader/ComponentHeader";

//hooks
import useFetchData from "../../hooks/useFetchData";

//interface
import { ISubscriberList } from "../../interface/interface";

//css
import "./subscriber.css";

const Subscriber = () => {
  const {
    fetchedData: subscriberData,
    loading,
  }: { fetchedData: any; loading: boolean } = useFetchData(
    "/json/subscriptions.json",
  );

  const itemsPerPage: any = 10;
  const [pageCount, setPageCount] = useState<any>(null);
  const [itemOffset, setItemOffset] = useState(0);
  const [currentItems, setCurrentItems] = useState<any>(null);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(subscriberData?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(subscriberData?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, subscriberData]);

  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % subscriberData?.length;
    setItemOffset(newOffset);
  };

  if (loading) {
    return <div className="flex-center-layout">Loading</div>;
  } else if (subscriberData) {
    return (
      <div className="flex-col-layout">
        <ComponentHeader
          data={{
            title: "Subscriber List",
          }}
        />
        <div className="">
          <div className="flex-center-layout">
            <table className="">
              <thead>
                <div>
                  <tr>
                    <th>Subscription Id</th>
                    <th>Package Name</th>
                    <th>User Id</th>
                    <th>Expiration Date</th>
                  </tr>
                </div>
              </thead>

              <tbody>
                {currentItems?.map((subscriber: ISubscriberList) => {
                  const {
                    id,
                    user_id,
                    package: package_name,
                    expires_on,
                  } = subscriber;
                  return (
                    <div>
                      <Link to={`/user/${user_id}`} className="text">
                        <tr>
                          <td>{id}</td>
                          <td>{package_name}</td>
                          <td>{user_id}</td>
                          <td>{expires_on}</td>
                        </tr>
                      </Link>
                    </div>
                  );
                })}
              </tbody>
            </table>
          </div>

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
      </div>
    );
  } else {
    return <div>Sorry !! Something went wrong</div>;
  }
};

export default Subscriber;
