import logo from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
import Account from "./Account";

export default function Nav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <a href="index.html" className={classes.brand}>
            <img src={logo} alt="Learn with Miraz Vai" />
            <h3>Learn with Miraz Vai</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
