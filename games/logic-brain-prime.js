/* eslint-disable no-continue */
import createGame from '../src/index.js';
import randomInt from '../src/randomInt.js';

const questionFunct = () => `${randomInt(100)}`;

const isEven = (n) => n % 2 === 0;

const multiplesOfThree = (n) => n % 3 === 0;

const isPrime = (numStr) => {
  const n = Number(numStr);

  if (n === 0 || n === 1) {
    return false;
  }

  let prime = true;
  let i = 2;
  const sqrtNum = Math.sqrt(n);

  while (i <= sqrtNum) {
    if (isEven(i) && i !== 2) {
      i += 1;
      continue;
    }

    if (multiplesOfThree(i) && i !== 3) {
      i += 1;
      continue;
    }

    if (n % i === 0) {
      prime = false;
      break;
    }

    i += 1;
  }

  if (prime) {
    return 'yes';
  }

  return 'no';
};

const gameLogic = (gameQuestion, userAnswer) => {
  const result = {
    userAnswer,
  };
  const checkAnswer = userAnswer === isPrime(gameQuestion);
  const correctAnswer = userAnswer === 'yes' ? 'no' : 'yes';

  if (!['yes', 'no'].includes(userAnswer)) {
    return { ...result, checkAnswer, correctAnswer };
  }

  return { ...result, checkAnswer, correctAnswer };
};

export default () => {
  const dataGameObj = {
    explanation: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    question: questionFunct,
    gameLogic,
  };

  return createGame(dataGameObj);
};
