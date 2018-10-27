'use strict';
var subList = document.getElementById('itemList');
var subList2 = document.getElementById('main');
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
    }
    subList.appendChild(subButt);
  }
  var addButt = document.createElement('li');
  addButt.textContent = '+';
  addButt.setAttribute('id', 'add');
  subList.appendChild(addButt);
};
//
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
}
subButtRenderFunc();
//
var clickHandFunc = function(event){
  console.log(event.target);
  if(event.target.id === 'add'){
    window.location.href = 'newCard.html';
  } else if(event.target.type){
    localStorage.setItem('cardIndex', event.target.id);
    window.location.href = 'card.html';}
};
subList2.addEventListener('click', clickHandFunc);



// var subRenderFunc = function () {
//   subList = document.getElementById('itemList');
//   for (var i in allCards) {
//     var subButt = document.createElement('li');
//     subButt.setAttribute('id', i);
//     subButt.textContent = allCards[i].title;
//     if(allCards[i].solved){
//       subButt.setAttribute('class', 'solved');
//     }
//     subList.appendChild(subButt);
//   }
//   var addButt = document.createElement('li');
//   addButt.textContent = '+';
//   addButt.setAttribute('id', 'add');
//   subList.appendChild(addButt);
// };
// //subRenderFunc();