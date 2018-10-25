'use strict';

var renderCard = function(card) {
  var title = document.getElementById('title');
  title.textContent = card.title;

  var explanation = document.getElementById('explanation');
  explanation.textContent = card.explanation;

  var example = document.getElementById('example');
  example.innerHTML = card.example;

  var question = document.getElementById('question');
  question.textContent = card.question;

  var problem = document.getElementById('problem');
  problem.innerHTML = card.problem;
};

renderCard(allCards[0]);
