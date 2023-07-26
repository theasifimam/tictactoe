import { useState } from "react";
import "./App.css";

function App() {
  const grid = [
    { position: 1, playOne: false, playTwo: false },
    { position: 2, playOne: false, playTwo: false },
    { position: 3, playOne: false, playTwo: false },
    { position: 4, playOne: false, playTwo: false },
    { position: 5, playOne: false, playTwo: false },
    { position: 6, playOne: false, playTwo: false },
    { position: 7, playOne: false, playTwo: false },
    { position: 8, playOne: false, playTwo: false },
    { position: 9, playOne: false, playTwo: false },
  ];
  const [count, setCount] = useState(1);
  const [boxValue, setBoxValue] = useState("");
  const [gridValues, setGridValues] = useState(grid);

  const handleBoxValue = (box) => {
    if (box.playOne) {
      return "X";
    } else if (box.playTwo) {
      return "O";
    } else {
      return "";
    }

    console.log(box);
  };

  const handleClick = (index) => {
    setCount(count + 1);

    if (count % 2 == 0) {
      setGridValues(
        gridValues.map((box, i) => {
          if (index === i) {
            return { ...box, playTwo: true };
          } else {
            return box;
          }
        })
      );
    } else {
      setGridValues(
        gridValues.map((box, i) => {
          if (index === i) {
            return { ...box, playOne: true };
          } else {
            return box;
          }
        })
      );
    }
  };
  return (
    <div className="App">
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
