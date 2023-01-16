import styles from "./Navbar.module.scss";
import logoImg from "../../../assets/img/PadelUp_light.png";
import { Link, NavLink } from "react-router-dom";
import { MailIcon } from "../../icons/MailIcon";
import { LoginIcon } from "../../icons/LoginIcon";

const Navbar = (props) => {
  return (
    <nav
      className={styles.navbar}
      style={{
        backgroundColor: `rgba(var(--color-DarkBlue-rgb), ${
          props.bgOpacity ?? 1
        })`,
      }}
    >
      <div className={`${styles["navbar--content"]}`}>
        <img src={logoImg} alt="" />
        <ul className={styles["navbar--list"]}>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              to="/"
            >
              hem
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              to="/omoss"
            >
              om oss
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              to="/medlemmar"
            >
              medlemmar
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? styles.activeLink : "")}
              to="/scoreboard"
            >
              score board
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${({ isActive }) =>
                isActive ? styles.activeLink : ""} button`}
              to="/kontakt"
            >
              <MailIcon /> kontakt
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`${({ isActive }) =>
                isActive ? styles.activeLink : ""} button button__blue `}
              to="/loggain"
            >
              <LoginIcon />
              logga in
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
