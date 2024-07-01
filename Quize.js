const prompt = require("prompt-sync")();
console.log("Hello Welcome! ");
console.log("************** ");


console.log("What is 1 + 1");
console.log('A. 1      B. 3')
console.log('B. 4      B. 6')


const userInput = prompt("");
let score = 0;

if(userInput == 'A' || userInput == 'a'){
    score++;
    console.log("Your Score is: " + score);
    console.log('You Win ');
}else{
    console.log("Your Score is: " + score);
    console.log('You lost ');
}