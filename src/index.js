import readlineSync from 'readline-sync';
import welcome from './cli.js';

export default (currGameObj) => {
  console.log('Welcome to the Brain Games!');
  const name = welcome();
  const { explanation, question, gameLogic } = currGameObj;
  console.log(explanation);

  const makeStep = (q, gL) => {
    console.log(`Question: ${q}`);
    const a = readlineSync.question('Your answer: ');

    const { userAnswer, checkAnswer, correctAnswer } = gL(q, a);
    if (checkAnswer) {
      console.log('Correct!');
      return true;
    }
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  };

  let steps = 0;
  while (steps !== 3) {
    if (makeStep(question(), gameLogic)) {
      steps += 1;
    } else {
      break;
    }
  }

  if (steps === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
