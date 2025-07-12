import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import styles from "./NavBar.module.css"

export default function NavBar() {
  const classSelector = ({ isActive }: { isActive: boolean }) => {
    return isActive ? styles.navLinkActive : styles.navLink;
  };
  
  return (
    <>
      <nav className={styles.navBar}>
        <NavLink to={ROUTES.HOME} className={classSelector}>
          Home
        </NavLink>
        <NavLink to={ROUTES.REGISTRATION} className={classSelector}>
          Sign Up
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
        <NavLink to={ROUTES.USERS} className={classSelector}>
          Users
        </NavLink>
        <NavLink to={ROUTES.ACCOUNT} className={classSelector}>
          Account
        </NavLink>
      </nav>
    </>
  );
}
