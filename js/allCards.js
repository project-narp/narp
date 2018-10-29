
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
    group: 0
  },
  {
    title: 'Test',
    explanation: 'Text explanation',
    example:
`function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
            \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export  $initHighlight;`,
    question: 'Test question',
    problem:
`function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
            \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

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
  // {
  //   title: 'While Loop',
  //   explanation: 'A while loop will continue to perform an action so long as a given condition is met',
  //   example: `var food = [
  //     'boiled buns',
  //     'goose flesh',
  //     'orange peel pie',
  //     'cobbled cream',
  //     'horse sized snickers',
  //     'buckets of brie',
  //     'popping corn',
  //     'mushed potatoes',
  //     'milkshake buffet'
  //   ];
  //   var stomach = [];
  //   var hungry = true;
  //   var checkHunger = function(){
  //     if(stomach.length >= 5){
  //       hungry = false;
  //     }
  //   };
  //   var eat = function (){
  //     checkHunger();
  //     var eating = food[Math.floor(Math.random() * food.length)];
  //     var eaten = food.splice(eating, 1);
  //     var digestion = stomach.push(eating);
  //   };
  //   while(hungry === true){
  //     eat();
  //   }`,
  //   question: 
    
  // },


];


