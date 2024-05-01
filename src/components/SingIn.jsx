import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleClick = () => {
    const array = JSON.parse(localStorage.getItem("userArray"));
    const singArray = array.filter(
      (ary) => ary.email === email && ary.password === password
    );
    singArray.forEach((element) => {
      if (element.email === email && element.password === password) {
        navigate("/");
      }
    });
  };

  return (
    <div className="container flex justify-center items-center h-[650px] ">
      <div className=" p-8 bg-slate-100 w-[350px] rounded-md shadow-md">
        <h2 className="text-3xl text-slate-600 ">Sing İn</h2>
        <div className="my-3 ">
          <p className="my-2">Email</p>
          <input
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="py-2 w-full px-4"
          />
        </div>
        <div className="my-3 ">
          <p className="my-2">Parola</p>
          <input
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="py-2 w-full px-4 "
          />
        </div>

        <div className="mt-4 text-center flex gap-2 justify-center">
          <input
            type="submit"
            value={"Giriş Yap"}
            onClick={handleClick}
            className="text-center px-4 py-1 bg-white rounded-md cursor-pointer"
          />
          <Link to={"/singout"}>
            <input
              type="submit"
              value={"Kayıt OL"}
              className="text-center px-4 py-1 bg-white rounded-md cursor-pointer"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingIn;
