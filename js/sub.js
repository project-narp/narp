'use strict';
var subList = document.getElementById('itemList');
//
var subRenderFunc = function () {
  subList = document.getElementById('itemList');
  for (var i in allCards) {
    var subButt = document.createElement('li');
    subButt.setAttribute('id', i);
    subButt.textContent = allCards[i].title;
    subList.appendChild(subButt);
  }
};
subRenderFunc();
var clickHandFunc = function(event){
  if(event.target.id){
    console.log(event.target.id);
    localStorage.setItem('cardIndex', JSON.stringify(event.target.id));
    window.location.href = 'card.html';
  }
};
subList.addEventListener('click', clickHandFunc);



