import React from "react";

import { Card, CardDeck } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Deck extends React.Component {
  render() {
    const { cardDeck } = this.props;
    return (
      <CardDeck className="deck">
        {cardDeck.map((card, index) => {
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
