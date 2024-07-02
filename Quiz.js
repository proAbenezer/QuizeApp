const quizQuestion = require("./data.js");
const prompt = require("prompt-sync")();

let scores = 0;
let userQuit = false;
quizQuestion.forEach((item, index) => {
  if (userQuit === true) return;
  let userAnswer;

  displayQuestion(item, index);
  let userInput = prompt(
    "Please Enter you answer (A,B,C,D) or Q to quit the game:  "
  );

  while (!checkInputValidate(userInput)) {
    console.log("You have entered an invaild input ");
    userInput = prompt(
      "Please Enter you answer (A,B,C,D) or Q to quit the game:  "
    );
  }
  if (userInput.toUpperCase() === "Q") {
    console.log("You have Quit the Game");
    userQuit = true;
    return;
  }

  userAnswer = readAnswer(userInput, item);

  if (userAnswer == item.correctAnswer) scores++;
});

console.log("");
console.log("*******************************");
console.log("Game Over");
console.log("you got " + scores + " out of  " + quizQuestion.length);
console.log("********************************");

console.log("");
console.log("Thanks for playing ");

function displayQuestion(item, index) {
  let optionsItemNumber = 0;

  console.log(" ");

  console.log(index + 1 + ". " + item.question);
  console.log("");

  for (let charCode = 65; charCode <= 68; charCode++) {
    let char = String.fromCharCode(charCode);
    console.log(char + "." + item.options[optionsItemNumber]);
    optionsItemNumber++;
  }
  console.log(" ");
}

function readAnswer(input, item) {
  switch (input.toUpperCase()) {
    case "A":
      return item.options[0];
      break;
    case "B":
      return item.options[1];
      break;
    case "C":
      return item.options[2];
      break;
    case "D":
      return item.options[3];
      break;
    default:
      console.log("Incorrect input ");
      return null;
      break;
  }
}

function checkInputValidate(input) {
  const vaildInputs = ["A", "B", "C", "D", "Q"];
  return vaildInputs.includes(input.toUpperCase());
}
