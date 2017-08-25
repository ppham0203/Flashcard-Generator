var inquirer = require("inquirer");
var clozeQuestions = require("./clozequestions.js");

var ClozeCard = function(fulltext, cloze) {
  this.partial = fulltext.replace(cloze, "...");
  this.cloze = cloze;
  this.fulltext = fulltext;
};

var count = 0;
var correct = 0;
var wrong = 0;
var clozearray = [];

for(i=0; i < clozeQuestions.length; i++) {
  var clozeq = new ClozeCard(clozeQuestions[i].full, clozeQuestions[i].cloze);
clozearray.push(clozeq);
}



function askquestion() {
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      name: "question",
      message: clozearray[count].partial,
    }


  ])
  .then(function(answer) {

    if (answer.question === clozearray[count].cloze) {
      console.log("correct!");
      correct ++;

    } else {
      console.log("Incorrect");
      wrong ++;

    }
console.log(clozearray[count].fulltext);





if(count < clozeQuestions.length - 1){
count ++;
askquestion();
}else {
console.log("game over!");
console.log("Correct Answers: " + correct);
console.log("Wrong Answers: " + wrong);
  }
    });
}
askquestion();
