'use strict';

var allCards = [
  {
    title: 'Booleans',
    explanation: 'Booleans are like an on or off switch, with only two possibilities, true or false.',
    example:
`3 > 7
// → false`,
    question: 'What does the following evaluate to?',
    problem:
'6 + 5 > 11 - 1',
    solution: 'true',
    solved: false,
    group: 0
  },
  {
    title: 'Order of Operations',
    explanation: 'The logical operator || has the lowest precedence, followed by &&, then the comparison operators (>, ==, and so on), then the rest. The arithmetic operators follow the normal PEMDAS order.',
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
`'Se' + 'at' + 'tle' + ' ' + 'Sea' + 'ha' + 'wks'
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
    explanation: 'String literals use backticks (`) and allow you to pass in an expression to be evaluated inside the string. They also allow for white space to be preserved in multi-line strings.',
    example:
`\`3 * 7 is \${3 * 7}\`
// → "3 * 7 is 21"`,
    question: 'What does the whole line evaluate to?',
    problem:
'`a third of 99 is ${99 / 3}`',
    solution: 'a third of 99 is 33',
    solved: false,
    group: 0
  },
  {
    title: 'Types',
    explanation: '<code>typeof</code> is a unary operator which evaluates to a string of the type of value it precedes.',
    example:
`typeof {a : "apple", b : "banana"}
// → "object"`,
    question: 'What does this evaluate to?',
    problem:
'typeof [1,2,3]',
    solution: 'object',
    solved: false,
    group: 0,
    reason: 'Arrays are a special type of object in JavaScript: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array">Further Reading</a> on arrays. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof">Further Reading</a> on the <code>typeof</code> operator.'
  },
  {
    title: 'Conditional Statements',
    explanation: 'The keywords <code>if</code>, <code>else if</code>, and <code>else</code> test conditionals and can affect the flow of the program depending on the outcome of those conditionals',
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
    question: 'What will the following code log to the console? ',
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
}

console.log(coffee, drinkAndEnjoy);`,
    solution: 'hot true',
    solved: false,
    group: 1,
  },
  {
    title: 'Arrays',
    explanation: 'An array is a data structure that stores information sequentially. Accessing values are done using <code>array[index]</code> notation. The length of the array can be ascertained by its <code>length</code> property.',
    example:
`var thisArray = [1,1,2,3,5,8];
// → 8
thisArray.length;
// → 6`,
    question: 'What does the following log to the console?',
    problem:
`var arr = ['l','z','f','c','o','a','o','w','k','d','g','h','e'];
console.log(arr[3] + arr[6] + arr[9] + arr[12]);`,
    solution: 'code',
    solved: false,
    group: 3
  },
  {
    title: 'Objects',
    explanation: 'An object is a data structure that stores information as key/value pairs. Accessing the value can be done using <code>object["key"]</code> or <code>object.key</code> notations.',
    example:
`var = teacher{
  isChill: true,
  knwldgeLvl: 9001,
  favSaying: 'yeah',
  gainsKnwldge: function(){
    this.knwldgeLvl++;
  },
}`,
    question: 'What does the following code log to the console?',
    problem:
`var student1 = {
  favAnimal: 'cat',
  favWeather: 'rain',
};
var student2 = {
  favWeapon: 'bow',
  favAnimal: 'ManBearPig',
};
console.log(student1.favWeather + student2.favWeapon);`,
    solution: 'rainbow',
    solved: false,
    group: 3
  },

  {
    title: 'Fun with Functions',
    explanation: 'Functions are like mini programs where you can write functionality into an enclosed code block, then execute it, or call it when you want to. Until it\'s called it waits patiently, doing nothing.',
    example:
`var kittyCat = function(myArg) {
  var behaviorsTired = [
    'cat nap', 
    'sleep for 18 hours', 
    'yawn and scratch', 
    'fall over', 
    'curl in a ball'
  ];
  var behaviorsPlayful = [
    'catnip',
    'run like primal beast',
    'scratch and bite things that can hurt',
    'find other cats and fight them', 
    'intimidate dogs 10 my size', 
    'walk across your keyboard and type nonsense',
    'claw at your ear and rub your side', 
    'purr with intention and heart'
  ];
  var behaviorsHungry = [
    'take a small break from napping to overeat',
    'gorge myself', 
    'kill a lessor animal for fun, eat part of it, leave the rest', 
    'bite at my human until it swats me away',
    'meow angrily till my human gives in and feeds me more'
  ];

  if (myArg === 'tired') {
    return behaviorsTired[Math.floor(Math.random() 
      * behaviorsTired.length)];
  } else if (myArg === 'playful') {
    return behaviorsPlayful[Math.floor(Math.random() 
      * behaviorsPlayful.length)];
  }else if (myArg === 'hungry'){
    return behaviorsHungry[Math.floor(Math.random() 
      * behaviorsHungry.length)];
  }
};
console.log(kittyCat('playful'));
// → (will log a random string from behaviorsPlayful)`,
    question: 'A \'true\' domino is a domino that is standing and lined up, a false one is one that has been knocked over. How do can you knock over all these dominoes by \'flicking\' the first one to start a chain reaction? Don\'t forget to bring a semicolon!',
    problem:
`var dominosLinedUp = [
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true,
  true
];
var flick = function(){
for (var i = 0; i < dominosLinedUp.length; i ++){
  if (dominosLinedUp[i] === true){
    dominosLinedUp[i] = false;
    }
  }
};`,
    solution: 'flick();',
    solved: false,
    group: 2,
  },
  {
    title: 'Let',
    explanation: 'The <code>let</code> keyword is similar to <code>var</code> in that it signifies the start of a variable binding. The <code>let</code> binding is scoped to the statement block it is declared in, including if/else blocks and loop blocks, whereas the <code>var</code> binding is scoped to the function it is declared in.',
    example:
`let x = 1;
if (true) {
  let y = 2;
  var z = 3;
  console.log(x + y + z);
  // → 6
}
// y is not visible here
console.log(x + z);
// → 4`,
    question: 'What does the code below log to the console?',
    problem:
`var a = 2;
let b = 3;
if (true) {
  var a = 5;
  let b = 7;
}
console.log(a * b);`,
    solution: '15',
    solved: false,
    group: 1,
    reason: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let">Further Reading</a>'
  },
  {
    title: 'Sort',
    explanation: 'The <code>sort</code> method sorts the items of an array. The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down). By default, the <code>sort</code> method sorts the values as strings in alphabetical and ascending order. This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1". Because of this, the <code>sort</code> method will produce an incorrect result when sorting numbers.',
    example:
`var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.sort();
// → [ 'Apple', 'Banana', 'Mango', 'Orange' ]`,
    question: 'What does the following code log to the console?',
    problem:
`var arr = [10, -7, 0, -2, 5];
console.log(arr.sort()[0]);`,
    solution: '-2',
    solved: false,
    group: 3,
    reason: 'Since the sort method sorts numbers lexicographically, -2 comes before -7. The sorted array from above is <code>[-2, -7, 0, 10, 5]</code>. The solution is to pass a comparison function into the sort method: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort">Further Reading</a>'
  },
  {
    title: 'Ternary Operator',
    explanation: 'This one is called the conditional operator (or sometimes just the ternary operator since it is the only such operator in the language). The value on the left of the question mark “picks” which of the other two values will come out. When it is true, it chooses the middle value, and when it is false, it chooses the value on the right.',
    example:
`console.log(true ? 1 : 2);
// → 1
console.log(false ? 1 : 2);
// → 2`,
    question: 'What does the following code log to the console?',
    problem:
`var comparator = 13 % 4 === 1 ? '>' : '<';
console.log(\`javascript \${comparator} python\`);`,
    solution: 'javascript > python',
    solved: false,
    group: 1,
    reason: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">Further Reading</a>'
  },
  {
    title: 'Recursion',
    explanation: 'A function that calls itself is called recursive.',
    example:
`function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
// → 8`,
    question: 'What does the following code return?',
    problem:
`function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
factorial(6);`,
    solution: '720',
    solved: false,
    group: 2
  },{
    title: 'Function Declaration and Expression',
    explanation: 'Besides from the syntax differences, the biggest difference between these two types of functions is that function declarations can be called above or below where it is defined, whereas function expressions behave like other variables and can only be called below the definition.',
    example:
`var x = function(){
  console.log('x');  
}
function y(){
  console.log('y');
}
x();
y();`,
    question: 'Will the following code run or result in an error, enter <code>true</code> if it will run, enter <code>false</code> if it will break.',
    problem:
`fishNum();
fishColor();
function fishNum() {
  console.log('One fish, two fish');
}
var fishColor = function(){
  console.log('Red fish, blue fish');
};`,
    solution: 'false',
    solved: false,
    group: 2,
  },
  {
    title: 'For Loop',
    explanation: 'A for loop is a type of loop that executes over  a given range and performs given actions over the course of that range.',
    example:
`var lifespan = 80
living = false;
memories = [];
for (year = 0; year < lifespan; year ++){
  living = true;  
  memories.push(year);
}
living = false;
memories = [];`,
    question: 'What will the following code return? And food for thought, should the store Forever 21 rebrand as Forever Fibonacci 8?',
    problem:
`var fibby = function(fibLength){
  var oldMemory = 1;
  var newMemory = 1;
  var active;
  if (fibLength === 1){
    return 0;
  }
  else if (fibLength === 2 || fibLength === 3){
    return 1;
  }
  for (var i = 2; i < fibLength; i ++){
    active = oldMemory + newMemory;

    oldMemory = newMemory;
    newMemory = active;
  }
  return active;
};
fibby(8);`,

    solution: '21',
    solved: false,
    group: 1,
    reason: 'The Fibonacci sequence\'s first three iterations are 0,1,1. We hard coded those, and that\'s why our for loop iterator begins at 2.  newMemory is current and oldMemory is 1 iteration older than it. Active adds both memories, oldMemory becomes newMemory and newMemory becomes active. In this way the memories are constantly updating themselves, and active is growing the sum larger and larger.',
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
    question: 'You\'re drowning at a depth of -50, how will you survive? Don\'t forget to bring a semicolon!',
    problem:
`var underwater = function(depth){
  var swimming = true;
  while (swimming){
    depth ++;
    if (depth >= 0){
      swimming = false;
    }
  }
  console.log("hurray you didn't drown!");
};`,
    solution: 'underwater(-50);',
    solved: false,
    group: 1,
  },

  {
    title: 'Arrow Functions',
    explanation: 'Arrow functions are function expressions (with one caveat - the <code>this</code> keyword does not refer to its containing object) written in a different syntax. The arrow comes after the list of parameters and is followed by the function’s body. It expresses something like “this input (the parameters) produces this result (the body)”. When there is only one parameter name, you can omit the parentheses around the parameter list. If the body is a single expression, rather than a block in braces, that expression will be returned from the function. When an arrow function has no parameters at all, its parameter list is just an empty set of parentheses.',
    example:
`var doubleSum = (a, b) => {
  return (a + b) * 2;
};
var timesTwo = x => x * 2;
var pi = () => Math.PI;
console.log(doubleSum(3, 5));
// → 16
console.log(timesTwo(8));
// → 16
console.log(pi());
// → 3.141592653589793`,
    question: 'What does the following log to the console?',
    problem:
`var whats = thisThing => {
  if (thisThing.toLowerCase() === 'updog') {
    console.log('Not much and you?');
  } else {
    console.log('Who knows?');
  }
};
whats('Updog');`,
    solution: 'Not much and you?',
    solved: false,
    group: 2,
    reason: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions">Further Reading</a>'
  },

  {
    title: 'Map',
    explanation: 'The <code>map</code> method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been mapped to a new form by the function.',
    example:
`var arr = [1, 2, 3, 4];
arr.map(n => n * n);
// → [1, 4, 9, 16]`,
    question: 'What does the following log to the screen?',
    problem:
`var bartenders = [
  {name: 'Dennis', spiritAnimal: 'cat', beersDeep: 7},
  {name: 'Mac', spiritAnimal: 'dog', beersDeep: 8},
  {name: 'Charlie', spiritAnimal: 'rat', beersDeep: 12},
  {name: 'Dee', spiritAnimal: 'bird', beersDeep: 11}
];
var peter = bartenders.map(o => o.name)[2];
console.log(\`Peter is \${peter}.\`);`,
    solution: 'Peter is Charlie.',
    solved: false,
    group: 3,
    reason: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map">Further Reading</a>'
  },

  {
    title: 'Filter',
    explanation: 'The <code>filter</code> array method creates a new array based on the condition passed into it.',
    example:
`var arr = [1, 2, 3, 4];
arr.filter(n => n % 2 === 1);
// → [1, 3]`,
    question: 'What does the following log to the console?',
    problem:
`var bartenders = [
  {name: 'Dennis', spiritAnimal: 'cat', beersDeep: 7},
  {name: 'Mac', spiritAnimal: 'dog', beersDeep: 8},
  {name: 'Charlie', spiritAnimal: 'rat', beersDeep: 12},
  {name: 'Dee', spiritAnimal: 'bird', beersDeep: 11}
];
var numBirds = bartenders.filter(o => o.spiritAnimal === 'bird').length;
var plural = numBirds === 1 ? '' : 's';
console.log(\`Only \${numBirds} bird\${plural} working tonight.\`)`,
    solution: 'Only 1 bird working tonight.',
    solved: false,
    group: 3,
    reason: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter">Further Reading</a>'
  }, 

  {
    title: 'Reduce',
    explanation: 'The <code>reduce</code> method executes a reducer function (that you provide) on each member of the array resulting in a single output value. It builds a value by repeatedly taking a single element from the array and combining it with the current value. When summing numbers, you’d start with the number zero and, for each element, add that to the sum.',
    example:
`var arr = [1, 2, 3, 4];
arr.reduce((a, n) => a + n);
// → 10`,
    question: 'If a second argument is provided to the <code>reduce</code> method, that will be the initial value of the accumulator. Otherwise it will start as the first element of the array. What does the following log to the console?',
    problem:
`var bartenders = [
  {name: 'Dennis', spiritAnimal: 'cat', beersDeep: 7},
  {name: 'Mac', spiritAnimal: 'dog', beersDeep: 8},
  {name: 'Charlie', spiritAnimal: 'rat', beersDeep: 12},
  {name: 'Dee', spiritAnimal: 'bird', beersDeep: 11}
];
var numBeers = bartenders.filter(o => o.spiritAnimal !== 'bird').reduce((a, o) => {
  return a + o.beersDeep;
}, 0);
console.log(\`The nonbirds are \${numBeers} beers deep.\`);`,
    solution: 'The nonbirds are 27 beers deep.',
    solved: false,
    group: 3,
    reason: '<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce">Further Reading</a>'
  }
];





//title
//explanation
// example
// question
// problem
// solution
// solved
// group
// reason
