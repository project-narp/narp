'use strict';

var cardForm = document.getElementById('cardForm');

var generatedCards = [];


var Card = function(title, explanantion, question, problem, answer){
  this.title = title;
  this.explanantion = explanantion;
  this.question = question;
  this.problem = problem;
  this.answer = answer;
  this.solved = false;
  generatedCards.push(this);

};

var newCardHandler = function(event){
  event.preventDefault();
  event.stopPropagation();  
  var cardTitle = event.target.title.value;
  console.log(cardTitle);
  var cardExplanation = event.target.explanation.value;
  console.log(cardExplanation);
  var cardQuestion = event.target.question.value;
  console.log(cardQuestion);
  var cardProblem = event.target.problem.value;
  console.log(cardProblem);
  var cardAnswer = event.target.answer.value;
  console.log(cardAnswer);
  new Card(cardTitle, cardExplanation, cardQuestion, cardProblem, cardAnswer);

};

cardForm.addEventListener('submit', newCardHandler);
