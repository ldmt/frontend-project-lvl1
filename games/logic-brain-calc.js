import createGame from '../src/index.js';
import randomInt from '../src/randomInt.js';

const questionFunct = () => {
  const firstOperand = randomInt(30);
  const secondOperand = randomInt(30);
  const arrOperators = ['+', '-', '*'];
  const randomOperator = arrOperators[randomInt(3)];

  return `${firstOperand} ${randomOperator} ${secondOperand}`;
};

const countExpression = (numStr) => {
  const data = numStr.split(' ');
  const firstOperand = Number(data[0]);
  const operator = data[1];
  const secondOperand = Number(data[2]);
  let result = 0;
  // eslint-disable-next-line default-case
  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
  }
  return result;
};

const gameLogic = (gameQuestion, userAnswer) => {
  const result = {
    userAnswer,
  };

  const correctAnswer = countExpression(gameQuestion);
  const checkAnswer = Number(userAnswer) === correctAnswer;

  return { ...result, checkAnswer, correctAnswer };
};

export default () => {
  const dataGameObj = {
    explanation: 'What is the result of the expression?',
    question: questionFunct,
    gameLogic,
  };

  return createGame(dataGameObj);
};
