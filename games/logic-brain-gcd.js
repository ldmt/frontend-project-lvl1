/* eslint-disable no-param-reassign */
/* eslint-disable no-bitwise */
/* eslint-disable no-else-return */
import createGame from '../src/index.js';
import randomInt from '../src/randomInt.js';

const questionFunct = () => `${randomInt(100)} ${randomInt(100)}`;

const binaryGCD = (num1, num2) => {
  let factor = 1;
  while (true) {
    if (num1 === num2) {
      if (num1 === 0) {
        throw new Error('GCD(0, 0)');
      } else {
        return factor * num1;
      }
    }
    if (num1 === 0) {
      return factor * num2;
    }
    if (num2 === 0) {
      return factor * num1;
    }

    if (num1 === 1 || num2 === 1) {
      return factor;
    }

    if (!(num1 & 1) && !(num2 & 1)) {
      factor <<= 1;
      num1 >>= 1;
      num2 >>= 1;
    } else if (!(num1 & 1)) {
      num1 >>= 1;
    } else if (!(num2 & 1)) {
      num2 >>= 1;
    } else if (num2 > num1) {
      num2 = (num2 - num1) >> 1;
    } else {
      num1 = (num1 - num2) >> 1;
    }
  }
};

const gcdExpression = (exp) => {
  const data = exp.split(' ');
  const firstNum = Number(data[0]);
  const secondNum = Number(data[1]);

  return binaryGCD(firstNum, secondNum);
};

const gameLogic = (gameQuestion, userAnswer) => {
  const result = {
    userAnswer,
  };

  const correctAnswer = gcdExpression(gameQuestion);
  const checkAnswer = Number(userAnswer) === correctAnswer;

  return { ...result, checkAnswer, correctAnswer };
};

export default () => {
  const dataGameObj = {
    explanation: 'Find the greatest common divisor of given numbers.',
    question: questionFunct,
    gameLogic,
  };

  return createGame(dataGameObj);
};
