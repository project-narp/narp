
var allCards = [
  {
    title: 'Boolean',
    explanation: 'Booleans are like an on or off switch, with only two possibilities, true or false',
    example:
`3 > 7
// → false`,
    question: 'Which boolean does the following evaluate to?',
    problem:
'6 + 5 > 11 - 1',
    solution: 'true',
    solved: false,
    group: 0
  },
  {
    title: 'Order of Operations',
    explanation: 'The logical operator || has the lowest precedence, followed by &&, then the comparison operators (>, ==, and so on), then the rest.',
    example:
`2 * 0 || true == false
// → false`,
    question: 'What does this evaluate to?',
    problem:
'1 + 1 == 2 && 10 * 10 > 50',
    solution: 'true',
    solved: false,
    group: 0
  },
  {
    title: 'String concatenation',
    explanation: 'Strings can be concatenated by adding them together with the + operator.',
    example:
`'Se' + 'at' + 'tle' + ' ' + 'Sea' + 'ha' + 'wks'<br>
// → "Seattle Seahawks"`,
    question: 'What does the following string concatenation evaluate to?',
    problem:
'\'Russel\' + \' \' + \'Wilson\' + \' \' + \'is\' + \' \' + \'GOAT\'',
    solution: 'Russel Wilson is GOAT',
    solved: false,
    group: 0
  },
  {
    title: 'Template Literals',
    explanation: 'String literals use backticks (`) and allow you to pass in an expression to be evaluated inside the string. They also allow for multi line strings.',
    example:
`\`3 * 7 is \${3 * 7}\`<br>
// → "3 * 7 is 21"`,
    question: 'What does the whole line evaluate to?',
    problem:
'`a third of 99 is ${99 / 3}`',
    solution: 'a third of 99 is 33',
    solved: false,
    group: 0
  },
  {
    title: 'if, else if, else',
    explanation: 'if, else if, and else test conditionals and can affect the flow of the program depending on the outcome of those conditionals',
    example:
`var adoptSomeCats = function (){
  var howManyToAdopt = Math.floor(Math.random() * 10);
  return howManyToAdopt;
};
var howManyDidYouAdopt = adoptSomeCats();

if (howManyDidYouAdopt > 5){
  console.log(' you have adopted too many cats');
}
else if (howManyDidYouAdopt > 1) {
  console.log('you have adopted the right amount of cats');
}
else {
  console.log('please adopt more cats');
}`,
    question: 'what will the console.log resolve to? ',
    problem:
`var coffee = 'cold';
var drinkAndEnjoy = false;

var microwaveCoffee = function (){
  coffee = 'hot';
  drinkAndEnjoy = true;
};

var brewCoffee = function(){
  coffee = 'hot';
  drinkAndEnjoy = true;
};

if (coffee === 'hot'){
  drinkAndEnjoy = true;
}

else if (coffee === 'cold'){
microwaveCoffee();
}

else {
  brewCoffee();  
}`,

    solution: 'hot true',
    solved: false,
    group: 1,
  },
  {
    title: 'While Loop',
    explanation: 'A while loop will continue to perform an action so long as a given condition is met',
    example: `
  var food = [
  'boiled buns',
  'goose flesh',
  'orange peel pie',
  'cobbled cream',
  'horse sized snickers',
  'buckets of brie',
  'popping corn',
  'mushed potatoes',
  'milkshake buffet'
];
var stomach = [];
var hungry = true;
var checkHunger = function(){
  if(stomach.length >= 5){
    hungry = false;
  }
};
var eat = function (){
  checkHunger();
  var eating = food[Math.floor(Math.random() * food.length)];
  var eaten = food.splice(eating, 1);
  var digestion = stomach.push(eating);
};
while(hungry === true){
  eat();
}`,
    question: 'What sequence of events takes place? Enter a boolean true or false on whether you get pulled over or not',
    problem: `
var speed = 45;
var speedlimit = 60;
var distraction = false;
var fun = false;

var accelerate = function(){
  speed++;
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
        console.log('you got pulled over and this cop looks like he is in a ticket writing mood!');
      }
    }
  }
}`,
    solution: true,
    solved: false,
    group: 1,
  },
  {
    title: 'functions',
    explanation: 'a function is a code block that can defined in a given way and can be called, or executed, when desire',
    example: `var spring = 'spring';
    var summer = 'summer';
    var fall = 'fall';
    var winter = 'winter';
    var seattle = function (weather){
      console.log(weather);
      if(weather === 'summer'){
        return 'its dry, nice, and beautiful';
      }
      else if (weather !== 'summer') {
        return 'its raining';}
    };
    
    seattle('spring');`,
    question: 'any string passed into the meditation() will result in the same advice, true or false',
    problem: `
    var meditation = function(anything){
      if (anything){
        console.log( ``objectively observe ${anything}, it is impermanent``);
      }
      else if (!anything){
        console.log('obectively observe what is there to be observed, it is impermanent');
      }
    };
    meditation(); 
    `,
    solution: true,
    solved: false,
    group: 2


];

// var spring = 'spring';
// var summer = 'summer';
// var fall = 'fall';
// var winter = 'winter';
// var seattle = function (weather){
//   console.log(weather);
//   if(weather === 'summer'){
//     return 'its dry, nice, and beautiful';
//   }
//   else if (weather !== 'summer') {
//     return 'its raining';}
// };

// seattle('spring');

// var meditation = function(anything){
//   if (anything){
//     console.log( `objectively observe ${anything}, it is impermanent`);
//   }
//   else if (!anything){
//     console.log('obectively observe what is there to be observed, it is impermanent');
//   }
// };
// meditation(); 
