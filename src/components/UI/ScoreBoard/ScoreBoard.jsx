import styles from "./ScoreBoard.module.scss";

const content = [
  {
    name: "foretagnsamnam",
    point: "70",
  },
  {
    name: "foretagnsamnam",
    point: "70",
  },
  {
    name: "foretagnsamnam",
    point: "70",
  },
  {
    name: "foretagnsamnam",
    point: "70",
  },
  {
    name: "foretagnsamnam",
    point: "70",
  },
  {
    name: "foretagnsamnam",
    point: "70",
  },
  {
    name: "foretagnsamnam",
    point: "70",
  },
  {
    name: "foretagnsamnam",
    point: "70",
  },
];

const ScoreBoard = (props) => {
  const firstFourScore = props.limit
    ? content.filter((score, index) => index < 4)
    : [];
  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <h4>Forteg</h4>
        <h4>Poang</h4>
      </div>

      <div className={styles.content}>
        {(props.limit == true ? firstFourScore : content).map(
          (score, index) => (
            <div key={index}>
              <p>
                {props.count ? `${index + 1}. ` : ""}
                {score.name}
              </p>
              <p>{score.point}</p>
            </div>
          )
        )}
      </div>

      {props.limit && (
        <div className={styles.button}>
          <a href="#" className="button">
            se alla resultat
          </a>
        </div>
      )}
    </div>
  );
};

export default ScoreBoard;
