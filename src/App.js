import { useState } from "react";

function App() {
  // задание https://sinyakov.com/frontend/react/hw/profi.png
  // допилить можно вот до такого функционала - https://cssgradient.io/
  const [firstColor, setFirstColor] = useState("");
  const [secondColor, setSecondColor] = useState("");

  function changeGradient() {
    // функция будет менять свойство background-color
    // у элемента body
    // linear-gradient(0deg, #ffff00 40%, #000044 100%)
    document.body.style.backgroundImage =
      "linear-gradient(0deg, " + firstColor + " 0%, " + secondColor + " 100%)";
  }

  return (
    <div className="App">
      <div className="container">
        <input
          className="input"
          value={secondColor}
          onChange={(e) => setSecondColor(e.target.value)}
        />
        <input
          className="input"
          value={firstColor}
          onChange={(e) => setFirstColor(e.target.value)}
        />
        <button onClick={changeGradient}>go</button>
      </div>
    </div>
  );
}

export default App;
