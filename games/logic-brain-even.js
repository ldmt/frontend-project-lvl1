import createGame from '../src/index.js';
import randomInt from '../src/randomInt.js';

const isEven = (numStr) => ((Number(numStr) % 2 === 0) ? 'yes' : 'no');

const questionFunct = () => `${randomInt(100)}`;

const gameLogic = (gameQuestion, userAnswer) => {
  const result = {
    userAnswer,
  };
  const checkAnswer = userAnswer === isEven(gameQuestion);
  const correctAnswer = userAnswer === 'yes' ? 'no' : 'yes';

  if (!['yes', 'no'].includes(userAnswer)) {
    return { ...result, checkAnswer, correctAnswer };
  }

  return { ...result, checkAnswer, correctAnswer };
};

export default () => {
  const dataGameObj = {
    explanation: 'Answer "yes" if the number is even, otherwise answer "no".',
    question: questionFunct,
    gameLogic,
  };

  return createGame(dataGameObj);
};
