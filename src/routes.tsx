import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "./components/AppContext";
import Conta from "./pages/Conta";
import ContaInfo from "./pages/ContaInfo";
import Home from "./pages/Home";
import ContaInfo2 from "./pages/ContaInfo2";

const MainRoutes = () => {
  const { isLoggedIn } = useContext(AppContext);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/conta/:id" element={isLoggedIn ? <Conta /> : <Home />} />
      <Route
        path="/infoconta"
        element={isLoggedIn ? <ContaInfo2 /> : <Home />}
      />
    </Routes>
  );
};

export default MainRoutes;
