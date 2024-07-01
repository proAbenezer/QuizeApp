const prompt = require("prompt-sync")();
const quizQuestion = [
  {
    question:
      "Which programming language is known for its use in web development and is commonly paired with Node.js?",
    options: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: "JavaScript",
  },
  {
    question:
      "In 'The Walking Dead,' who is the leader of the group at the beginning of the series?",
    options: ["Rick Grimes", "Daryl Dixon", "Michonne", "Glenn Rhee"],
    correctAnswer: "Rick Grimes",
  },
  {
    question: "Who was the first president of the United States?",
    options: [
      "Thomas Jefferson",
      "John Adams",
      "George Washington",
      "Abraham Lincoln",
    ],
    correctAnswer: "George Washington",
  },
  {
    question:
      "Which book of the Bible tells the story of the creation of the world?",
    options: ["Exodus", "Genesis", "Leviticus", "Numbers"],
    correctAnswer: "Genesis",
  },

  {
    question: "During which war was the Battle of Gettysburg fought?",
    options: [
      "World War I",
      "World War II",
      "American Civil War",
      "Vietnam War",
    ],
    correctAnswer: "American Civil War",
  },
];

let scores = 0;

quizQuestion.map((item) => {
  console.log(item.question);
  console.log(" ");

  let optionsItemNumber = 0;
  for (let charCode = 65; charCode <= 68; charCode++) {
    let char = String.fromCharCode(charCode);
    console.log(char + "." + item.options[optionsItemNumber]);
    optionsItemNumber++;
  }
  console.log(" ");

  const userInput = prompt();
  let userAnswer;
  switch (userInput) {
    case "A":
      userAnswer = item.options[0];
      break;
    case "B":
      userAnswer = item.options[1];
      break;
    case "C":
      userAnswer = item.options[2];
      break;
    case "D":
      userAnswer = item.options[3];
      break;
    default:
      console.log("Incorrect input ");
      break;
  }

  if (userAnswer == item.correctAnswer) scores++;

  console.log(userAnswer);
});

console.log("Game Over");
console.log("you got " + scores + " out of 5");

console.log("Thanks for playing ");
