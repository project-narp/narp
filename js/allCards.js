var allCards = [
    {
    title: 'Order of Operations',
    explanation: 'The logical operator || has the lowest precedence, followed by &&, then the comparison operators (>, ==, and so on), then the rest.',
    example: `
      2 * 0 || true == false<br>
      // → false
    `,
    question: 'What does this evaluate to?',
    problem: '1 + 1 == 2 && 10 * 10 > 50',
    solution: 'true',
    solved: false
  },
  {
    title: 'String Literals',
    explanation: 'String literals use backticks (`) and allow you to pass in an expression to be evaluated inside the string. They also allow for multi line strings.',
    example: `
      \`3 * 7 is \${3 * 7}\`<br>
      // → 3 * 7 is 21
    `,
    question: 'What does the whole line evaluate to?',
    problem: '`a third of 99 is ${99 / 3}`',
    solution: 'a third of 99 is 33',
    solved: false
  },
  {
    title: 'Unary Operators',
    explanation: 'typeof is an operator which evaluates to a string of the type of value passed to it',
    example: `
    console.log(typeof {a : "apple", b : "banana", c : "cake"}) <br>
    // → "Object"`,
    question: 'What does this typeof evaluate to?',
    problem: 'typeof [1,2,3]',
    solution: 'object',
    solved: false
  },
  {
    title: 'Boolean',
    explanation: 'Booleans are like an on or off switch, with only two possibilities, true or false',
    example: `
    console.log(3 > 7) <br>
    // → false`,
    question: 'Which boolean does the following evaluate to?',
    problem: 'console.log(6 + 5 > 11 - 1)',
    solution: 'true',
    solved: false
  },
  {
    title: 'String concatenation',
    explanation: 'Strings can add together with by adding them together with the + operator, but you can only add strings',
    example: "'se' + 'at' + 'tle' + ' ' + 'sea' + 'ha' + 'wks' evaluates to seattle seahawks",
    question: 'What does the following string concatenation evaluate to?',
    problem: ' Russel' + ' ' + 'Wilson' + ' ' + 'is' + ' ' + 'GOAT',
    solution: 'Russel Wilson is GOAT',
    solved: false
  }
];
