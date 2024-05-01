import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../redux/LoginSlice";

function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [control, setControl] = useState(false);
  const [login, setLogin] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {}, [dispatch, login]);

  const handleClick = (e) => {
    e.preventDefault();

    const array = JSON.parse(localStorage.getItem("userArray"));
    const singArray = array.filter(
      (ary) => ary.email === email && ary.password === password
    );

    if (singArray.length > 0 && email && password) {
      dispatch(userLogin({ name: singArray[0].name }));
      navigate("/");
    } else {
      setControl(true);

      const timer = setTimeout(() => {
        setControl(false);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  };

  return (
    <div className="container flex justify-center items-center h-[650px] ">
      <div className=" p-8 bg-slate-100 w-[350px] rounded-md shadow-md">
        <h2 className="text-3xl text-slate-600 ">Sing İn</h2>
        {control && (
          <div className="my-2 py-2 px-4 bg-red-200 text-red-400 text-xs  rounded-md font-semibold">
            ! Girilen email veya şifre hatalı
          </div>
        )}
        <form onSubmit={handleClick}>
          <div className="my-3 ">
            <p className="my-2">Email</p>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="py-2 w-full px-4"
            />
          </div>
          <div className="my-3 ">
            <p className="my-2">Parola</p>
            <input
              type="password"
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
              className="text-center px-4 py-1 bg-white rounded-md cursor-pointer"
            />
            <Link to={"/singout"}>
              <input
                type="button"
                value={"Kayıt OL"}
                className="text-center px-4 py-1 bg-white rounded-md cursor-pointer"
              />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SingIn;
