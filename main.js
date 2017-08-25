var inquirer = require("inquirer");
var BasicCard = require("./basiccard.js");
var clozeCard = require("./clozecard.js");

var card = new BasicCard(
    "Who was the first president of the United States?", "George Washington");


inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      name: "question",
      message: card.front,
    }


  ])
  .then(function(answer) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if(answer.question === card.back){
      console.log("correct!");
}else {
  console.log("Incorrect");
}

  });
