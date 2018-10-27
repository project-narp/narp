'use strict';
var subList2 = document.getElementById('main');
// Andrews funtion to store to LS
if (!localStorage.getItem('allCards')){
  localStorage.setItem('allCards', JSON.stringify(allCards));
} else {
  allCards = JSON.parse(localStorage.getItem('allCards'));
}
//make buttons when page is loaded
var subButtRenderFunc = function(){
  for (var i in allCards) {
    var butt = document.createElement('button');
    butt.setAttribute('type', 'button');
    butt.setAttribute('id', i);
    butt.textContent = allCards[i].title;
    if(allCards[i].solved){
      butt.setAttribute('class', 'solved');
    }
    subList2.appendChild(butt);
  }
  butt = document.createElement('button');
  butt.setAttribute('type', 'button');
  butt.setAttribute('id', 'add');
  butt.textContent = '+';
  subList2.appendChild(butt);
};
subButtRenderFunc();
//do something when you click a button
var clickHandFunc = function(event){
  console.log(event.target);
  if(event.target.id === 'add'){
    window.location.href = 'newCard.html';
  } else if(event.target.type){
    localStorage.setItem('cardIndex', event.target.id);
    window.location.href = 'card.html';}
};
subList2.addEventListener('click', clickHandFunc);
