import { LoadingSpinner } from "../../icons/LoadingSpinner";
import styles from "./Spinner.module.scss";

const Spinner = (props) => {
  return (
    <span className={styles.spinner}>
      <LoadingSpinner />
    </span>
  );
};

export default Spinner;
