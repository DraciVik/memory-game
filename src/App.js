import React from "react";
import "./App.css";

import { Card, CardDeck } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faRedo,
  faAnchor,
  faBolt,
  faCube,
  faLeaf,
  faBicycle,
  faBomb
} from "@fortawesome/free-solid-svg-icons";
import { faPaperPlane, faGem } from "@fortawesome/free-regular-svg-icons";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      moves: 17
    };
  }
  render() {
    const { moves } = this.state;
    return (
      <div className="container">
        <header>
          <h1>Matching Game</h1>
        </header>

        <section class="score-panel">
          <ul class="stars">
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
          <span class="moves">{moves}</span> Moves
          <div class="restart">
            <FontAwesomeIcon icon={faRedo} />
          </div>
        </section>

        <CardDeck className="deck">
          <Card className="card">
            <FontAwesomeIcon icon={faGem} />
          </Card>
          <Card className="card match">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Card>
          <Card className="card match">
            <FontAwesomeIcon icon={faAnchor} />
          </Card>
          <Card className="card match">
            <FontAwesomeIcon icon={faBolt} />
          </Card>
          <Card className="card match">
            <FontAwesomeIcon icon={faCube} />
          </Card>
          <Card className="card match">
            <FontAwesomeIcon icon={faAnchor} />
          </Card>
          <Card className="card match">
            <FontAwesomeIcon icon={faLeaf} />
          </Card>
          <Card className="card match">
            <FontAwesomeIcon icon={faBicycle} />
          </Card>
          <Card className="card match">
            <FontAwesomeIcon icon={faGem} />
          </Card>
          <Card className="card match">
            <FontAwesomeIcon icon={faBomb} />
          </Card>
          <Card className="card match">
            <FontAwesomeIcon icon={faLeaf} />
          </Card>
          <Card className="card match">
            <FontAwesomeIcon icon={faBomb} />
          </Card>
          <Card className="card open show">
            <FontAwesomeIcon icon={faBolt} />
          </Card>
          <Card className="card match">
            <FontAwesomeIcon icon={faBicycle} />
          </Card>
          <Card className="card match">
            <FontAwesomeIcon icon={faPaperPlane} />
          </Card>
          <Card className="card match">
            <FontAwesomeIcon icon={faCube} />
          </Card>
        </CardDeck>
      </div>
    );
  }
}

export default App;
