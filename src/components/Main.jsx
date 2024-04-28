import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategory, fetchItems, getCategory } from "../redux/Slice";

function Main() {
  const [value, setİtem] = useState("");
  const [activeItem, setActiveItem] = useState(null);

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

  useEffect(() => {
    if (value) {
      dispatch(getCategory(value));
    } else {
      dispatch(fetchItems());
    }
    dispatch(fetchCategory());
  }, [dispatch, value]);

  return (
    <main className="container flex">
      <aside className=" basis-1/4 my-2">
        <div className="w-4/5 mx-auto">
          <ul>
            <li>
              <div className="flex flex-col">
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
                        className={`flex justify-between px-4 py-2 items-center bg-slate-100  ${
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
        {data.products &&
          data.products.map((eleman) => {
            return (
              <div
                key={eleman.id}
                className="w-1/5 border-solid  border-black m-2 hover:border-2 rounded-md h-72 flex flex-col justify-center items-center text-center cursor-pointer "
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
          })}
      </section>
    </main>
  );
}

export default Main;
