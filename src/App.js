import React from "react";
import { cards } from "./components/cards.js";
import Deck from "./components/Deck.js";
import ScorePanel from "./components/ScorePanel.js";
import WonGameScreen from "./components/WonGameScreen.js";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      moves: 0,
      openedCards: 0,
      cardDeck: [],
      currentOpenedCardId: "",
      currentOpenedCard: ""
    };

    this.handleOpenCard = this.handleOpenCard.bind(this);
    this.randomizeCards = this.randomizeCards.bind(this);
    this.handleStartOver = this.handleStartOver.bind(this);
  }

  handleStartOver() {
    this.setState({
      moves: 0,
      openedCards: 0,
      cardDeck: [],
      currentOpenedCardId: "",
      currentOpenedCard: ""
    });
    this.randomizeCards();
    // const cardDeck = document.querySelector(".deck");
    // cardDeck.addEventListener("click", this.handleOpenCard);
  }

  handleOpenCard(e) {
    const { currentOpenedCard, currentOpenedCardId } = this.state;

    let target = e.target.closest(".card");
    let id = e.target.dataset.id;
    // target must be a card
    if (target !== null) {
      // If no card is opened
      if (currentOpenedCard === "") {
        target.classList.add("open", "show");
        this.setState(prevState => {
          return {
            moves: prevState.moves + 1,
            currentOpenedCardId: id,
            currentOpenedCard: target
          };
        });
        // If one card is already opened
      } else if (currentOpenedCardId !== "") {
        // If they match
        if (id === currentOpenedCardId) {
          target.classList.add("open", "show", "match");
          currentOpenedCard.classList.add("match");
          this.setState(prevState => {
            return {
              openedCards: (prevState.openedCards += 2),
              currentOpenedCardId: "",
              currentOpenedCard: "",
              moves: prevState.moves + 1
            };
          });
        } else {
          // If they don't match
          target.classList.add("open", "show", "nomatch");
          currentOpenedCard.classList.add("nomatch");
          setTimeout(() => {
            currentOpenedCard.classList.remove("open", "show", "nomatch");
            target.classList.remove("open", "show", "nomatch");
          }, 820);

          this.setState(prevState => {
            return {
              currentOpenedCardId: "",
              currentOpenedCard: "",
              moves: prevState.moves + 1
            };
          });
        }
      }
    }
  }

  componentDidMount() {
    const { openedCards } = this.state;
    if (openedCards !== 16) {
      this.randomizeCards();
    }
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
    this.setState({
      cardDeck: currentCards,
      moves: 0,
      openedCards: 0,
      currentOpenedCard: "",
      currentOpenedCardId: ""
    });
    let displayedCards = document.querySelectorAll(".card");
    for (let card of displayedCards) {
      card.classList.remove("open", "show", "match");
    }
  }

  render() {
    const { moves, openedCards, cardDeck } = this.state;

    if (openedCards < 16) {
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
          <Deck handleOpenCard={this.handleOpenCard} cardDeck={cardDeck} />
        </div>
      );
    } else if (openedCards === 16) {
      return (
        <WonGameScreen randomizeCards={this.randomizeCards} moves={moves} />
      );
    }
  }
}

export default App;
