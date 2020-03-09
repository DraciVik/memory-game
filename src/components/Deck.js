import React from "react";

import { Card, CardDeck } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Deck extends React.Component {
  componentDidMount() {
    const cardDeck = document.querySelector(".deck");

    cardDeck.addEventListener("click", this.props.handleOpenCard);
  }

  componentWillUnmount() {
    const cardDeck = document.querySelector(".deck");
    cardDeck.removeEventListener("click", this.props.handleOpenCard);
  }

  render() {
    const { cardDeck } = this.props;
    return (
      <CardDeck className="deck">
        {cardDeck.map((card, index) => {
          return (
            <Card key={index} data-id={card.id} className="card">
              <FontAwesomeIcon icon={card.icon} />
            </Card>
          );
        })}
      </CardDeck>
    );
  }
}

export default Deck;
