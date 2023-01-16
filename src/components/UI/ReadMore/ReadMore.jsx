import styles from "./ReadMore.module.scss";
import pilIcon from "../../../assets/icons/PadelUp_icon_pil.svg";

const ReadMore = (props) => {
  return (
    <div className={styles.ReadMore}>
      <img src={pilIcon} alt="" />
      <a href="#">{props.text ?? "Las Mer"}</a>
    </div>
  );
};

export default ReadMore;
