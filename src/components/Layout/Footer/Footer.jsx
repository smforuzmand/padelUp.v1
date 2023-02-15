import { Link } from "react-router-dom";
import { MailIcon } from "../../icons/MailIcon";
import LogoImage from "../../../assets/img/PadelUp_light.png";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav>
        <div className={styles.companyInfo}>
          <img src={LogoImage} alt="PadelUp" width={300} />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos fugiat magni est, ex facere soluta sunt maiores dolorum
            eius nulla illo quas assumenda alias amet! Ea iste illo laborum
            temporibus.
          </p>
        </div>
        <div className={styles.navbar}>
          <h3>MENY</h3>
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
          <h3>Kontakt</h3>
          <Link to="/kontakt" className="button">
            <MailIcon />
            Kontakta oss
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
