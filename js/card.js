'use strict';

// globals
var cardIndex = 0;

// ===============================================
// RENDER CARD
// ===============================================
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

renderCard(allCards[cardIndex]);


// ===============================================
// EVENT
// ===============================================
var form = document.getElementById('form');

var handler = function(event) {
  event.preventDefault();
  event.stopPropagation();

  var response = event.target.answer.value;
  console.log(response);

  // correct answer
  if (response === allCards[cardIndex].solution) {
    document.getElementById('wrong').style.display = 'none';
    document.getElementById('correct').style.display = 'block';
  } else {
    document.getElementById('correct').style.display = 'none';
    document.getElementById('wrong').style.display = 'block';
  }
};

form.addEventListener('submit', handler);
