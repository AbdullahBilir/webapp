import React from "react";
import { FaRegUser, FaRegHeart } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="container  flex py-2  items-center justify-between mb-4 flex-wrap">
        <div className="text-4xl ">E-commerce</div>
        <div className=" flex basis-2/5 items-center justify-end">
          <input
            className="w-96 py-1 px-4 rounded text-black relative  "
            type="text"
            placeholder="Aradığınız Ürün veya Marka Girin... "
          />
          <FaSearch className="relative right-7 top-0 text-amber-600 hover:text-red-300 cursor-pointer" />
        </div>
        <div className="flex basis-1/4  justify-between ">
          <div className="flex items-center gap-1 hover:text-amber-600 cursor-pointer transition-all duration-300">
            <Link className="flex items-center gap-1" to="/singIn">
              <FaRegUser className="" />
              Giriş Yapınız
            </Link>
          </div>
          <div className="flex items-center gap-1 hover:text-amber-600 cursor-pointer transition-all duration-300 ">
            <FaRegHeart className="" />
            Favorilerim
          </div>
          <div className="flex items-center gap-1 hover:text-amber-600 cursor-pointer transition-all duration-300">
            <FiShoppingCart className="text-lg" />
            Sepetim
          </div>
        </div>
      </div>
      <hr className="container font-bold" />
    </header>
  );
}

export default Header;
