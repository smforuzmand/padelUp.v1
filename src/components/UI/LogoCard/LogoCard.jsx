import styles from "./LogoCard.module.scss";
import moduleName from "module";
import Icon1 from "../../../assets/icons/logo-1.svg";
import Icon2 from "../../../assets/icons/logo-2.svg";
import Icon3 from "../../../assets/icons/logo-3.svg";

const logos = [
  { src: Icon1, alt: "Logo 1" },
  { src: Icon2, alt: "Logo 2" },
  { src: Icon3, alt: "Logo 3" },
];

const LogoCard = () => {
  return (
    <div className={styles.card}>
      {logos.map((logo, index) => (
        <img key={index} src={logo.src} alt={logo.alt} />
      ))}
    </div>
  );
};

export default LogoCard;
