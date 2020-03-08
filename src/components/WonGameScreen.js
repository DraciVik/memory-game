import React from "react";

function WonGameScreen({ moves, randomizeCards }) {
  return (
    <>
      <section>
        <header className="game-won">
          <svg
            className="circle-success"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 130.2 130.2"
          >
            <circle
              className="path circle"
              fill="none"
              stroke="#73AF55"
              strokeWidth="6"
              strokeMiterlimit="10"
              cx="65.1"
              cy="65.1"
              r="62.1"
            />
            <polyline
              className="path check"
              fill="none"
              stroke="#73AF55"
              strokeWidth="6"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="100.2,40.2 51.5,88.8 29.8,67.5 "
            />
          </svg>
          <h1>CONGRATULATIONS!!!</h1>

          <p>
            You won with{" "}
            {`${moves} moves and ${
              moves < 18 ? 3 : moves >= 18 && moves <= 20 ? 2 : 1
            } ${moves <= 20 ? "Stars" : "Star"}`}
          </p>
          <button onClick={randomizeCards} className="btn btn-confirm">
            Start again
          </button>
        </header>
      </section>
    </>
  );
}

export default WonGameScreen;
