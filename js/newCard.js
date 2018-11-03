'use strict';

var cardForm = document.getElementById('cardForm');

var Card = function(title, explanation, example, question, problem, solution, group, reason){
  this.title = title;
  this.explanation = explanation;
  this.example = example;
  this.question = question;
  this.problem = problem;
  this.solution = solution;
  this.solved = false;
  this.group = group;
  if (reason) this.reason = reason;
};

var newCardHandler = function(event){
  event.preventDefault();
  event.stopPropagation();

  var cardTitle = event.target.title.value;
  var cardExplanation = event.target.explanation.value;
  var cardExample = event.target.example.value;
  var cardQuestion = event.target.question.value;
  var cardProblem = event.target.problem.value;
  var cardSolution = event.target.solution.value;
  var cardGroup = Number(document.getElementById('group').value);
  var cardReason = event.target.reason.value;


  var card = new Card(cardTitle, cardExplanation, cardExample, cardQuestion, cardProblem, cardSolution, cardGroup, cardReason);


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


// prevent tabbing in code textareas (unsure if keeping)
function enableTab(cl) {
  var els = document.getElementsByClassName(cl);
  console.log(els);
  Array.prototype.forEach.call(els, el => {
    el.onkeydown = function(e) {
      if (e.keyCode === 9) { // tab was pressed

        // get caret position/selection
        var val = this.value,
          start = this.selectionStart,
          end = this.selectionEnd;

        // set textarea value to: text before caret + tab + text after caret
        this.value = val.substring(0, start) + '\t' + val.substring(end);

        // put caret at right position again
        this.selectionStart = this.selectionEnd = start + 1;

        // prevent the focus lose
        return false;

      }
    };
  });
}
// enableTab('code');
