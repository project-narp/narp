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


