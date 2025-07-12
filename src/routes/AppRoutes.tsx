import { Route, Routes } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { MainLayout } from "../layout/MainLayout";
import { AgePredictor } from "../components/AgePredictor/AgePredictor";
import BuyPony from "../components/BuyPony/BuyPony";
import Counter from "../components/Counter/Counter";
import GenderPredictor from "../components/GenderPredictor/GenderPredictor";
import MyPony from "../components/MyPony/MyPony";
import { PonyLayout } from "../layout/PonyLayout";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Registration from "../pages/Registration/Registration";
import AccountLayout from "../layout/AccountLayout";
import AccountSettings from "../components/AccountSettings/AccountSettings";
import AccountInfo from "../components/AccountInfo/AccountInfo";
import { ProductsList } from "../pages/ProductsList/ProductsList";
import ProductPage from "../pages/ProductPage/ProductPage";
import { UsersList } from "../pages/UsersList/UsersList";
import UserPage from "../pages/UserPage/UserPage";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path={ROUTES.HOME} element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path={ROUTES.REGISTRATION} element={<Registration />} />
          <Route path={ROUTES.GENDER_PREDICTOR} element={<GenderPredictor />} />
          <Route path={ROUTES.AGE_PREDICTOR} element={<AgePredictor />} />
          <Route path={ROUTES.COUNTER} element={<Counter />} />
          <Route path={ROUTES.PONY} element={<PonyLayout />}>
            <Route path={ROUTES.PONY_MY_PONY} element={<MyPony />} />
            <Route path={ROUTES.PONY_BUY_PONY} element={<BuyPony />} />
          </Route>
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path={ROUTES.CONTACT} element={<Contact />} />
          <Route path={ROUTES.PRODUCTS} element={<ProductsList />} />
          <Route path={ROUTES.PRODUCTS_ID} element={<ProductPage />}/>
          <Route path={ROUTES.USERS} element={<UsersList />}/>
          <Route path={ROUTES.USERS_ID} element={<UserPage />}/>
          {/*  */}
          <Route path={ROUTES.NOT_FOUND} element={<NotFound />} />
          {/*  */}
          <Route path={ROUTES.ACCOUNT} element={<AccountLayout />}>
            <Route
              path={ROUTES.ACCOUNT_SETTINGS}
              element={<AccountSettings />}
            />
            <Route path={ROUTES.ACCOUNT_INFO} element={<AccountInfo />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}
