import { triviaGame } from "./APIService.js";
import {
  clueArray,
  toggleResult,
  toggleSubmit,
  toggleNext,
  renderCategory,
  renderScore,
  renderQuestion,
  renderAnswer,
  submitForm,
  nextButton,
} from "./render.js";

// Elements
const startButton = document.querySelector("#start-button"); //start button element
const restartButton = document.querySelector("#restart"); //restart button element
const answerField = document.querySelector("#answer-field"); //text box element

// Toggle Buttons
const toggleRestart = () => restartButton.classList.toggle("hide"); //Toggle Restart Button

// Render //

// Render Final Result Card
// This function will render final score and restart button at the end of game//
const finalResults = function () {
  renderCategory.textContent = "Game Over";
  renderScore.textContent = `Final Score: ${score}`;
  renderAnswer.classList.toggle("hide");
  renderQuestion.classList.toggle("hide");
};

// Render Answer Result
// This function will render current object of array and current score
const renderResults = () => {
  renderCategory.textContent = clueArray[index].category.title;
  renderQuestion.textContent = clueArray[index].question;
  renderAnswer.textContent = clueArray[index].answer;
  renderScore.textContent = `Score: ${score}`;
};

// Counter variables
var score = 0;
var index = 0;

// This function increases score by one
const updateScore = (scoreElement) => {
  score += 1;
  scoreElement.textContent = `Score: ${score}`;
};

//Toggle Buttons on start
toggleSubmit();
toggleNext();
toggleRestart();

// Events //

// Start Button
//On start
startButton.addEventListener("click", function () {
  toggleSubmit(); //Toggle off and hide Submit Form
  triviaGame(); //Run Trivia Game Function
  startButton.classList.toggle("hide"); //Toggle off and hide start button
});

// Submit field and button event
submitForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let textInput = answerField.value.toLowerCase();
  if (textInput === clueArray[index].answer.toLowerCase()) {
    updateScore(renderScore);
    renderAnswer.style.color = "green";
  } else {
    renderAnswer.style.color = "red";
  }
  toggleSubmit();
  toggleResult();
  submitForm.reset(); //clear and reset form
  return (index += 1);
});

// Next Button
// Next button will move to next clue or show final result, result counters, and show restart button
nextButton.addEventListener("click", (event) => {
  if (index !== clueArray.length) {
    toggleSubmit();
    toggleResult();
    renderResults();
  } else {
    finalResults();
    toggleNext();
    toggleRestart();
    return (index = 0), (score = 0);
  }
});

// Restart Button
restartButton.addEventListener("click", (event) => {
  triviaGame();

  toggleRestart();
  toggleSubmit();
  renderAnswer.style.color = "yellow";
  renderAnswer.classList.toggle("hide");
  renderQuestion.classList.toggle("hide");
});
