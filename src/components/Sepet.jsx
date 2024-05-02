import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteElement } from "../redux/LoginSlice";

function Sepet() {
  const dispatch = useDispatch();

  const eleman = useSelector((state) => state.login);

  const deleteItem = (deleteItem) => {
    dispatch(deleteElement({ deleteItem }));
  };

  let count = 0;
  return (
    <div className="container my-4 mb-44 ">
      {eleman.products.length === 0 && (
        <div className="text-4xl flex justify-center my-10">
          Sepetinizde Ürün Bulunmamaktadır
        </div>
      )}

      {eleman.products.map((item) => {
        return (
          <div
            key={item.id}
            className="flex w-full justify-between items-center  mb-8"
          >
            <img className="w-1/6 h-32 object-contain  " src={item.image} />
            <div className="w-1/3 text-xl font-bold">{item.title}</div>

            <div className="w-1/6 text-xl font-bold">
              Price :{item.price} TL
            </div>
            <button
              onClick={() => {
                deleteItem(item.id);
              }}
              className="btn bg-red-500 py-2 px-4 rounded-md text-white"
            >
              Ürünü Sil
            </button>
          </div>
        );
      })}

      <div className="flex justify-end">
        {eleman.products.map((item) => {
          {
            count += item.price;
          }
        })}
        <div className="text-xl">Total Price: {count} TL</div>
      </div>
    </div>
  );
}

export default Sepet;
