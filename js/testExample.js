var options = ['rock', 'paper', 'scissors'];

var playerOne = function(){
  pickOne = options[Math.floor(Math.random() * options.length)];
  return pickOne;
};
playerOne();

var playerTwo = function(){
  pickOne = options[Math.floor(Math.random() * options.length)];
  return pickOne;
};
playerTwo();

drawing = function(){
var draw = [playerOne(), playerTwo()];
console.log(draw);
return draw;
};

drawing();