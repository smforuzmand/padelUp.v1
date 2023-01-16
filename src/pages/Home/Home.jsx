import BgImage from "../../components/UI/BgImage/BgImage";
import styles from "./HomePage.module.scss";
import HeadingImage from "../../assets/img/PadelUp_bild_slide_startsida.jpg";
import CTAImage from "../../assets/img/PadelUp_bild_bakgrund03.jpg";
import ScoreBoardImage from "../../assets/img/PU_bg-slider-scoreboard.jpg";
import ReadMore from "../../components/UI/ReadMore/ReadMore";
import LogoCard from "../../components/UI/LogoCard/LogoCard";
import ScoreBoard from "../../components/UI/ScoreBoard/ScoreBoard";
import InfoImage from "../../assets/img/PadelUp_bild_bakgrund01.jpg";
import checkIcon from "../../assets/icons/PadelUp_icon_check.svg";
import Spinner from "../../components/UI/Spinner/Spinner";

const Home = () => {
  return (
    <main>
      {/* heading */}
      <BgImage center={true} height="100vh" imgUrl={HeadingImage}>
        <div className={styles.heading}>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Laboriosam
            dicta.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Laboriosam
            dicta.
          </p>
          <div>
            <ReadMore />
          </div>
        </div>
      </BgImage>
      <div className={`${styles.part2} container`}>
        <div className={styles["part2--content"]}>
          <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            nobis. Quo voluptate quas unde repudiandae maxime, vero sed autem
            tenetur ratione adipisci, placeat voluptas praesentium eaque
            distinctio consequatur odit blanditiis?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum,
            nobis. Quo voluptate quas unde repudiandae maxime, vero sed autem
            tenetur ratione adipisci, placeat voluptas praesentium eaque
            distinctio consequatur odit blanditiis?
          </p>

          <div>
            <a href="" className="button">
              Las Mer
            </a>
            <a href="" className="button">
              Gasta padelup
            </a>
          </div>
        </div>
        <LogoCard />
      </div>
      <BgImage center={true} height="90vh" imgUrl={CTAImage}>
        <div className={styles.cta}>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Laboriosam
            dicta.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit Laboriosam
            dicta. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatem, dolor.
          </p>
          <div>
            <a href="" className="button">
              Las Mer
            </a>
            <a href="" className="button">
              Gasta padelup
            </a>
          </div>
        </div>
      </BgImage>
      {/* score board */}
      <BgImage height="80vh" imgUrl={ScoreBoardImage}>
        <div className={styles.ScoreBoard}>
          <h2>Score Board Padelup 2023</h2>
          <div>
            <ScoreBoard limit={true} />
          </div>
        </div>
      </BgImage>
      {/* info */}
      <BgImage position="bottom" height="90vh" imgUrl={InfoImage}>
        <div className={styles.info}>
          <h3>investera i din halsa och din verksamhet</h3>
          <div className={styles["info--content"]}>
            <div>
              <h4>Exklusivt</h4>
              <img width={100} src={checkIcon} alt="" />
            </div>
            <div>
              <h4>Exklusivt</h4>
              <img width={100} src={checkIcon} alt="" />
            </div>
            <div>
              <h4>Exklusivt</h4>
              <img width={100} src={checkIcon} alt="" />
            </div>
            <div>
              <h4>Exklusivt</h4>
              <img width={100} src={checkIcon} alt="" />
            </div>
            <div>
              <h4>Exklusivt</h4>
              <img width={100} src={checkIcon} alt="" />
            </div>
            <div>
              <h4>Exklusivt</h4>
              <img width={100} src={checkIcon} alt="" />
            </div>
          </div>
        </div>
      </BgImage>
    </main>
  );
};

export default Home;
