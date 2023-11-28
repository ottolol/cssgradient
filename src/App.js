import { useState, useEffect } from "react";

function App() {
  // задание https://sinyakov.com/frontend/react/hw/profi.png
  // допилить можно вот до такого функционала - https://cssgradient.io/
  // Тут есть код для реализации полоски выбора цвета - https://stackoverflow.com/questions/40253697/how-to-create-a-color-picker-in-html
  const [firstColor, setFirstColor] = useState("");
  const [secondColor, setSecondColor] = useState("");

  // функция будет менять свойство background-color
  // у элемента body
  // linear-gradient(0deg, #ffff00 40%, #000044 100%)

  // если вводится только один цвет, он должен сразу залить страницу
  // а когда вводится 2-й цвет становится градиент

  // useEffect — это хук React, который позволяет выполнять код после
  // обновления компонента. Он принимает два аргумента: функцию,
  // которая будет выполнена, и массив зависимостей.
  // Если зависимости изменяются, функция будет выполнена снова.
  useEffect(() => {
    if (firstColor && secondColor) {
      document.body.style.background =
        "linear-gradient(0deg, " +
        secondColor +
        " 0%, " +
        firstColor +
        " 100%)";
    } else if (firstColor) {
      document.body.style.background = firstColor;
    } else if (secondColor) {
      document.body.style.background = secondColor;
    } else {
      document.body.style.background = "none";
    }
  }, [firstColor, secondColor]);

  return (
    <div className="App">
      <div className="container">
        <div className="block">
          <label className="">First Color</label>
          <input
            className="border rounded-md py-2 px-2 mr-2"
            placeholder="#000 or black"
            value={firstColor}
            onChange={(e) => setFirstColor(e.target.value)}
          />
          {/* <input
            className="input"
            type="color"
            value={firstColor}
            onChange={(e) => setFirstColor(e.target.value)}
          /> */}
        </div>
        <div className="block">
          <label>Second Color</label>
          <input
            className="border rounded-md py-2 px-2"
            placeholder="#fff or white"
            value={secondColor}
            onChange={(e) => setSecondColor(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
