import BgImage from "../../components/UI/BgImage/BgImage";
import styles from "./ContactUs.module.scss";
import HeadingImage from "../../assets/img/PU_bg-slider-kontakta-oss.jpg";
import ReadMore from "../../components/UI/ReadMore/ReadMore";
import ContactImage from "../../assets/img/PU_bg-slider-kontakta-oss02.jpg";
import Contact from "../../components/Contact/Contact";

const ContactUsPage = () => {
  return (
    <>
      <main>
        <BgImage center={true} height="100vh" imgUrl={HeadingImage}>
          <div className={styles.heading}>
            <div className={styles.readmore}>
              <ReadMore text="kontakta oss" />
            </div>
          </div>
        </BgImage>
        <BgImage height="100vh" imgUrl={ContactImage}>
          <div className="container center height-100">
            <Contact header="kontakta oss" subHeader="" />
          </div>
        </BgImage>
      </main>
    </>
  );
};

export default ContactUsPage;
