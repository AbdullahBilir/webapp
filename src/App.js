import Header from "./components/Header";
import Main from "./components/Main";
import SingIn from "./components/SingIn";
import Fouter from "./components/Fouter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />,
          <Route path="/singIn" element={<SingIn />} />
        </Routes>
        <Fouter />
      </Router>
    </>
  );
}

export default App;
