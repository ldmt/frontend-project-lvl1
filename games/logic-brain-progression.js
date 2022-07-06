import createGame from '../src/index.js';
import randomInt from '../src/randomInt.js';

const questionFunct = () => {
  const firstNum = randomInt(30);
  const d = randomInt(10);
  let result = '';

  const makeIndexMissingNum = (source, n) => {
    if (n !== 0) {
      return n;
    }
    return makeIndexMissingNum(source, randomInt(source));
  };

  const indexMissingNum = makeIndexMissingNum(10, randomInt(10));

  for (let i = 1; i <= 10; i += 1) {
    if (indexMissingNum === i) {
      result += '.. ';
    } else {
      result += `${firstNum + (i - 1) * d} `;
    }
  }

  return result;
};

const identifyExpression = (str) => {
  const data = str.split(' ');

  const missingNumIndex = data.findIndex((value) => value === '..');

  let firstNumIndex = missingNumIndex - 1;
  let secondNumIndex = missingNumIndex + 1;

  if (missingNumIndex === 0 || missingNumIndex === (data.length - 1)) {
    firstNumIndex = 1;
    secondNumIndex = 2;
  }

  const firstNum = data.filter((value, index) => index === firstNumIndex);
  const secondNum = data.filter((value, index) => index === secondNumIndex);

  const d = ((secondNum - firstNum) / (secondNumIndex - firstNumIndex));
  const result = secondNum - (secondNumIndex - missingNumIndex) * d;

  return result;
};

const gameLogic = (gameQuestion, userAnswer) => {
  const result = {
    userAnswer,
  };

  const correctAnswer = identifyExpression(gameQuestion);
  const checkAnswer = Number(userAnswer) === correctAnswer;

  return { ...result, checkAnswer, correctAnswer };
};

export default () => {
  const dataGameObj = {
    explanation: 'What number is missing in the progression?',
    question: questionFunct,
    gameLogic,
  };

  return createGame(dataGameObj);
};
