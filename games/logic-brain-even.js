import createGame from '../src/index.js';

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const randomInt = () => Math.floor(Math.random() * 100);

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
    question: randomInt,
    gameLogic,
  };

  return createGame(dataGameObj);
};
