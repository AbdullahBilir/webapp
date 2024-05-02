import Header from "./components/Header";
import Main from "./components/Main";
import SingIn from "./components/SingIn";
import Fouter from "./components/Fouter";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingOut from "./components/SingOut";
import Sepet from "./components/Sepet";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />,
          <Route path="/singin" element={<SingIn />} />
          <Route path="/singout" element={<SingOut />} />
          <Route path="/sepetim" element={<Sepet />} />
        </Routes>
        <Fouter />
      </Router>
    </>
  );
}

export default App;
