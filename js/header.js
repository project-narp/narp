'use strict';
//will create a header for every page
var renderHeader = function() {
  var header = document.createElement('header');

  //create h1 element with name inside
  var h1 = document.createElement('h1');
  h1.textContent = 'Project NARP';

  //creates div with img
  // var div = document.createElement('div');
  var img = document.createElement('img');
  img.setAttribute('src', 'images/ninja.png');
  img.setAttribute('alt', 'ninja with swords');

  //creates navigation bar
  // var div2 = document.createElement('div');
  var ul = document.createElement('ul');
  var li = document.createElement('li');
  var anchor = document.createElement('a');
  anchor.textContent = 'Homepage';
  anchor.setAttribute('href', 'index.html');

  var li2 = document.createElement('li');
  var anchor2 = document.createElement('a');
  anchor2.textContent ='About Us';
  anchor2.setAttribute('href', 'aboutus.html');

  //nav Adventure Link
  var li3 = document.createElement('li');
  var anchor3 = document.createElement('a');
  anchor3.textContent = 'Choose Your Adventure';
  anchor3.setAttribute('href', 'sub.html');

  //appends entire header
  // document.body.appendChild(header);
  // document.body.appendChild(h1);
  // document.body.appendChild(div);
  // document.body.appendChild(img);
  // document.body.appendChild(div2);
  // document.body.appendChild(ul);
  // document.body.appendChild(li);
  // li.appendChild(anchor);
  // document.body.appendChild(li2);
  // li2.appendChild(anchor2);
  // document.body.appendChild(li3);
  // li3.appendChild(anchor3);
  li.appendChild(anchor);
  li2.appendChild(anchor2);
  li3.appendChild(anchor3);
  ul.appendChild(li);
  // swapped order of li3 and li2 to make "about us" last
  ul.appendChild(li3);
  ul.appendChild(li2);
  header.appendChild(h1);
  header.appendChild(img);
  header.appendChild(ul);
  document.body.appendChild(header);
};
renderHeader();
