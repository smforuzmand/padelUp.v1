import styles from "./Login.module.scss";
import BgImage from "../../components/UI/BgImage/BgImage";
import Login from "../../components/Login/Login";
import HeadingImage from "../../assets/img/PadelUp_bild_slide_startsida.jpg";

const LoginPage = () => {
  return (
    <main>
      <BgImage center={true} height="90vh" imgUrl={HeadingImage}>
        <div className={styles.login}>
          <Login />
        </div>
      </BgImage>
    </main>
  );
};

export default LoginPage;
