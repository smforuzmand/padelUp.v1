import styles from "./ScoreBoard.module.scss";
import ScoreBoardImage from "../../assets/img/PU_bg-slider-scoreboard.jpg";
import ScoreBoard from "../../components/UI/ScoreBoard/ScoreBoard";
import BgImage from "../../components/UI/BgImage/BgImage";

const ScoreBoardPage = () => {
  return (
    <main>
      <BgImage height="100%" imgUrl={ScoreBoardImage}>
        <div className={styles.ScoreBoard}>
          <h2>Score Board Padelup 2023</h2>
          <div>
            <ScoreBoard count={true} />
          </div>
        </div>
      </BgImage>
    </main>
  );
};

export default ScoreBoardPage;
