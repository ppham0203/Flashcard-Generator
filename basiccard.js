var inquirer = require("inquirer");
var basicqs = require("./basicquestions.js");

var BasicCard = function(front, back) {
  this.front = front;
  this.back = back;
};

var questionarr = [];
var correct = 0;
var wrong = 0;
var count = 0;

for (i=0; i < basicqs.length; i++){
var questions = new BasicCard(basicqs[i].front, basicqs[i].back);
questionarr.push(questions);
}

function askquestion() {
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      name: "question",
      message: questionarr[count].front,
    }
  ])
  .then(function(answer) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (answer.question === questionarr[count].back) {
      console.log("correct!");
      correct ++;
    } else {
      console.log("Incorrect");
      wrong ++;
    }
if(count < basicqs.length -1){
  count++;
  askquestion();
}else {
  console.log("game over!");
  console.log("Correct Answers: " + correct);
  console.log("Wrong Answers: " + wrong);

}

  });
}
askquestion();
//
// BasicCard.prototype.printInfo = function() {
//   console.log("front: " + this.front + "\nBack: " + this.back);
// };
//
