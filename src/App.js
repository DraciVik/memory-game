import React from "react";
import { cards } from "./components/cards.js";
import Deck from "./components/Deck.js";
import ScorePanel from "./components/ScorePanel.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      moves: 18,
      openedCards: 0,
      cardDeck: [],
      currentOpenedCard: ""
    };

    this.handleRemoveClass = this.handleRemoveClass.bind(this);
    this.handleAddClass = this.handleAddClass.bind(this);
    this.randomizeCards = this.randomizeCards.bind(this);
  }

  handleRemoveClass(items, className) {
    for (let item of items) {
      item.classList.remove(className);
    }
  }

  handleAddClass(items, className) {
    for (let item of items) {
      item.classList.add(className);
    }
  }

  componentDidMount() {
    this.randomizeCards();
    const cardDeck = document.querySelector(".deck");

    // 02. add event listener for clicks
    cardDeck.addEventListener("click", function(e) {
      let target = e.target.closest(".card");
      console.log(target);
      if (target !== null) {
        target.classList.add("open");
      }
    });
    // 03. Show one card at click
    // 04. if second card is the same keep them open - otherwise revert back to closed
    // 05. count down on the moves
  }

  randomizeCards() {
    let shuffle = cards.slice();
    const currentCards = [];

    while (shuffle.length > 0) {
      let randomIndex = Math.floor(Math.random() * shuffle.length);
      if (currentCards.indexOf(shuffle[randomIndex]) === -1) {
        currentCards.push(shuffle[randomIndex]);
        shuffle.splice(randomIndex, 1);
      }
    }
    this.setState({ cardDeck: currentCards });

    // TODO
    // 01 - transfer cardDeck to cardDeck component
  }

  render() {
    const { moves, openedCards, cardDeck } = this.state;
    return (
      <div className="container">
        <header>
          <h1>Matching Game</h1>
        </header>

        <ScorePanel
          moves={moves}
          openedCards={openedCards}
          randomizeCards={this.randomizeCards}
        />
        <Deck cardDeck={cardDeck} />
      </div>
    );
  }
}

export default App;
