import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchItems } from "../redux/Slice";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.db);

  if (data.products) {
    console.log(data);
  }

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <main className="container flex">
      <aside className=" basis-1/4 bg-orange-600 h-48"> </aside>
      <section className=" basis-3/4 bg-slate-600 h-48"></section>
    </main>
  );
}

export default Main;
