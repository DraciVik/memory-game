import React from "react";
import { cards } from "./cards.js";

import { Card, CardDeck } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Deck extends React.Component {
  render() {
    return (
      <CardDeck className="deck">
        {cards.map((card, index) => {
          return (
            <Card key={index} className="card show">
              <FontAwesomeIcon icon={card.icon} />
            </Card>
          );
        })}
      </CardDeck>
    );
  }
}

export default Deck;
