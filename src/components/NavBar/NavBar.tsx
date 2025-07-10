import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";

export default function NavBar() {
  return (
    <>
      <nav>
        <Link to={ROUTES.HOME}>Home</Link>
        <Link to={ROUTES.REGISTRATION}>Sign Up</Link>
        <Link to={ROUTES.GENDER_PREDICTOR}>Gender predictor</Link>
        <Link to={ROUTES.AGE_PREDICTOR}>Age predictor</Link>
        <Link to={ROUTES.COUNTER}>Counter</Link>
        <Link to={ROUTES.PONY}>Pony</Link>
        <Link to={ROUTES.ABOUT}>About</Link>
        <Link to={ROUTES.CONTACT}>Contact</Link>
      </nav>
    </>
  );
}
