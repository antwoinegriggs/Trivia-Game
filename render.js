var score = 0;
var index = 0;
var clueArray;

// Elements
const renderCategory = document.querySelector("#category"); //Title/Category h1 element
const renderScore = document.querySelector("#score"); //Score h3 element
const renderQuestion = document.querySelector("#clue"); //Clue h2 element
const renderAnswer = document.querySelector("#answer"); //Answer h3 element
const submitForm = document.querySelector("#submit-form"); //submit form element
const nextButton = document.querySelector("#next-button"); //next button element

// Toggle Buttons //

//Toggle Results
// Toggles current answer and next button
const toggleResult = () => {
  renderAnswer.classList.toggle("hide");
  nextButton.classList.toggle("hide");
};
const toggleNext = () => nextButton.classList.toggle("hide"); //Toggle Next Button
const toggleSubmit = () => submitForm.classList.toggle("hide"); //Toggle Submit Button

// Render First Question
const initGame = function (objectArray) {
  clueArray = objectArray;
  var clues = objectArray[index];

  renderCategory.textContent = clues.category.title;
  renderQuestion.textContent = clues.question;
  renderAnswer.textContent = clues.answer;
  renderScore.textContent = `Score: ${score}`;

  toggleNext();
  toggleResult();

  return clueArray;
};

export {
  initGame,
  clueArray,
  toggleNext,
  toggleSubmit,
  toggleResult,
  renderCategory,
  renderScore,
  renderQuestion,
  renderAnswer,
  submitForm,
  nextButton,
};
