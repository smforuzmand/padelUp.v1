import styles from "./ScoreBoard.module.scss";
import React, { useState } from "react";

const ScoreBoard = (props) => {
  const [content, setContent] = useState([
    {
      name: "Company 1",
      point: "70",
    },
    {
      name: "Company 2",
      point: "80",
    },
    {
      name: "Company 3",
      point: "60",
    },
    {
      name: "Company 4",
      point: "90",
    },
  ]);

  const firstFourScore = props.limit
    ? content.filter((score, index) => index < 4)
    : [];

  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <h4>Företag</h4>
        <h4>Poäng</h4>
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
