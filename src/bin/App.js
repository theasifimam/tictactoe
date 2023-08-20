import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {
  const grid = [
    { position: 1, playerOne: false, playerTwo: false },
    { position: 2, playerOne: false, playerTwo: false },
    { position: 3, playerOne: false, playerTwo: false },
    { position: 4, playerOne: false, playerTwo: false },
    { position: 5, playerOne: false, playerTwo: false },
    { position: 6, playerOne: false, playerTwo: false },
    { position: 7, playerOne: false, playerTwo: false },
    { position: 8, playerOne: false, playerTwo: false },
    { position: 9, playerOne: false, playerTwo: false },
  ];

  const [playerOne, setPlayerOne] = useState([]);
  const [playerTwo, setPlayerTwo] = useState([]);
  const [count, setCount] = useState(1);
  const [winnerAnnouncement, setWinnerAnnouncement] = useState("");
  const [gridValues, setGridValues] = useState(grid);

  const correctCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  const handleBoxValue = (box) => {
    if (box.playerOne) {
      return "X";
    } else if (box.playerTwo) {
      return "O";
    } else {
      return "";
    }
  };

  useEffect(() => {
    let playerWon = false;
    if (
      gridValues[0].playerOne &&
      gridValues[1].playerOne &&
      gridValues[2].playerOne
    ) {
      setWinnerAnnouncement("Player One has won!");
      playerWon = true;
    } else if (
      gridValues[3].playerOne &&
      gridValues[4].playerOne &&
      gridValues[5].playerOne
    ) {
    } else if (
      gridValues[6].playerOne &&
      gridValues[7].playerOne &&
      gridValues[8].playerOne
    ) {
      setWinnerAnnouncement("Player One has won!");
      playerWon = true;
    } else if (
      gridValues[0].playerOne &&
      gridValues[3].playerOne &&
      gridValues[6].playerOne
    ) {
      setWinnerAnnouncement("Player One has won!");
      playerWon = true;
    } else if (
      gridValues[1].playerOne &&
      gridValues[4].playerOne &&
      gridValues[7].playerOne
    ) {
      setWinnerAnnouncement("Player One has won!");
      playerWon = true;
    } else if (
      gridValues[2].playerOne &&
      gridValues[5].playerOne &&
      gridValues[8].playerOne
    ) {
      setWinnerAnnouncement("Player One has won!");
      playerWon = true;
    } else if (
      gridValues[0].playerOne &&
      gridValues[4].playerOne &&
      gridValues[8].playerOne
    ) {
      setWinnerAnnouncement("Player One has won!");
      playerWon = true;
    } else if (
      gridValues[2].playerOne &&
      gridValues[4].playerOne &&
      gridValues[6].playerOne
    ) {
      setWinnerAnnouncement("Player One has won!");
      playerWon = true;
    }

    // for player Two
    else if (
      gridValues[0].playerTwo &&
      gridValues[1].playerTwo &&
      gridValues[2].playerTwo
    ) {
      setWinnerAnnouncement("Player Two has won!");
      playerWon = true;
    } else if (
      gridValues[3].playerTwo &&
      gridValues[4].playerTwo &&
      gridValues[5].playerTwo
    ) {
      setWinnerAnnouncement("Player Two has won!");
      playerWon = true;
    } else if (
      gridValues[6].playerTwo &&
      gridValues[7].playerTwo &&
      gridValues[8].playerTwo
    ) {
      setWinnerAnnouncement("Player Two has won!");
      playerWon = true;
    } else if (
      gridValues[0].playerTwo &&
      gridValues[3].playerTwo &&
      gridValues[6].playerTwo
    ) {
      setWinnerAnnouncement("Player Two has won!");
      playerWon = true;
    } else if (
      gridValues[1].playerTwo &&
      gridValues[4].playerTwo &&
      gridValues[7].playerTwo
    ) {
      setWinnerAnnouncement("Player Two has won!");
      playerWon = true;
    } else if (
      gridValues[2].playerTwo &&
      gridValues[5].playerTwo &&
      gridValues[8].playerTwo
    ) {
      setWinnerAnnouncement("Player Two has won!");
      playerWon = true;
    } else if (
      gridValues[0].playerTwo &&
      gridValues[4].playerTwo &&
      gridValues[8].playerTwo
    ) {
      setWinnerAnnouncement("Player Two has won!");
      playerWon = true;
    } else if (
      gridValues[2].playerTwo &&
      gridValues[4].playerTwo &&
      gridValues[6].playerTwo
    ) {
      setWinnerAnnouncement("Player Two has won!");
      playerWon = true;
    }
    playerWon && setGridValues(grid);
  }, [gridValues]);

  const handleClick = (index) => {
    setCount(count + 1);

    if (count % 2 == 0) {
      setGridValues(
        gridValues.map((box, i) => {
          if (index === i) {
            setPlayerTwo([...playerTwo, i + 1]);
            return { ...box, playerTwo: true };
          } else {
            return box;
          }
        })
      );
    } else {
      setGridValues(
        gridValues.map((box, i) => {
          if (index === i) {
            setPlayerOne([...playerOne, i + 1]);
            return { ...box, playerOne: true };
          } else {
            return box;
          }
        })
      );
    }
  };
  return (
    <div className="App">
      <h1 className="winnerAnnouncement">
        {winnerAnnouncement || "Best of luck"}
      </h1>
      <div className="container">
        {gridValues.map((box, index) => {
          return (
            <div
              className="box box1"
              onClick={() => handleClick(index)}
              key={index}
            >
              <h3>{handleBoxValue(box)}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
