import styles from "./LogoCard.module.scss";
import moduleName from "module";
import Icon1 from "../../../assets/icons/logo-1.svg";
import Icon2 from "../../../assets/icons/logo-2.svg";
import Icon3 from "../../../assets/icons/logo-3.svg";

const LogoCard = () => {
  return (
    <div className={styles.card}>
      <img src={Icon2} alt="Logo" />
      <img src={Icon3} alt="Logo" />
      <img src={Icon1} alt="Logo" />
    </div>
  );
};

export default LogoCard;
