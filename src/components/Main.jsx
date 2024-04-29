import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, fetchItems, getCategory } from "../redux/Slice";
import Loading from "./Loading";
import ReactPaginate from "react-paginate";

function Main() {
  const [value, setİtem] = useState("");
  const [activeItem, setActiveItem] = useState(null);
  const [sırala, setSort] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  const dispatch = useDispatch();

  const data = useSelector((state) => state.db);

  const veri = useSelector((state) => state.db);

  const handleChange = (item, i) => {
    if (value) {
      setİtem("");
    }

    setİtem(item);

    setActiveItem(i === activeItem ? null : i);
  };

  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const itemsPerPage = 8;
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = data.products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(data.products.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const selectedPage = event.selected;
    console.log(`User requested page number ${selectedPage}`);
    setCurrentPage(selectedPage);
    const newOffset = (selectedPage * itemsPerPage) % data.products.length;
    console.log(
      `User requested page number ${selectedPage}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (value) {
      dispatch(getCategory(value));
    } else {
      dispatch(fetchItems());
    }
    dispatch(fetchCategory());
  }, [dispatch, value]);

  console.log(data.products);

  return (
    <main className="container ">
      <div className="w-full p-4 bg-slate-100 my-4 mx-4 flex justify-end items-end">
        <select
          onChange={(e) => {
            setSort(e.target.value);
          }}
          className=" border-none py-2 px-4 bg-slate-200 rounded-md"
        >
          <option value={""}>Seçiniz</option>
          <option value={"dec"}>Artan</option>
          <option value={"inc"}>Azalan</option>
        </select>
      </div>
      <div className="flex">
        <aside className=" basis-1/4 my-2 ">
          <div className="w-4/5 mx-auto">
            <ul>
              <li>
                <div className="flex flex-col ">
                  <div className="font-bold py-2 px-4">
                    <div className="flex items-center justify-between  cursor-pointer">
                      Category <IoIosArrowDown />
                    </div>
                  </div>
                  {veri.category &&
                    veri.category?.map((eleman, i) => {
                      return (
                        <div
                          key={i}
                          className={`flex justify-between px-4 py-2 items-center  bg-slate-100  ${
                            i === activeItem ? "active" : ""
                          }`}
                          onClick={() => handleChange(eleman, i)}
                        >
                          <p className={` py-2 rounded-md px-4 w-full`}>
                            {eleman}
                          </p>
                        </div>
                      );
                    })}
                </div>
              </li>
            </ul>
          </div>
        </aside>
        <section className=" basis-3/4 flex flex-wrap justify-center ">
          {data.loading === true ? (
            <Loading />
          ) : (
            currentItems
              .slice()
              .sort((a, b) => {
                return sırala === "inc"
                  ? a.rating.count - b.rating.count
                  : sırala === "dec"
                  ? b.rating.count - a.rating.count
                  : null;
              })
              ?.map((eleman) => {
                return (
                  <div
                    key={eleman.id}
                    className={`w-1/5 border-solid  border-black m-2 hover:border-2 rounded-md h-72 flex flex-col justify-center items-center text-center cursor-pointer  `}
                  >
                    <img
                      className=" w-28 h-28  object-contain my-1"
                      src={eleman.image}
                    />
                    <h1 className=" text-xs font-bold my-1">
                      {eleman.title.substring(0, 35)}...
                    </h1>
                    <p className="text-xs my-1">
                      {eleman.description.substring(0, 45)}...
                    </p>
                    <p>{eleman.rating.count} TL</p>
                    <button className="btn bg-indigo-600 text-white px-2 py-1 rounded-md my-2">
                      Sepete Ekle
                    </button>
                  </div>
                );
              })
          )}
        </section>
      </div>
      <div className="container mx-auto   w-3/4 ">
        <ReactPaginate
          className="paginate "
          breakLabel="..."
          nextLabel=" >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< "
          renderOnZeroPageCount={null}
          activeClassName="active-page"
        />
      </div>
    </main>
  );
}

export default Main;
