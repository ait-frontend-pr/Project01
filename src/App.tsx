import "./App.css";
import Counter from "./components/Counter/Counter";
import { AgePredictor } from "./components/AgePredictor/AgePredictor";
import GenderPredictor from "./components/GenderPredictor/GenderPredictor";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./pages/Registration/Registration";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import { MainLayout } from "./layout/MainLayout";
import { PonyLayout } from "./layout/PonyLayout";
import MyPony from "./components/MyPony/MyPony";
import BuyPony from "./components/BuyPony/BuyPony";
import { ROUTES } from "./constants/routes";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path={ROUTES.REGISTRATION} element={<Registration />} />
            <Route
              path={ROUTES.GENDER_PREDICTOR}
              element={<GenderPredictor />}
            />
            <Route path={ROUTES.AGE_PREDICTOR} element={<AgePredictor />} />
            <Route path={ROUTES.COUNTER} element={<Counter />} />
            <Route path={ROUTES.PONY} element={<PonyLayout />}>
              <Route path={ROUTES.PONY_MY_PONY} element={<MyPony />} />
              <Route path={ROUTES.PONY_BUY_PONY} element={<BuyPony />} />
            </Route>
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACT} element={<Contact />} />
            {/*  */}
            <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
