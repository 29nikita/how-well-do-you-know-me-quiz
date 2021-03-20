var readlineSync=require("readline-sync");
var userName=readlineSync.question("What's your name? ");
console.log("Welcome "+userName+" to HOW WELL DO YOU KNOW Nikita? ");

var questions=[
  {
    question: "Where do I live? ",
    answer: "Aligarh"
  },{
    question: "What I love the most? ",
    answer: "Chocolates"
  },{
    question: "Where do I work? ",
    answer: "Programming Pathshala"
  },{
    question: "What's my higher qualification? ",
    answer: "MCA"
  },{
    question: "How many siblings do I have? ",
    answer: "2"
  }
]

var score=0;

function play(questions){
  for(var i=0; i<questions.length; i++){
    var userAnswer=readlineSync.question(questions[i].question);
    if(userAnswer.toUpperCase() === questions[i].answer.toUpperCase()){
      score=score+1;
      console.log("Right!");
      console.log("---------------------------");
    }
    else{
      console.log("Wrong!");
      console.log("---------------------------");
    }
    console.log("Your current score is: "+score);
  }
  
}

play(questions);
console.log("CONGRATULATIONS! You finished the quiz.");
console.log("Your final score is: "+score);