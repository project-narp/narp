'use strict';
var subList2 = document.getElementById('main');
// Andrews code to store to / retrieve from localStorage
if (!localStorage.getItem('allCards')){
  localStorage.setItem('allCards', JSON.stringify(allCards));
} else {
  allCards = JSON.parse(localStorage.getItem('allCards'));
}
// //make buttons when page is loaded
// var subButtRenderFunc = function(){
//   for (var i in allCards) {
//     var butt = document.createElement('button');
//     butt.setAttribute('type', 'button');
//     butt.setAttribute('id', i);
//     butt.textContent = allCards[i].title;
//     if(allCards[i].solved){
//       butt.setAttribute('class', 'solved');
//     }
//     subList2.appendChild(butt);
//   }
//   butt = document.createElement('button');
//   butt.setAttribute('type', 'button');
//   butt.setAttribute('id', 'add');
//   butt.textContent = '+';
//   subList2.appendChild(butt);
// };
// subButtRenderFunc();
// //do something when you click a button
// var clickHandFunc = function(event){
//   console.log(event.target);
//   if(event.target.id === 'add'){
//     window.location.href = 'newCard.html';
//   } else if(event.target.type){
//     localStorage.setItem('cardIndex', event.target.id);
//     window.location.href = 'card.html';}
// };
// subList2.addEventListener('click', clickHandFunc);

var renderCards = function() {
  var fundamentals = document.getElementById('fundamentals');
  var controlFlow = document.getElementById('control-flow');
  var functions = document.getElementById('functions');
  var dataStructures = document.getElementById('data-structures');
  for (var card of allCards) {
    var div = document.createElement('div');
    var h3 = document.createElement('h2');
    h3.textContent = card.title;
    div.appendChild(h3);
    if (card.group === 0) {
      fundamentals.appendChild(div);
    } else if (card.group === 1) {
      controlFlow.appendChild(div);
    } else if (card.group === 2) {
      functions.appendChild(div);
    } else {
      dataStructures.appendChild(div);
    }
  }
};

renderCards();
