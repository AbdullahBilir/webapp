import React from "react";

import { IoIosArrowDown } from "react-icons/io";

function Main({ data }) {
  return (
    <main className="container flex">
      <aside className=" basis-1/4 my-2">
        <div className="w-4/5 mx-auto">
          <ul>
            <li>
              <div className="flex flex-col">
                <div className="font-bold py-2 px-4">
                  <div className="flex items-center justify-between  cursor-pointer">
                    Cinsiyet <IoIosArrowDown />
                  </div>
                </div>
                <div className="flex justify-between px-4 py-2 my-2 items-center bg-slate-100  ">
                  Erkek <input type="checkbox" />
                </div>
                <div className="flex justify-between px-4 py-2 mb-2  items-center bg-slate-100  ">
                  Kadın <input type="checkbox" />
                </div>
                <div className="flex justify-between px-4 py-2 mb-2  items-center bg-slate-100  ">
                  Erkek Çocuk <input type="checkbox" />
                </div>
                <div className="flex justify-between px-4 py-2 mb-2 items-center bg-slate-100  ">
                  Kız Çocuk <input type="checkbox" />
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <div className="font-bold py-2 px-4">
                  <div className="flex items-center justify-between  cursor-pointer">
                    Kategoriler <IoIosArrowDown />
                  </div>
                </div>
                <div className="flex justify-between px-4 py-2 my-2 items-center bg-slate-100  ">
                  Giyim <input type="checkbox" />
                </div>
                <div className="flex justify-between px-4 py-2 mb-2  items-center bg-slate-100  ">
                  Takı <input type="checkbox" />
                </div>
                <div className="flex justify-between px-4 py-2 mb-2  items-center bg-slate-100  ">
                  Elektronik <input type="checkbox" />
                </div>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <div className="font-bold py-2 px-4">
                  <div className="flex items-center justify-between  cursor-pointer">
                    Ürünler <IoIosArrowDown />
                  </div>
                </div>
                <div className="flex justify-between px-4 py-2 my-2 items-center bg-slate-100  ">
                  Çantalar <input type="checkbox" />
                </div>
                <div className="flex justify-between px-4 py-2 mb-2  items-center bg-slate-100  ">
                  Yüzükler <input type="checkbox" />
                </div>
                <div className="flex justify-between px-4 py-2 mb-2  items-center bg-slate-100  ">
                  Bileklikler <input type="checkbox" />
                </div>
                <div className="flex justify-between px-4 py-2 mb-2  items-center bg-slate-100  ">
                  Monitörler <input type="checkbox" />
                </div>
                <div className="flex justify-between px-4 py-2 mb-2  items-center bg-slate-100  ">
                  Ssd <input type="checkbox" />
                </div>
                <div className="flex justify-between px-4 py-2 mb-2  items-center bg-slate-100  ">
                  Montlar <input type="checkbox" />
                </div>
                <div className="flex justify-between px-4 py-2 mb-2  items-center bg-slate-100  ">
                  Thsird <input type="checkbox" />
                </div>
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
