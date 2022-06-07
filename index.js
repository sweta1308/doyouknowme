var readlineSync = require('readline-sync')
const chalk = require("chalk")
console.log(chalk.magentaBright.bgBlack("Do You Know Me?"))
console.log(chalk.yellow("Hello! "))
var userName = readlineSync.question(chalk.cyanBright("What is your name? "))

console.clear();

console.log(chalk.magentaBright.bgBlack("Do You Know Me?"))
console.log(chalk.green("Welcome ", userName, "to this quiz!"))
console.log(chalk.green("Let's see how much you know me! "))

var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(chalk.yellowBright(question))
  if (userAnswer === answer) {
    console.log(chalk.red("Your answer ", userAnswer + " is correct!"))
    score = score + 1;
  } else {
    console.log(chalk.red("Your answer ", userAnswer + " is wrong!"))
  }
  console.log(chalk.redBright("Your current score is ", score))
  console.log("--------------------")
}

var questions = [{
  question: "What is my age? ",
  answer: "22",
}, {
  question: "What was my worst subject in school? ",
  answer: "Social studies",
}, {
  question: "What is my favourite colour? ",
  answer: "Black",
}, {
  question: "Am I a pet lover? ",
  answer: "No",
}, {
  question: "What type of food do I like? ",
  answer: "Chinese",
}]

for (var i = 0; i<questions.length; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question, currentQuestion.answer)
}
console.log(chalk.cyan("Your final score is ", score, "."))
console.log("--------------------")




var highScores = [
  {
    name: "Aanchal",
    score: "4",
  },
  {
    name: "Sinu",
    score: "3",
  },
  {
    name: "Shree",
    score: "3",
  }
]

console.log(chalk.magenta.underline("Check out the high scores!"))
console.table(highScores)
var high = false;

highScores.forEach( person => {
  if(score > person.score) {
    high = true;
  }
})

if(high) {
  console.log(chalk.blue("Great! You cracked the high score. "))
  console.log("Just send me a screenshot of your score and I will add it in the leaderboard.")
} else {
  console.log(chalk.blue("Oops! You couldn't beat the high score."))
}