import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function SingOut() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userDataArray, setUserDataArray] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("userArray");
    if (storedData) {
      setUserDataArray(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userArray", JSON.stringify(userDataArray));
  }, [userDataArray]);

  const handleClick = (e) => {
    e.preventDefault();

    const newUser = {
      email: email,
      password: password,
    };

    setUserDataArray([...userDataArray, newUser]);
  };

  return (
    <div className="container flex justify-center items-center h-[650px] ">
      <div className=" p-8 bg-slate-100 w-[350px] rounded-md shadow-md">
        <h2 className="text-3xl text-slate-600 ">Sing Out</h2>
        <form className="form-control" onSubmit={handleClick}>
          <div className="my-3 ">
            <p className="my-2">Email</p>
            <input
              value={email}
              type="email"
              className="py-2 w-full px-4"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="my-3 ">
            <p className="my-2">Parola</p>
            <input
              value={password}
              type="password"
              className="py-2 w-full px-4 "
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="mt-4 text-center flex gap-2 justify-center">
            <Link to={"/singin"}>
              <button
                type="button"
                className="text-center px-4 py-1 bg-white rounded-md cursor-pointer"
              >
                Giriş Yap
              </button>
            </Link>
            <input
              type="submit"
              value={"Kayıt OL"}
              className="text-center px-4 py-1 bg-white rounded-md cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SingOut;
