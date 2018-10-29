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


// this keeps crashing
// var timeRemaining = 20;
// var theresTimeLeft = true;
// var calender = 0;
// var seasons = ['Spring', 'Summer', 'Fall', 'Winter'];
// var reachedWinter = false;

// while (theresTimeLeft === true) {
//   if (timeRemaining <= 0){
//     theresTimeLeft = false;
//   }

//   for (calender; calender <= seasons.length; calender++){
//     timeRemaining --;
//     console.log(timeRemaining);
//     if (calender === seasons.length){
//       calender = 0;
//     }
//   }
// }


// works
// var seasons = ['spring', 'summer', 'fall', 'winter'];
// var seattleIsRaining = false;

// for (var season = 0; season < seasons.length; season++){
//   console.log(seasons[season]);
//   if (seasons[season] !== 'summer'){
//     seattleIsRaining = true;
//     console.log(seattleIsRaining);
//   }
//   else if(seasons[season] === 'summer'){
//     seattleIsRaining = false;
//     console.log(seattleIsRaining);
//   }
// }


var speed = 45;
var speedlimit = 60;
var distraction = false;
var fun = false;

var accelerate = function(){
  speed++;
  console.log(speed);
};
var brake = function(){
  speed --;
};
while (speed < speedlimit && distraction === false){
  accelerate();
}
while (speed > speedlimit && distraction === false){
  brake();
}
var airDrummingToASongYouLove = function (){
  fun = true;
  distraction = true;
};
airDrummingToASongYouLove();
var copWillPullYouOver = 65;
while(distraction === true){
  accelerate();
  if (speed > copWillPullYouOver){
    distraction = false;
    while (speed > 0){
      brake();
      if (speed === 0){
        console.log('you got pulled over and this cop looks like he\'s in a ticket writing mood!');
      }
    }
  }
}








