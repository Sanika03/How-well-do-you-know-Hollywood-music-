var readlineSync = require('readline-sync');

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