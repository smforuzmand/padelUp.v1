import BgImage from "../../components/UI/BgImage/BgImage";
import styles from "./omoss.module.scss";
import HeadingImage from "../../assets/img/PU_bg-slider-omoss.jpg";
import ReadMore from "../../components/UI/ReadMore/ReadMore";
import LogoCard from "../../components/UI/LogoCard/LogoCard";
import InfoImage from "../../assets/img/PadelUp_bild_bakgrund01.jpg";
import checkIcon from "../../assets/icons/PadelUp_icon_check.svg";

const OmossPage = () => {
  return (
    <main>
      {/* heading */}
      <BgImage center={true} height="100vh" imgUrl={HeadingImage}>
        <div className={styles.heading}>
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit Laboriosam
            dicta.
          </h1>
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
          </div>
        </div>
        <LogoCard />
      </div>

      <BgImage position="bottom" height="90vh" imgUrl={InfoImage}>
        <div className={styles.info}>
          <h3>investera i din halsa och din verksamhet</h3>
          <div className={styles["info--content"]}>
            <div>
              <div>
                <h4>Exklusivt</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  aliquam vero quidem quo eum magnam omnis nam accusantium velit
                  facilis.
                </p>
              </div>
              <img width={100} src={checkIcon} alt="" />
            </div>
            <div>
              <div>
                <h4>Exklusivt</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  aliquam vero quidem quo eum magnam omnis nam accusantium velit
                  facilis.
                </p>
              </div>
              <img width={100} src={checkIcon} alt="" />
            </div>
            <div>
              <div>
                <h4>Exklusivt</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  aliquam vero quidem quo eum magnam omnis nam accusantium velit
                  facilis.
                </p>
              </div>
              <img width={100} src={checkIcon} alt="" />
            </div>
            <div>
              <div>
                <h4>Exklusivt</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  aliquam vero quidem quo eum magnam omnis nam accusantium velit
                  facilis.
                </p>
              </div>
              <img width={100} src={checkIcon} alt="" />
            </div>
          </div>
        </div>
      </BgImage>
    </main>
  );
};

export default OmossPage;
