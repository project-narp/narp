'use strict';

// ===============================================
// CARDINDEX AND ALLCARDS FROM LOCAL STORAGE
// ===============================================

if (!localStorage.getItem('cardIndex')){
  var cardIndex = 0;
  localStorage.setItem('cardIndex', 0);
} else {
  cardIndex = Number(localStorage.getItem('cardIndex'));
}

if (!localStorage.getItem('allCards')){
  localStorage.setItem('allCards', JSON.stringify(allCards));
} else {
  allCards = JSON.parse(localStorage.getItem('allCards'));
}


// ===============================================
// RENDER CARD
// ===============================================
var renderCard = function() {
  var card = allCards[cardIndex];
  var title = document.getElementById('title');
  title.textContent = card.title;

  var groupTopics = ['Fundamentals', 'Control Flow', 'Functions', 'Data Structures'];
  var group = document.getElementById('group');
  group.innerHTML = groupTopics[card.group];

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
    // update solved boolean and save to localStorage
    allCards[cardIndex].solved = true;
    localStorage.setItem('allCards', JSON.stringify(allCards));

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
  if (cardIndex >= allCards.length) {
    window.location.href = 'sub.html';
    return;
  }
  localStorage.setItem('cardIndex', cardIndex);
  // renderCard();
  location.reload();
};

next.addEventListener('click', nextHandler);


// ===============================================
// MISC
// ===============================================
// prevent right clicking problem code
var problem = document.getElementById('problem');
problem.addEventListener('contextmenu', event => event.preventDefault());
