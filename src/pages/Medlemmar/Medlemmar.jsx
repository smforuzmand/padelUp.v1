import styles from "./Medlemmar.module.scss";
import Icon1 from "../../assets/icons/logo-1.svg";
import Icon2 from "../../assets/icons/logo-2.svg";
import Icon3 from "../../assets/icons/logo-3.svg";
import ContactImage from "../../assets/img/PU_bg-slider-kontakt-form.jpg";
import Contact from "../../components/Contact/Contact";
import BgImage from "../../components/UI/BgImage/BgImage";

const header = "Intresserad av medlemskap?";
const subHeader = "Lorem ipsum dolor sit amet consectetur adipisicing.";

const MedelmmarPage = () => {
  return (
    <main>
      <div className={styles.helper}></div>
      {/* cards */}
      <div className={styles.cardContainer}>
        <div>
          <div className={styles.card}>
            <div>
              <img width={200} src={Icon2} alt="" />
            </div>
            <h3>Formup Sweden</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate dolore, ratione fugiat eum ducimus facere.
            </p>

            <a href="" className="button button__blue">
              visa hemsida
            </a>
          </div>
          <div className={styles.card}>
            <div>
              <img width={200} src={Icon3} alt="" />
            </div>
            <h3>Formup Sweden</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate dolore, ratione fugiat eum ducimus facere.
            </p>

            <a href="" className="button button__blue">
              visa hemsida
            </a>
          </div>
          <div className={styles.card}>
            <div>
              <img width={200} src={Icon1} alt="" />
            </div>
            <h3>Formup Sweden</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cupiditate dolore, ratione fugiat eum ducimus facere.
            </p>

            <a href="" className="button button__blue">
              visa hemsida
            </a>
          </div>
        </div>
      </div>
      {/* contact */}
      <BgImage height="100vh" imgUrl={ContactImage}>
        <div className="container center height-100">
          <Contact header={header} subHeader={subHeader} />
        </div>
      </BgImage>
    </main>
  );
};

export default MedelmmarPage;
