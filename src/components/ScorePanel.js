import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faRedo } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";

function ScorePanel({ moves }) {
  if (moves > 12) {
    return (
      <section className="score-panel">
        <ul className="stars">
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
        </ul>
        <span className="moves">{moves}</span> Moves
        <div className="restart">
          <FontAwesomeIcon icon={faRedo} />
        </div>
      </section>
    );
  } else if (moves > 4 && moves <= 12) {
    return (
      <section className="score-panel">
        <ul className="stars">
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStarRegular} />
          </li>
        </ul>
        <span className="moves">{moves}</span> Moves
        <div className="restart">
          <FontAwesomeIcon icon={faRedo} />
        </div>
      </section>
    );
  } else {
    return (
      <section className="score-panel">
        <ul className="stars">
          <li>
            <FontAwesomeIcon icon={faStar} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStarRegular} />
          </li>
          <li>
            <FontAwesomeIcon icon={faStarRegular} />
          </li>
        </ul>
        <span className="moves">{moves}</span> Moves
        <div className="restart">
          <FontAwesomeIcon icon={faRedo} />
        </div>
      </section>
    );
  }
}

export default ScorePanel;
