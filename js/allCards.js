
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
    title: 'Conditionals',
    explanation: '<code>if</code>, <code>else if</code>, and <code>else</code> are conditional keywords and affect the flow of the program depending on the outcome of the expressions which they evaluate.',
    example:
`var adoptSomeCats = function (howManyToAdopt){
  return howManyToAdopt;
};
var howManyDidYouAdopt = adoptSomeCats();

if (howManyDidYouAdopt > 5) {
  console.log(' you have adopted too many cats');
} else if (howManyDidYouAdopt > 1) {
  console.log('you have adopted the right amount of cats');
} else {
  console.log('please adopt more cats');
}`,
    question: 'What will the console.log resolve to? ',
    problem:
`var coffee = 'cold';
var drinkAndEnjoy = false;

export  $initHighlight;`,
    solution: 'test',
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
    problem: `
var coffee = 'cold';
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
}

console.log(coffee, drinkAndEnjoy);
`,
    solution: 'hot true',
    solved: false,
    group: 1,
  },
  {
    title: 'While Loop',
    explanation: 'A while loop will continue to perform an action so long as a given condition is met',
    example: 
  `var food = [
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
    title: 'Array',
    explanation: 'An array is a data structure that stores information as a variable at numbered index points.',
    example:
  `var thisArray = [1,1,2,3,5,8];
   thisArray[5] = 8;
   //thisArray at index 5 gives you 8
   thisArray.length(); = 6;
   //thisArray is 6 indexes long but the last index is 5 because arrays always start at index 0
  `,
    question: 'What do the letters spell in the numbered indexes that are divisible by 3 of the below array?',
    problem:
  'var questionArray = [1,z,f,c,o,a,o,w,k,d,g,h,e]',
    solution: 'code',
    solved: false,
    group: 3
  },
  {
    //the opinions expresssed are ricks and ricks alone
    title: 'Object Literal',
    explanation: 'An object literal is a data structure that stores information as a variable at named index points similarly to how an array functions with numbered points.',
    example:
  `var = teacher{
    isCorny: true,
    knwldgeLvl: 9001,
    favSaying: 'yeah',
    gainsKnwldge: function(){
      this.knwldgeLvl++;
    },
  }`,
    question: 'Consider the below block of code.  What will the console log at the end display?',
    problem:
    `var student1 = {
        favAnimal: 'cat',
        favWeather: 'rain',
    }
    var student2 = {
      favWeapon: 'bow',
      favAnimal: 'ManBearPig',
    }
   console.log(student1.favWeather + student2.favWeapon);`,
    solution: 'rainbow',
    solved: false,
    group: 3
  },
];


