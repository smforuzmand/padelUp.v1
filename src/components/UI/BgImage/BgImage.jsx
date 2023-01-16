import styles from "./BgImage.module.scss";

const BgImage = (props) => {
  return (
    <div
      style={{
        height: `${props.height ?? "100vh"}`,
        background: `url(${props.imgUrl ?? ""})`,
        backgroundPosition: `${props.position ?? "center"}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className={`${styles.heading} ${props.center ? "center" : ""}`}
    >
      {props.children}
    </div>
  );
};

export default BgImage;
