import styles from "./BgImage.module.scss";

const BgImage = ({
  height = "100vh",
  imgUrl = "",
  position = "center",
  center = false,
  children,
}) => (
  <div
    style={{
      height,
      background: `url(${imgUrl})`,
      backgroundPosition: position,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
    className={`${styles.heading} ${center ? "center" : ""}`}
  >
    {children}
  </div>
);

export default BgImage;
