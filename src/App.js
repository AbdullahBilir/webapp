import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { fetchItems } from "./redux/Slice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.db);
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main data={data} />} />,
        </Routes>
      </Router>
    </>
  );
}

export default App;
