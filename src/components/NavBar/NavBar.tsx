import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import styles from "./NavBar.module.css";
import { useCurrentUser } from "../../hooks/useCurrentUser";
import { useCounter } from "../../hooks/useCounter";

export default function NavBar() {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles.navLinkActive : styles.navLink;
  };

  const { user, setIsAuthorized, isAuthorized } = useCurrentUser();

  const { counter } = useCounter();

  function handleLogout() {
    setIsAuthorized(false);
  }

  return (
    <>
      <nav className="flex justify-center items-center gap-4 flex-wrap bg-pink-200 min-h-14 p-6">
        <NavLink to={ROUTES.HOME} className={classSelector}>
          Home
        </NavLink>
        <NavLink to={"/gallery"} className={classSelector}>
          Gallery
        </NavLink>
        <NavLink to={"/toggle-card"} className={classSelector}>
          Toggle Card
        </NavLink>
        <NavLink to={ROUTES.GENDER_PREDICTOR} className={classSelector}>
          Gender predictor
        </NavLink>
        <NavLink to={ROUTES.AGE_PREDICTOR} className={classSelector}>
          Age predictor
        </NavLink>
        <NavLink to={ROUTES.COUNTER} className={classSelector}>
          Counter
        </NavLink>
        <NavLink to={ROUTES.PONY} className={classSelector}>
          Pony
        </NavLink>
        <NavLink to={ROUTES.ABOUT} className={classSelector}>
          About
        </NavLink>
        <NavLink to={ROUTES.CONTACT} className={classSelector}>
          Contact
        </NavLink>
        <NavLink to={ROUTES.PRODUCTS} className={classSelector}>
          Products
        </NavLink>
        <NavLink to={ROUTES.ADD_PRODUCT} className={classSelector}>
          Add Product
        </NavLink>
        <NavLink to={ROUTES.USERS} className={classSelector}>
          Users
        </NavLink>
        <NavLink to={ROUTES.ACCOUNT} className={classSelector}>
          Account
        </NavLink>
        <NavLink to={ROUTES.REGISTRATION} className={classSelector}>
          Sign Up
        </NavLink>
        <NavLink to={ROUTES.LOGIN} className={classSelector}>
          Sign In
        </NavLink>

        {user?.email}

        {counter}

        {isAuthorized ? (
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        ) : null}
      </nav>
    </>
  );
}
