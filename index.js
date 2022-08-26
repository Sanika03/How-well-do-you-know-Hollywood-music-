var readlineSync = require('readline-sync');

var score = 0;

var highScores = [
  {
    name : "Shruti",
    score : 4
  } , 
  {
    name : "Neelu",
    score : 5
  }
];

var questions = [{
    question : "Who sung the song 'Go Flex' ? ",
    answer : 'Post Malone'
  },{
    question : "Who sung the song 'This Town' ? ",
    answer : 'Niall Horan'
  },{
    question : "Who wrote the song 'Drivers License' ? ",
    answer : 'Olivia Rodrigo'
  },{
    question : "The song 'Drivers License' is from which album ? ",
    answer : 'Sour'
  },{
    question : "One Direction's song 'Night Changes' is from which album ? ",
    answer : 'Four'
  }];

function welcome(){
  var userName = readlineSync.question('What is your name ? ');
  console.log('Welcome ' + userName + ' !');
  console.log("LET'S CHECK HOW WELL YOU KNOW ME !");
}

function quiz(question, answer){
  var userAnswer = readlineSync.question(question);
  
  if(userAnswer.toLowerCase() === answer.toLowerCase()){ 
    console.log("Right !");
    score++;
  }
  else{
    console.log("Wrong !");
    console.log(answer);
  }
  
  console.log("Current score = " + score);
  console.log("::::::::::::::::::::");
}

function play(){
  for(var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    quiz(currentQuestion.question, currentQuestion.answer);
  }
}

function finalDisplay() {
  console.log("Yayyyy Your Score is : " + score);
  console.log("Check out the high scores and if you scored more ping me and you'll be on the top");
    highScores.map(score => console.log(score.name, " : ", score.score));
}