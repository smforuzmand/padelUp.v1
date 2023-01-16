import styles from "./Footer.module.scss";
import LogoImage from "../../../assets/img/PadelUp_light.png";
import { Link } from "react-router-dom";
import { MailIcon } from "../../icons/MailIcon";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <div className={styles.companyInfo}>
          <img width={300} src={LogoImage} alt="" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos fugiat magni est, ex facere soluta sunt maiores dolorum
            eius nulla illo quas assumenda alias amet! Ea iste illo laborum
            temporibus.
          </p>
        </div>
        <div className={styles.navbar}>
          <div className={styles.header}>
            <h3>MENY</h3>
          </div>
          <ul>
            <li>
              <Link to="/">&rsaquo; Hem</Link>
            </li>
            <li>
              <Link to="/omoss">&rsaquo; om oss</Link>
            </li>
            <li>
              <Link to="/medlemmar">&rsaquo; vara medlemmar</Link>
            </li>
            <li>
              <Link to="/scoreboard">&rsaquo; scoreboard</Link>
            </li>
            <li>
              <Link to="/loggain">&rsaquo; logga in</Link>
            </li>
          </ul>
        </div>
        <div className={styles.contact}>
          <div className={styles.header}>
            <h3>Kontakt</h3>
          </div>
          <Link to="/kontakt" className="button">
            <MailIcon />
            Kontact Oss
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
