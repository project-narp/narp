var allCards = [
  {
    title: 'Order of Operations',
    explanation: 'The logical operator || has the lowest precedence, followed by &&, then the comparison operators (>, ==, and so on), then the rest.',
    example: `
      2 * 0 || true == false <br>
      // → false`,
    question: 'What does this evaluate to?',
    problem: '1 + 1 == 2 && 10 * 10 > 50',
    solution: 'true',
    solved: false
  },
  {
    title: 'String Literals',
    explanation: 'string literals allow you to pass a string template which will resolve down to a value before being displayed as a string. The template looks like this: ${} ',
    example: ' 3 * 7 is ${3 * 7}',
    question: 'What does the whole line evaluate to?',
    problem: 'a third of 99 is ${99 / 3}',
    solution: 'a third of 99 is 33',
    solved: false
  }
];
