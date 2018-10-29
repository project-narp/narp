'use strict';

// var adoptSomeCats = function (){
//   var howManyToAdopt = Math.floor(Math.random() * 10);
//   return howManyToAdopt;
// };
// var howManyDidYouAdopt = adoptSomeCats();

// if (howManyDidYouAdopt > 5){
//   console.log(' you have adopted too many cats');
// }
// else if (howManyDidYouAdopt > 1) {
//   console.log('you have adopted the right amount of cats');
// }
// else {
//   console.log('please adopt more cats');
// }


// var coffee = 'cold';
// var drinkAndEnjoy = false;

// var microwaveCoffee = function (){
//   coffee = 'hot';
//   drinkAndEnjoy = true;
// };

//  var brewCoffee = function(){
//   coffee = 'hot';
//   drinkAndEnjoy = true;
// };

// if (coffee === 'hot'){
//   drinkAndEnjoy = true;
// }

// else if (coffee === 'cold'){
// microwaveCoffee();
// }

// else {
//   brewCoffee();
// }

// console.log(coffee, drinkAndEnjoy);


// var food = [
//   'boiled buns',
//   'goose flesh',
//   'orange peel pie',
//   'cobbled cream',
//   'horse sized snickers',
//   'buckets of brie',
//   'popping corn',
//   'mushed potatoes',
//   'milkshake buffet'
// ];
// var stomach = [];
// var hungry = true;
// var checkHunger = function(){
//   if(stomach.length >= 5){
//     hungry = false;
//   }
// };
// var eat = function (){
//   checkHunger();
//   var eating = food[Math.floor(Math.random() * food.length)];
//   var eaten = food.splice(eating, 1);
//   var digestion = stomach.push(eating);
// };
// while(hungry === true){
//   eat();
// }

var timeRemaining = 10;
var now;
var seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
var reachedWinter = false;
var passingOfTime = function(){
  for (var time = 0; time < seasons.length; time ++){
    now = seasons[time];
    
    while(timeRemaining >= 0){
      console.log(timeRemaining);
      if (time === seasons.length -1){
        time = 0;
        timeRemaining --;
      }
    }
  }
};
passingOfTime();





