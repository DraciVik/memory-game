import React from "react";
import { cards } from "./components/cards.js";
import Deck from "./components/Deck.js";
import ScorePanel from "./components/ScorePanel.js";
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
    this.handleResetClasses = this.handleResetClasses.bind(this);
  }

  handleOpenCard(e) {
    let target = e.target.closest(".card");
    let id = e.target.dataset.id;
    if (target !== null) {
      if (this.state.currentOpenedCard === "") {
        target.classList.add("open", "show");
        this.setState(prevState => {
          return {
            moves: prevState.moves + 1,
            currentOpenedCardId: id,
            currentOpenedCard: target
          };
        });
      } else if (this.state.currentOpenedCardId !== "") {
        if (id === this.state.currentOpenedCardId) {
          target.classList.add("open", "show", "match");
          this.state.currentOpenedCard.classList.add("match");
          this.setState(prevState => {
            return {
              openedCards: (prevState.openedCards += 2),
              currentOpenedCardId: "",
              currentOpenedCard: "",
              moves: prevState.moves + 1
            };
          });
        } else {
          target.classList.add("open", "show", "nomatch");
          this.state.currentOpenedCard.classList.add("nomatch");
          setTimeout(() => {
            this.state.currentOpenedCard.classList.remove(
              "open",
              "show",
              "nomatch"
            );
            target.classList.remove("open", "show", "nomatch");
            this.setState(prevState => {
              return {
                currentOpenedCardId: "",
                currentOpenedCard: "",
                moves: prevState.moves + 1
              };
            });
          }, 820);
        }
      }
    }
  }

  componentDidMount() {
    this.randomizeCards();
    const cardDeck = document.querySelector(".deck");

    cardDeck.addEventListener("click", this.handleOpenCard);
  }

  componentWillUnmount() {
    const cardDeck = document.querySelector(".deck");
    cardDeck.removeEventListener("click", this.handleOpenCard);
  }

  handleResetClasses(e) {
    let target = e.target.closest(".card");
    console.log(target);
    if (target !== null) {
      target.classList.remove("open", "show");
      this.setState(prevState => {
        return {
          moves: prevState.moves + 1
        };
      });
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
      currentOpenedCard: ""
    });
    let displayedCards = document.querySelectorAll(".card");
    for (let card of displayedCards) {
      card.classList.remove("open", "show", "match");
    }
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
