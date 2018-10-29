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
} else if (coffee === 'cold') {
  microwaveCoffee();
} else {
  brewCoffee();  
}

console.log(coffee, drinkAndEnjoy);
`,
    solution: 'hot true',
    solved: false,
    group: 1,
  },
];
