'use strict';


var cardForm = document.getElementById('cardForm');

var Card = function(title, explanation, example, question, problem, solution, group){
  this.title = title;
  this.explanation = explanation;
  this.example = example;
  this.question = question;
  this.problem = problem;
  this.solution = solution;
  this.solved = false;
  this.group = group;
};

var newCardHandler = function(event){
  event.preventDefault();
  event.stopPropagation();

  var cardTitle = event.target.title.value;
  console.log(cardTitle);
  var cardExplanation = event.target.explanation.value;
  console.log(cardExplanation);
  var cardExample = event.target.example.value;
  console.log(cardExample);
  var cardQuestion = event.target.question.value;
  console.log(cardQuestion);
  var cardProblem = event.target.problem.value;
  console.log(cardProblem);
  var cardSolution = event.target.solution.value;
  console.log(cardSolution);

  var cardGroup = Number(document.getElementById('group').value);


  var card = new Card(cardTitle, cardExplanation, cardExample, cardQuestion, cardProblem, cardSolution, cardGroup);


  // get allCards from localStorage and restore after updated
  if (!localStorage.getItem('allCards')){
    localStorage.setItem('allCards', JSON.stringify(allCards));
  } else {
    allCards = JSON.parse(localStorage.getItem('allCards'));
  }
  // push the new card onto allCards then sort allCards on group key
  // and restore into localStorage
  allCards.push(card);
  allCards.sort((a,b) => a.group - b.group);
  localStorage.setItem('allCards', JSON.stringify(allCards));

  // navigate to sub.html (not newCard.html anymore) after new card created
  window.location.href = 'sub.html';
  // localStorage.setItem('cardIndex', allCards.length - 1);
  // window.location.href = 'card.html';
};

cardForm.addEventListener('submit', newCardHandler);
