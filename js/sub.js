'use strict';
var subList = document.getElementById('itemList');
//
if (!localStorage.getItem('allCards')){
  localStorage.setItem('allCards', JSON.stringify(allCards));
} else {
  allCards = JSON.parse(localStorage.getItem('allCards'));
}
//
var subRenderFunc = function () {
  subList = document.getElementById('itemList');
  for (var i in allCards) {
    var subButt = document.createElement('li');
    subButt.setAttribute('id', i);
    subButt.textContent = allCards[i].title;
    if(allCards[i].solved){
      subButt.setAttribute('class', 'solved');
    };
    subList.appendChild(subButt);
  }
};
subRenderFunc();
//
var clickHandFunc = function(event){
  if(event.target.id){
    console.log(event.target.id);
    localStorage.setItem('cardIndex', event.target.id);
    window.location.href = 'card.html';
  }
};
subList.addEventListener('click', clickHandFunc);



