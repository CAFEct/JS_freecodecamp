const questions = [
  {
    category: "comedia",
    question: "por que a fita isolante sempre ganha?",
    choices: ["porque a faixa e preta", "tst", "test"],
    answer: "porque a faixa e preta"
  }
]


function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex]
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResults(question, computerChoice) {
  if (computerChoice === question.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`
  }
}
