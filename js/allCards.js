var allCards = [
  {
    title: 'Order of Operations',
    explanation: 'The logical operator || has the lowest precedence, followed by &&, then the comparison operators (>, ==, and so on), then the rest.',
    example: `
      2 * 0 || true == false <br>
      // → false
    `,
    question: 'What does this evaluate to?',
    problem: '1 + 1 == 2 && 10 * 10 > 50',
    solution: 'true',
    solved: false
  },
  {
    title: 'String Literals',
    explanation: 'String literals use backticks (`) and allow you to pass in an expression to be evaluated inside the string. They also allow for multi line strings',
    example: `
      \`3 * 7 is \${3 * 7}\`<br>
      // → 3 * 7 is 21
    `,
    question: 'What does the whole line evaluate to?',
    problem: '`a third of 99 is ${99 / 3}`',
    solution: 'a third of 99 is 33',
    solved: false
  }
];
