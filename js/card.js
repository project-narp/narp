'use strict';

// ===============================================
// CARD INDEX LOCAL STORAGE
// ===============================================
var cardIndex;
if (!localStorage.getItem('cardIndex')){
  cardIndex = 0;
  localStorage.setItem('cardIndex', 0);
} else {
  cardIndex = localStorage.getItem('cardIndex');
}

// ===============================================
// RENDER CARD
// ===============================================
var renderCard = function() {
  var card = allCards[cardIndex];
  var title = document.getElementById('title');
  title.textContent = card.title;

  var explanation = document.getElementById('explanation');
  explanation.innerHTML = card.explanation;

  var example = document.getElementById('example');
  example.innerHTML = card.example;

  var question = document.getElementById('question');
  question.innerHTML = card.question;

  var problem = document.getElementById('problem');
  problem.innerHTML = card.problem;

  // clear input
  document.getElementById('form').children[0].value = '';

  // hide correct response
  document.getElementById('correct').style.display = 'none';
};

renderCard();


// ===============================================
// FORM EVENT
// ===============================================
var form = document.getElementById('form');

var formHandler = function(event) {
  event.preventDefault();
  event.stopPropagation();

  var response = event.target.answer.value;

  // correct answer
  if (response === allCards[cardIndex].solution) {
    allCards[cardIndex].solved = true;
    document.getElementById('wrong').style.display = 'none';
    document.getElementById('correct').style.display = 'block';
  } else {
    document.getElementById('correct').style.display = 'none';
    document.getElementById('wrong').style.display = 'block';
  }
};

form.addEventListener('submit', formHandler);


// ===============================================
// NEXT EVENT
// ===============================================
var next = document.getElementById('next');

var nextHandler = function(event) {
  event.preventDefault();
  event.stopPropagation();

  cardIndex++;
  localStorage.setItem('cardIndex', cardIndex);
  renderCard();
};

next.addEventListener('click', nextHandler);
