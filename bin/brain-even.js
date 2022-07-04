#!/usr/bin/env node
import readlineSync from 'readline-sync';
import welcome from '../src/cli.js';

const isEven = (num) => ((num % 2 === 0) ? 'yes' : 'no');

const evenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = welcome();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;
  while (correctAnswers !== 3) {
    const randomInt = Math.floor(Math.random() * 100);
    console.log(`Question: ${randomInt}`);
    const answer = readlineSync.question('Your answer: ');

    if (!['yes', 'no'].includes(answer)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }

    if (answer === isEven(randomInt)) {
      correctAnswers += 1;
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswers === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

evenGame();
