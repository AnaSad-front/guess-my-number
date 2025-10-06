'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🥳 Correct number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayTextContent = function (selector, content) {
  document.querySelector(selector).textContent = content;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayTextContent('.message', '⛔️ No number!');
  } else if (guess === secretNum) {
    displayTextContent('.message', '🥳 Correct number!');
    displayTextContent('.number', secretNum);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      displayTextContent('.highscore', highscore);
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayTextContent(
        '.message',
        guess > secretNum ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      displayTextContent('.score', score);
    } else {
      displayTextContent('.message', '💥 You lost the game!');
      displayTextContent('.score', 0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNum = Math.trunc(Math.random() * 20) + 1;

  displayTextContent('.message', 'Start guessing...');
  displayTextContent('.score', score);

  displayTextContent('.number', '?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
