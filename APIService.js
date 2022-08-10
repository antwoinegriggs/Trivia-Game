// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

// YOUR CODE HERE!

import { initGame } from "./render.js";

const url = "https://jservice.kenzie.academy/api/clues";
const triviaGame = function () {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // Randomly generate clue
      const randomClueIndex = () =>
        Math.floor(Math.random() * (data.clues.length - 1 - 0 + 1) + 0);

      const randomClue = function () {
        return dataObject[randomClueIndex()];
      };

      // Array that contains clue objects
      var objectArray = [];
      const dataObject = data.clues;

      // Loop checks for duplicate in objectArray and assigns new object
      for (let index = 0; index < 10; index += 1) {
        let generatedClue = randomClue();

        if (objectArray.includes(generatedClue)) {
          objectArray.push(randomClue());
        } else {
          objectArray.push(generatedClue);
        }
      }
      console.log(objectArray);
      initGame(objectArray);
      return;
    });
};

export { triviaGame };
