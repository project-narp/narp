'use strict';

// Andrews code to store to / retrieve from localStorage
if (!localStorage.getItem('allCards')){
  allCards.sort((a, b) => a.group - b.group);
  localStorage.setItem('allCards', JSON.stringify(allCards));
} else {
  allCards = JSON.parse(localStorage.getItem('allCards'));
}


// ===========================================
// EVENTS & HANDLERS
// ===========================================
var cardHandler = function(event) {
  // check for id, if not one get it from parent element
  if (!event.target.id) {
    var id = Number(event.target.parentElement.id);
  }
  localStorage.setItem('cardIndex', Number(event.target.id || id));
  window.location.href = 'card.html';
};

var newCardHandler = function(event) {
  window.location.href = 'newCard.html';
};
document.getElementById('plus').addEventListener('click', newCardHandler);

// more options event
document.getElementById('more').addEventListener('click', event => {
  event.preventDefault();
  event.stopPropagation();

  document.getElementById('more').style.display = 'none';
  document.getElementById('options').style.display = 'block';
});

// reset all progress (get rid of line-throughs)
document.getElementById('progress').addEventListener('click', event => {
  event.preventDefault();
  event.stopPropagation();

  allCards.forEach(card => card.solved = false);
  localStorage.setItem('allCards', JSON.stringify(allCards));
  location.reload();
});

// reset all cards to originals event
document.getElementById('reset').addEventListener('click', event => {
  event.preventDefault();
  event.stopPropagation();

  localStorage.clear();
  location.reload();
});


// ===========================================
// RENDER CARDS
// ===========================================
var renderCards = function() {
  var fundamentals = document.getElementById('fundamentals');
  var controlFlow = document.getElementById('control-flow');
  var functions = document.getElementById('functions');
  var dataStructures = document.getElementById('data-structures');
  for (var i in allCards) {
    var card = allCards[i];
    var div = document.createElement('div');
    var h3 = document.createElement('h3');
    h3.textContent = card.title;
    div.appendChild(h3);
    div.id = i;
    div.addEventListener('click', cardHandler);
    if (card.solved) div.setAttribute('class', 'solved');
    if (card.group === 0) {
      fundamentals.appendChild(div);
    } else if (card.group === 1) {
      controlFlow.appendChild(div);
    } else if (card.group === 2) {
      functions.appendChild(div);
    } else if (card.group === 3 ){
      dataStructures.appendChild(div);
    }
  }
};

renderCards();
