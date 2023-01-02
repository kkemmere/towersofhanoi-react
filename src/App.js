import "./App.css";
import { useState } from "react";

// Practice react problem from: https://www.youtube.com/watch?v=G8P6L1E-6Mw&list=WL&index=2
// Logic is very complex
// Its important to write on paper your idea and how you plan to solve the problem
// This project was awesome

const NUM_DSCS = 5;

function App() {
  const [towers, setTowers] = useState([[5, 4, 3, 2, 1], [], []]);
  const [selectedTower, setSelectedTower] = useState();

  function handleSelectTower(idx) {
    if (selectedTower !== undefined) {
      const currentTower = towers[selectedTower];
      const clickedTower = towers[idx];
      if (currentTower[0] > (clickedTower[0] ?? 9999999)) {
        setSelectedTower(undefined);
        return;
      }
      // TODO: move the clicked tower disc to the next tower
      const newTowers = [...towers];
      const poppedDiscs = newTowers[selectedTower].shift();
      newTowers[idx].unshift(poppedDiscs);
      setTowers(newTowers);
      setSelectedTower(undefined);

      if (clickedTower.length >= NUM_DSCS) {
        alert("You Win!");
      }
    } else {
      setSelectedTower(idx);
    }
  }

  function resetGame() {
    setTowers([[1, 2, 3, 4, 5], [], []]);
  }

  return (
    <div className="App">
      <div className="tower_wrap">
        <h1 class="page-info">Towers of Hanoi</h1>
        <h4 class="page-info2">
          Click a tower and then select a different tower to move a disc
        </h4>
        <h4 class="page-info-hint">
          Hint: No larger disk may be placed on a smaller disk
        </h4>
        <div className="towers">
          {towers.map((discs, idx) => (
            <div
              onClick={() => handleSelectTower(idx)}
              className={"tower " + (selectedTower === idx ? "selected" : "")}
              key={idx}
            >
              <div className="line"></div>
              <div className="discs">
                {discs.reverse().map((discNumber) => (
                  <div
                    key={discNumber}
                    className="disc"
                    style={{
                      width: `${discNumber * 10 + 10}px`,
                    }}
                  ></div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="resetButton" onClick={() => resetGame()}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
