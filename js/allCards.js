var allCards = [
  {
    title: 'Boolean',
    explanation: 'Booleans are like an on or off switch, with only two possibilities, true or false',
    example: `
      3 > 7 <br>
      // → false
    `,
    question: 'Which boolean does the following evaluate to?',
    problem: '6 + 5 > 11 - 1',
    solution: 'true',
    solved: false
  },
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
    title: 'String concatenation',
    explanation: 'Strings can be concatenated by adding them together with the + operator.',
    example: `
    'Se' + 'at' + 'tle' + ' ' + 'Sea' + 'ha' + 'wks'<br>
    // → "Seattle Seahawks"
    `,
    question: 'What does the following string concatenation evaluate to?',
    problem: '\'Russel\' + \' \' + \'Wilson\' + \' \' + \'is\' + \' \' + \'GOAT\'',
    solution: 'Russel Wilson is GOAT',
    solved: false
  },
  {
    title: 'Template Literals',
    explanation: 'String literals use backticks (`) and allow you to pass in an expression to be evaluated inside the string. They also allow for multi line strings.',
    example: `
      \`3 * 7 is \${3 * 7}\`<br>
      // → "3 * 7 is 21"
    `,
    question: 'What does the whole line evaluate to?',
    problem: '`a third of 99 is ${99 / 3}`',
    solution: 'a third of 99 is 33',
    solved: false
  },
  {
    title: 'Types',
    explanation: '<code>typeof</code> is a unary operator which evaluates to a string of the type of value it precedes.',
    example: `
      typeof {a : "apple", b : "banana"}<br>
      // → "object"
    `,
    question: 'What does this evaluate to?',
    problem: 'typeof [1,2,3]',
    solution: 'object',
    solved: false
  },
];
