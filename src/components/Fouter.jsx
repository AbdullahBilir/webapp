import React from "react";
import {
  FaLongArrowAltRight,
  FaInstagramSquare,
  FaFacebookSquare,
  FaTwitterSquare,
  FaLinkedin,
  FaGooglePlusSquare,
} from "react-icons/fa";

function Fouter() {
  return (
    <div className=" fixed bottom-0 left-0  p-4 bg-slate-100 mt-20 w-full   ">
      <div className="container mx-auto flex justify-between  items-center mb-2">
        <div className="px-4 basis-1/5 ">
          <h1 className="font-bold text-slate-600">Enter the Fold</h1>
          <p className="text-sm text-slate-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit minima
            vero excepturi
          </p>
        </div>
        <div className="1/5">
          <h2 className="text-sm font-bold mb-1 text-slate-600">Destel için</h2>
          <ul className="text-xs cursor-pointer">
            <li className="mb-1 hover:underline">Support</li>
            <li className="mb-1 hover:underline">Block</li>
            <li className="hover:underline"> About</li>
          </ul>
        </div>
        <div className="basis-1/5 flex justify-center items-center ">
          <input
            type="text"
            className="py-1 px-4"
            placeholder="Email ile İletişim"
          ></input>
          <FaLongArrowAltRight className="inline-flex p-2 w-8 h-8 border bg-gray-400 rounded-sm hover:bg-gray-500 text-white" />
        </div>
        <div className="basis-1/5 flex gap-1 justify-center">
          <FaInstagramSquare className="text-2xl  text-gray-400 hover:text-gray-600" />
          <FaGooglePlusSquare className="text-2xl text-gray-400 hover:text-gray-600" />
          <FaFacebookSquare className="text-2xl text-gray-400 hover:text-gray-600" />
          <FaTwitterSquare className="text-2xl text-gray-400 hover:text-gray-600" />
          <FaLinkedin className="text-2xl text-gray-400 hover:text-gray-600" />
        </div>
      </div>
      <hr />
      <div className="container flex justify-center mt-2 items-center">
        <p className="text-xs">WM Tool, E-Commerce @Carpotion 2024 .</p>
      </div>
    </div>
  );
}

export default Fouter;
